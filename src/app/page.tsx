"use client";

import Image from "next/image";
import bg1 from "../../public/bg1.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import RedKnotIcon from "@/icons/redknot";
import { useRouter } from "next/navigation";

const earnersLoginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type TEarnersLoginSchema = z.infer<typeof earnersLoginSchema>;

export default function Login() {
  const [togglePassword, setTogglePassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEarnersLoginSchema>({
    resolver: zodResolver(earnersLoginSchema),
  });

  function onSubmit(data: TEarnersLoginSchema) {
    console.log(data);
    router.push("/earner/dashboard");
  }

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        <div className="w-[50%] h-screen relative">
          <div className="w-full h-screen absolute top-0 left-0">
            <div className="w-full h-screen">
              <Image src={bg1} alt="BG 1" sizes="100vw" className="w-full" />
            </div>
          </div>

          <div className="w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-between px-[72px] pt-[40px] pb-[80px]">
            <div className="w-full text-text-white">
              <RedKnotIcon />
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-text-white">
                Welcome back to the Redknot earners platform
              </h1>
              <p className="text-text-white leading-[24px]">
                Sign in to access Your earnings dashboard and keep track of your
                sales performance
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col h-screen p-[50px]">
          <div className="w-full flex justify-end">
            <div className="flex gap-[5px]">
              <p className="small">Don’t have an account?</p>
              <Link href={"/signup"}>
                <p className="small font-semibold text-primary-100">Sign up</p>
              </Link>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-grow flex justify-center items-center"
          >
            <div className="w-[370px] flex flex-col gap-[32px]">
              <h2 className="leading-[44px] font-semibold text-text-loud">
                Log in to Redknot
              </h2>
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

              <div className="w-full flex justify-center items-center">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="disabled:opacity-70 w-full bg-primary-100 text-center p-[12px] font-inter font-semibold text-[16px] text-text-white rounded-[6px]"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
