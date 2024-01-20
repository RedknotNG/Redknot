"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import RedKnotIcon from "@/icons/Redknot";

const adminLoginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type TAdminLoginSchema = z.infer<typeof adminLoginSchema>;

export default function AdminLogin() {
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAdminLoginSchema>({
    resolver: zodResolver(adminLoginSchema),
  });

  function onSubmit(data: TAdminLoginSchema) {
    console.log(data);
  }

  return (
    <main className="w-full flex flex-col gap-[50px] justify-center p-[100px]">
      <div className="w-full flex justify-center text-background-loud">
        <RedKnotIcon />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-grow flex justify-center items-center"
      >
        <div className="w-[400px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="leading-[38px] font-semibold text-center text-text-loud">
              Login to your account
            </h2>
            <p className="text-center text-[#645D5D] leading-[20px]">
              Welcome back. Please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
                <label htmlFor="">
                  <p className="small text-text-muted">Email address</p>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Enter your email"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.email && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.email.message}`}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
                <label htmlFor="">
                  <p className="small text-text-muted">Password</p>
                </label>
                <div className="w-full bg-transparent flex justify-between gap-[10px]">
                  <input
                    {...register("password")}
                    type={togglePassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="flex-grow font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                  />

                  <button
                    type="button"
                    className="w-fit p-[5px]"
                    onClick={(e) => {
                      e.preventDefault();
                      setTogglePassword(!togglePassword);
                    }}
                  >
                    {togglePassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </button>
                </div>
              </div>

              {errors.password && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.password.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className="disabled:opacity-70 admin-login-button w-full text-center p-[12px] font-inter font-semibold text-[16px] text-text-white rounded-[6px]"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex gap-[5px]">
              <p className="small">Forgot Password?</p>
              <Link href={"/"}>
                <p className="small font-semibold text-primary-100">
                  Reset your password
                </p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
