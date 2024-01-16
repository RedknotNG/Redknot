import {
  SignUpSchema,
  TBankDetailsSchema,
  TYourDetailsSchema,
} from "@/app/signup/page";

export const YourDetailsInitData: TYourDetailsSchema = {
  name: "",
  email: "",
  phone: "",
  refer: "",
};

export const BankDetailsInitData: TBankDetailsSchema = {
  bank_name: "",
  bank_number: 0,
  bank_account_name: "",
};

export const SignUpInitData: SignUpSchema = {
  ...YourDetailsInitData,
  ...BankDetailsInitData,
};
