"use client";

import {
  BankDetailsInitData,
  SignUpInitData,
  YourDetailsInitData,
} from "@/lib/initData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import RedKnotIcon from "@/icons/RedknotIcon";
import DetailsIcon from "@/icons/DetailIcon";
import CreatePasswordIcon from "@/icons/CreatePassword";
import BankDetailsIcon from "@/icons/BankDetailIcon";

const yourDetailsSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  refer: z.string(),
});

const bankDetailsSchema = z.object({
  bank_name: z.string().min(1, "Bank name is required"),
  bank_number: z.number({
    required_error: "Bank number is required",
    invalid_type_error: "Bank number must be a number",
  }),
  bank_account_name: z.string().min(1, "Bank account name is required"),
});
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

export type TYourDetailsSchema = z.infer<typeof yourDetailsSchema>;

export type TBankDetailsSchema = z.infer<typeof bankDetailsSchema>;

export type TPasswordSchema = z.infer<typeof passwordSchema>;

export type SignUpSchema = {} & TYourDetailsSchema & TBankDetailsSchema;

export default function SignUp() {
  const [signUpData, setSignUpData] = useState<SignUpSchema>(SignUpInitData);
  const [yourDetailsData, setYourDetailsData] =
    useState<TYourDetailsSchema>(YourDetailsInitData);
  const [bankDetailsData, setBankDetailsData] =
    useState<TBankDetailsSchema>(BankDetailsInitData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalIndex, setTotalIndex] = useState(0);

  const router = useRouter();

  function yourDetailsCB(data: TYourDetailsSchema, next: number) {
    setSignUpData({ ...signUpData, ...data });
    setYourDetailsData(data);
    setCurrentIndex(next);
    if (totalIndex < next) {
      setTotalIndex(next);
    }
  }

  function bankDetailsCB(data: TBankDetailsSchema, next: number) {
    setSignUpData({ ...signUpData, ...data });
    setBankDetailsData(data);
    setCurrentIndex(next);
    if (totalIndex < next) {
      setTotalIndex(next);
    }
  }

  function passwordCB(data: TPasswordSchema) {
    // setSignUpData({ ...signUpData, ...data });
    const payload = {
      ...signUpData,
      password: data.password,
    };
    console.log(payload);
    router.replace("/");
  }

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="w-full px-[20px] pt-[64px] pb-[48px] bg-background-disabled flex justify-center">
        <div className="w-full max-w-[1400px] flex  flex-col items-center gap-[40px]">
          <div className="w-full flex justify-between items-center">
            <div className="text-text-loud">
              <RedKnotIcon />
            </div>

            <div className="flex gap-[5px]">
              <p className="small">Already have an account?</p>
              <Link href={"/"}>
                <p className="small font-semibold text-primary-100">Log in</p>
              </Link>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-[24px]">
            <button
              disabled={totalIndex < 0}
              onClick={() => setCurrentIndex(0)}
              className="w-full flex flex-col gap-[16px]"
            >
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: totalIndex >= 0 ? "#5E56FF" : "#DFE1E6",
                }}
              ></div>

              <div className="flex gap-[12px]">
                <DetailsIcon />
                <div className="flex flex-col items-start">
                  <p
                    className={
                      currentIndex >= 0
                        ? "text-text-loud font-semibold leading-[24px]"
                        : "text-text-subdued font-semibold leading-[24px]"
                    }
                  >
                    Your details
                  </p>
                  <p
                    className={
                      currentIndex >= 0
                        ? "text-text-normal leading-[24px]"
                        : "text-text-disabled leading-[24px]"
                    }
                  >
                    Provide your name, email, and phone
                  </p>
                </div>
              </div>
            </button>

            <button
              disabled={totalIndex < 1}
              onClick={() => setCurrentIndex(1)}
              className="w-full flex flex-col gap-[16px]"
            >
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: totalIndex >= 1 ? "#5E56FF" : "#DFE1E6",
                }}
              ></div>

              <div className="flex gap-[12px]">
                <BankDetailsIcon />
                <div className="flex flex-col items-start">
                  <p
                    className={
                      currentIndex >= 1
                        ? "text-text-loud font-semibold leading-[24px]"
                        : "text-text-subdued font-semibold leading-[24px]"
                    }
                  >
                    Enter your bank account details
                  </p>
                  <p
                    className={
                      currentIndex >= 1
                        ? "text-text-normal leading-[24px]"
                        : "text-text-disabled leading-[24px]"
                    }
                  >
                    Please provide your bank account info
                  </p>
                </div>
              </div>
            </button>

            <button
              disabled={totalIndex < 2}
              onClick={() => setCurrentIndex(2)}
              className="w-full flex flex-col gap-[16px]"
            >
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: totalIndex >= 2 ? "#5E56FF" : "#DFE1E6",
                }}
              ></div>

              <div className="flex gap-[12px]">
                <CreatePasswordIcon />
                <div className="flex flex-col">
                  <p
                    className={
                      currentIndex >= 1
                        ? "text-text-loud font-semibold leading-[24px]"
                        : "text-text-subdued font-semibold leading-[24px]"
                    }
                  >
                    Choose a password
                  </p>
                  <p
                    className={
                      currentIndex >= 1
                        ? "text-text-normal leading-[24px]"
                        : "text-text-disabled leading-[24px]"
                    }
                  >
                    Choose a secure password
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-[20px] max-w-[1400px] flex flex-col py-[50px] gap-[32px]">
        <div className="w-full flex flex-col gap-[24px]">
          <h2 className="leading-[44px] font-semibold">
            Create an Earner Account!
          </h2>
          <div className="w-full bg-border-normal h-[1px]"></div>
        </div>

        {currentIndex === 0 ? (
          <YourDetails cb={yourDetailsCB} init={yourDetailsData} />
        ) : null}

        {currentIndex === 1 ? (
          <BankDetails cb={bankDetailsCB} init={bankDetailsData} />
        ) : null}

        {currentIndex === 2 ? <PasswordDetails cb={passwordCB} /> : null}
      </div>
    </main>
  );
}

