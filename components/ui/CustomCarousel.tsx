"use client"

import Slider from "react-slick";
import TestimonialCard from './testimonial-card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { ReactGoogleReview } from "react-google-reviews";

const CustomCarousel = ({ reviews }: { reviews: ReactGoogleReview[] }) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {reviews.map((review: ReactGoogleReview) => (
                    <div key={review.reviewId} className="w-full h-full flex justify-center items-center">
                        <TestimonialCard testimonial={review} index={review.reviewId} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomCarousel; 