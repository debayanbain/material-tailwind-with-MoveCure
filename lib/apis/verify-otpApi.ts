import apiClient from "../axiosInstance";

export interface VerifyOtpResponse {
  data: {
    isUserExist: boolean;
    loginToken: string | null;
  };
}

export const verifyOtpApi = async ({ otpToken, otp }: { otpToken: string; otp: string }) => {
  const response = await apiClient.request<VerifyOtpResponse>({
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    url: "/auth/verify-email",
    data: {
      token: otpToken,
      otp,
    },
  });

  return response;
};
