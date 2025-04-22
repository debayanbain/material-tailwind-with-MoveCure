'use client'

import FireCelebrateion from '@/app/Invoice/page';
import AvatarGroup from '@atlaskit/avatar-group';
import { ReactGoogleReview, ReactGoogleReviews } from 'react-google-reviews';
import "react-google-reviews/dist/index.css";
import { FaStar } from 'react-icons/fa';

const BadgeReview = () => {
    return (
        <ReactGoogleReviews
            layout="custom"
            featurableId="28fe43d6-7d48-495c-9ccd-19d797f73eea"
            renderer={(reviews: ReactGoogleReview[]) => {
                console.log('reviews', reviews);

                const avaData = reviews.map((item, i) => ({
                    key: i + 'avatar',
                    name: item.reviewer?.displayName,
                    src: "https://lh3.googleusercontent.com/a-/ALV-UjWEsBOHQedp_gdD0tFaBD2Eqwm-1glnkq0-WffbuVas8VE1P3_i=s120-c-rp-mo-br100",
                }))

                return (
                    <div className='flex flex-col gap-1'>
                        <FireCelebrateion />
                        <div className="mt-4 flex text-yellow-400">
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                        </div>
                        {reviews.length > 0 && (
                            <p className='text-base text-black font-bold ' >
                                {`${reviews[0].starRating} ${reviews[0].starRating > 1 ? 'rating from' : 'star'} ${reviews.length} ${reviews.length > 1 ? 'reviews ' : 'review'}`}
                            </p>
                        )}
                        <AvatarGroup
                            appearance="stack"
                            borderColor="#FF6347"
                            data={avaData}
                            size="large"
                            isTooltipDisabled={false}
                            onMoreClick={() => window.location.href = "#testimonials"}
                        />
                    </div>
                )
            }}
        />
    );
}

export default BadgeReview;