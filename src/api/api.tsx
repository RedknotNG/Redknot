import { TEarnerLevelSchema } from "@/app/admin/earner-levels/create-level/page";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function useLogin(cb: () => void, errCB: (errMsg: string) => void) {
  return useMutation({
    mutationFn: function (payload: { email: string; password: string }) {
      return axios.post(`${BASE_URL}/auth/login`, payload);
    },
    onSuccess: function (data: any) {
      // console.log(data);
      Cookies.set("redknot_admin", data.data.bearer);
      cb();
    },
    onError: function (error: any) {
      errCB(error.response.data.message);
    },
  });
}

export const UseGetEarnerLevels = async () => {
  const redknot_admin = Cookies.get("redknot_admin");
  try {
    const response = await axios.get(`${BASE_URL}/levels`, {
      headers: {
        Authorization: "Bearer " + redknot_admin,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export function useCreateLevel(createLevelCB: () => void) {
  const redknot_admin = Cookies.get("redknot_admin");
  return useMutation({
    mutationFn: function (
      payload: TEarnerLevelSchema & { is_default: boolean }
    ) {
      return axios.post(`${BASE_URL}/levels`, payload, {
        headers: {
          Authorization: "Bearer " + redknot_admin,
        },
      });
    },
    onSuccess: function (data: any) {
      console.log(data);
      createLevelCB();
    },
  });
}
