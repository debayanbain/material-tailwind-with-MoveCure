import { RegisteredApi } from "@/lib/apis/registared";
import { useMutation } from "@tanstack/react-query";

export const useRegisteredApi = () => {
  const mutation = useMutation({
    mutationKey: ["registeredApi"],
    mutationFn: RegisteredApi,
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
