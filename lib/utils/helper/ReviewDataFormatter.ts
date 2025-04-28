import { ReactGoogleReview } from "react-google-reviews";


export const formattedReviews = (reviewData: ReactGoogleReview[], maxReviewLength: number): { formattedData: ReactGoogleReview[]; restOftheReviews: number } => {
    if (!reviewData && !maxReviewLength) return { formattedData: [], restOftheReviews: 0 };

    const formattedData = reviewData.slice(0, maxReviewLength).map((rew) => ({ ...rew }));
    const restOftheReviews = Math.max(0, reviewData.length - maxReviewLength);


    return {
        formattedData,
        restOftheReviews
    };
}