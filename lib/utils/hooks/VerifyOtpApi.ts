import { verifyOtpApi } from "@/lib/apis/verify-otpApi";
import { useMutation } from "@tanstack/react-query";

export const useVerifyOtpApi = () => {
  const mutation = useMutation({
    mutationKey: ["verifyOtpApi"],
    mutationFn: verifyOtpApi,
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    reset: mutation.reset,
    error: mutation.error,
    data: mutation.data,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
  };
};
