import apiClient from "../axiosInstance";

type CreatePaymentResponse = {
    merchantOrderId: string,
    response: {
        redirectUrl: string
    }
};

export const createPayment = async ({ PayAmount }: { PayAmount: number }) => {
    const result = await apiClient.request<CreatePaymentResponse>({
        method: 'POST',
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        url: '/userAuth/create-payment',
        data: {
            PayAmount: PayAmount
        }
    });

    return result;
}