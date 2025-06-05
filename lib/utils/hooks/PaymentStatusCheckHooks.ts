import { PaymentCheckStatsApi } from "@/lib/apis/PaymentCheckStatusApi";
import { useMutation } from "@tanstack/react-query";


export const usePaymentStatusCheck = ()=> {
    return useMutation({
        mutationKey: ['paymentStatusCheck'],
        mutationFn: PaymentCheckStatsApi
    })
}