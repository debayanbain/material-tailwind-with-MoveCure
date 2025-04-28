import apiClient from '@/lib/axiosInstance';

export const ReviewsApi = async(accontId: string, locationId: string, apiKey: string) => {
    const response = await apiClient.get(`https://featurable.com/api/v1/accounts/${accontId}/locations/${locationId}/reviews`, {
        params: { apiKey },
        headers: { 'Content-Type': 'application/json' },
    });

    return response;
}