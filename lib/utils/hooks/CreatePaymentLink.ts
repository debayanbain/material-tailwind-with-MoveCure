import { createPayment } from "@/lib/apis/create_aymentApi";
import { useMutation } from '@tanstack/react-query';

export const useCreatePaymentLink = () => {
    return useMutation({
        mutationKey: ['createPaymentLink'],
        mutationFn: createPayment,
    })
}