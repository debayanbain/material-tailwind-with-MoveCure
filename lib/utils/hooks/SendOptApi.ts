
import { sendEmailApi } from "@/lib/apis/send_otpApi";
import { useMutation } from "@tanstack/react-query";

export const useSendOptApi = () => {
    const mutation = useMutation({
        mutationKey: ['sendOptApi'],
        mutationFn: sendEmailApi
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
    }
};