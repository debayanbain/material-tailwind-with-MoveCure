import { ReactGoogleReview } from "react-google-reviews";

export type reviewStoreTypespayload = {
    reviews: ReactGoogleReview[],
    totalReviewCount: number,
    averageRating: number | string
}
export interface reviewStoreTypes {
    reviews: ReactGoogleReview[],
    totalReviewCount: number,
    averageRating: number | string,
    setReviews: (payload: reviewStoreTypespayload)=> void
}