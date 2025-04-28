import { ReviewsApi } from '@/lib/apis/reviewsApi';
import { useReviewStore } from '@/store/ReviewStore';
import { reviewStoreTypespayload } from '@/Types/StoreTypes';
import { useQuery } from '@tanstack/react-query';


export const useReviews = (accountId: string, locationId: string, apiKey: string)=> {
    return useQuery({
        queryKey: ['reviews', accountId, locationId],
        queryFn: async () => {
            const Reviewdata = await ReviewsApi(accountId, locationId, apiKey) as unknown as reviewStoreTypespayload;
            const { reviews, totalReviewCount, averageRating  } = Reviewdata;
            const formatedaverageRating = (Math.round(parseFloat(averageRating.toString()) * 10) / 10).toFixed(1);
            useReviewStore.getState().setReviews({reviews, totalReviewCount, averageRating:formatedaverageRating});
            return Reviewdata;
        },
        staleTime: 1000 * 60 * 5,
        enabled: !!accountId && !!locationId && !!apiKey
    })
}