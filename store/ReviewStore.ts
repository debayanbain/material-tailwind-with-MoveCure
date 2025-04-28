import { type reviewStoreTypes } from '@/Types/StoreTypes';
import { create } from 'zustand';

export const useReviewStore = create<reviewStoreTypes>((set)=> ({
    reviews: [],
    totalReviewCount: 0,
    averageRating: 0,
    setReviews: ({reviews, totalReviewCount, averageRating})=> set({
        reviews, totalReviewCount, averageRating
    })
}));