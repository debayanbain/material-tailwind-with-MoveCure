import apiClient from "../axiosInstance";

interface SendOtpResponse {
  success: boolean;
  data: {
    otpToken: string;
  };
}

export const sendEmailApi = async ({ email }: { email: string }) => {
  const response = await apiClient.request<SendOtpResponse>({
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    url: "/auth/send-email",
    data: { email },
  });

  return response;
};
