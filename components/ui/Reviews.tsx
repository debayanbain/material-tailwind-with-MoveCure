import React from 'react';
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import CustomCarousel from './CustomCarousel';

const Reviews = React.memo(() => {
    return (
        <ReactGoogleReviews layout="custom" featurableId={"28fe43d6-7d48-495c-9ccd-19d797f73eea"} renderer={(reviews) => {

            return (
                <CustomCarousel reviews={reviews} />
            )
        }} />
    )
})

Reviews.displayName = "Reviews";

export default Reviews