function YourDetails({
  cb,
  init,
}: {
  cb: (data: TYourDetailsSchema, next: number) => void;
  init: TYourDetailsSchema;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TYourDetailsSchema>({
    resolver: zodResolver(yourDetailsSchema),
    defaultValues: init,
  });

  function onSubmit(data: TYourDetailsSchema) {
    cb(data, 1);
  }
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-text-loud leading-[32px]">Your details</h4>
        <h6 className="font-normal leading-[24px] text-text-normal">
          Provide your name, email, and phone
        </h6>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] flex flex-col gap-[16px]"
      >
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Full name</p>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.name && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.name.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
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

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Phone number</p>
            </label>
            <input
              {...register("phone")}
              type="text"
              placeholder="Enter your phone number"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.phone && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.phone.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Referral ID</p>
            </label>
            <input
              {...register("refer")}
              type="text"
              placeholder="Type in Referral ID / Username"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.refer && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.refer.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex justify-end items-center mt-[16px]">
          <button
            type="submit"
            className="w-fit bg-primary-100 text-center py-[12px] px-[20px] font-montserrat font-semibold text-[16px] text-text-white rounded-[6px]"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

function BankDetails({
  cb,
  init,
}: {
  cb: (data: TBankDetailsSchema, next: number) => void;
  init: TBankDetailsSchema;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TBankDetailsSchema>({
    resolver: zodResolver(bankDetailsSchema),
    defaultValues: init,
  });

  function onSubmit(data: TBankDetailsSchema) {
    cb(data, 2);
  }
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-text-loud leading-[32px]">
          Your bank account details
        </h4>
        <h6 className="font-normal leading-[24px] text-text-normal">
          Please provide your bank account info
        </h6>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] flex flex-col gap-[16px]"
      >
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Bank name</p>
            </label>
            <input
              {...register("bank_name")}
              type="text"
              placeholder="Enter your bank name"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.bank_name && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.bank_name.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Bank account number</p>
            </label>
            <input
              {...register("bank_number", {
                valueAsNumber: true,
              })}
              type="text"
              placeholder="Enter your bank account number"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.bank_number && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.bank_number.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Bank account name</p>
            </label>
            <input
              {...register("bank_account_name")}
              type="text"
              placeholder="Enter your bank account name"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.bank_account_name && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.bank_account_name.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex justify-end items-center mt-[16px]">
          <button
            type="submit"
            className="w-fit bg-primary-100 text-center py-[12px] px-[20px] font-montserrat font-semibold text-[16px] text-text-white rounded-[6px]"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

function PasswordDetails({ cb }: { cb: (data: TPasswordSchema) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TPasswordSchema>({
    resolver: zodResolver(passwordSchema),
  });

  function onSubmit(data: TPasswordSchema) {
    cb(data);
  }
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-text-loud leading-[32px]">Choose a password</h4>
        <h6 className="font-normal leading-[24px] text-text-normal">
          Choose a secure password
        </h6>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] flex flex-col gap-[16px]"
      >
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Create a password</p>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Create a password"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.password && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.password.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
            <label htmlFor="">
              <p className="small text-text-muted">Confirm password</p>
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm your password"
              className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
            />
          </div>

          {errors.confirmPassword && (
            <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
              {`${errors.confirmPassword.message}`}
            </p>
          )}
        </div>

        <div className="w-full flex justify-end items-center mt-[16px]">
          <button
            type="submit"
            className="w-fit bg-primary-100 text-center py-[12px] px-[20px] font-montserrat font-semibold text-[16px] text-text-white rounded-[6px]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
