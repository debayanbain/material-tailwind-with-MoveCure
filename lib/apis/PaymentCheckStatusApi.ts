import apiClient from "../axiosInstance";

type PaymentCheckStatus = {
    response: {
        orderId: string;
        paymentDetails: [{ transactionId: string, amount: number | undefined }];
    }
}

export const PaymentCheckStatsApi = async ({ merchantOrderId }: { merchantOrderId: string }) => {
    const response = await apiClient.request<PaymentCheckStatus>({
        method: 'GET',
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        url: "/userAuth/check-status",
        params: { merchantOrderId }
    });

    return response;
}