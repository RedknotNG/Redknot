"use client";

import BankDetailsIcon from "@/icons/bankDetailsIcon";
import CreatePasswordIcon from "@/icons/createPasswordIcon";
import DetailsIcon from "@/icons/detailsIcon";
import RedKnotIcon from "@/icons/redknot";
import { SignUpInitData } from "@/lib/initData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const yourDetailsSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  refer: z.string().min(1, "Referral ID is required"),
});

const bankDetailsSchema = z.object({
  bank_name: z.string().min(1, "Bank name is required"),
  bank_number: z.number({
    required_error: "Bank number is required",
    invalid_type_error: "Bank number must be a number",
  }),
  bank_account_name: z.string().min(1, "Bank account name is required"),
});

export type TYourDetailsSchema = z.infer<typeof yourDetailsSchema>;

export type TBankDetailsSchema = z.infer<typeof bankDetailsSchema>;

export type SignUpSchema = {} & TYourDetailsSchema & TBankDetailsSchema;

export default function SignUp() {
  const [signUpData, setSignUpData] = useState<SignUpSchema>(SignUpInitData);
  const [currentIndex, setCurrentIndex] = useState(0);

  function YourDetailsCB(data: TYourDetailsSchema, next: number) {
    setSignUpData({ ...signUpData, ...data });
    setCurrentIndex(next);
  }

  function BankDetailsCB(data: TBankDetailsSchema, next: number) {
    setSignUpData({ ...signUpData, ...data });
    setCurrentIndex(next);
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
            <div className="w-full flex flex-col gap-[16px]">
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: currentIndex >= 0 ? "#5E56FF" : "#DFE1E6",
                }}
              ></div>

              <div className="flex gap-[12px]">
                <DetailsIcon />
                <div className="flex flex-col">
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
            </div>

            <div className="w-full flex flex-col gap-[16px]">
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: currentIndex >= 1 ? "#5E56FF" : "#DFE1E6",
                }}
              ></div>

              <div className="flex gap-[12px]">
                <BankDetailsIcon />
                <div className="flex flex-col">
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
            </div>

            <div className="w-full flex flex-col gap-[16px]">
              <div
                className="w-full h-[4px]"
                style={{
                  backgroundColor: currentIndex >= 2 ? "#5E56FF" : "#DFE1E6",
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
            </div>
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

        {/* {[0,1,2].map((data)=><div key={data} className="w-full">
{data === }

        </div>)} */}

        {currentIndex === 0 ? <YourDetails cb={YourDetailsCB} /> : null}

        {currentIndex === 1 ? <BankDetails cb={BankDetailsCB} /> : null}
      </div>
    </main>
  );
}

function YourDetails({
  cb,
}: {
  cb: (data: TYourDetailsSchema, next: number) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TYourDetailsSchema>({
    resolver: zodResolver(yourDetailsSchema),
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
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

function BankDetails({
  cb,
}: {
  cb: (data: TBankDetailsSchema, next: number) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TBankDetailsSchema>({
    resolver: zodResolver(bankDetailsSchema),
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
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
