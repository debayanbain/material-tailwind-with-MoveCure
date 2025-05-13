import apiClient from "../axiosInstance";

type CreatePaymentResponse = {
    response: {
        redirectUrl: string
    }
};

export const createPayment = async ({ PayAmount }: { PayAmount: number }) => {
    const result = await apiClient.request<CreatePaymentResponse>({
        method: 'POST',
        baseURL: 'https://move-cure-backend.vercel.app',
        url: '/userAuth/create-payment',
        data: {
            PayAmount: PayAmount
        }
    });

    return result;
}