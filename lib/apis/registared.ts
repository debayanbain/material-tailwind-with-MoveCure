import apiClient from "../axiosInstance";

interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export interface RegisterPayload {
  full_name: string;
  email: string;
  phone_number: string;
  dob: string | Date;
  gender: string;
  address: string;
  isEmailVerify: boolean;
  isPhoneVerify: boolean;
}

export const RegisteredApi = async (payloads: RegisterPayload) => {
  const response = await apiClient.request<RegisterResponse>({
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    url: "/auth/registartion",
    data: {...payloads},
  });

  return response;
};
