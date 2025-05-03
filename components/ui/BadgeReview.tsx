'use client'

// import FireCelebrateion from '@/components/Fire';
import { useReviews } from '@/lib/utils/hooks/ReviewFetchHook';
import "react-google-reviews/dist/index.css";
import { FaStar } from 'react-icons/fa';
import { IconButton } from '@/lib/MtConfig';
import { formattedReviews } from '@/lib/utils/helper/ReviewDataFormatter';
import SkeletonLoader from './contentLoader';
import Image from 'next/image';

const BadgeReview = () => {
    const { data: Reviewdata, isLoading } = useReviews(
      process.env.NEXT_PUBLIC_ACCOUNT_ID_FEATURABLE as string,
      process.env.NEXT_PUBLIC_LOCATION_ID_FEATURABLE as string,
      process.env.NEXT_PUBLIC_API_KEY_FEATURABLE as string
    );
    const { formattedData, restOftheReviews } = formattedReviews(Reviewdata?.reviews ?? [], 4);
    const totalReviewsCounts = Reviewdata?.totalReviewCount ?? 0
    const averageRating = (Math.round(parseFloat((Reviewdata?.averageRating ?? 0).toString()) * 10) / 10).toFixed(1);

    return (
        <div className='flex flex-col gap-1'>
            {isLoading ? (
                <SkeletonLoader />
            ) : (
                <>
                    <div className="mt-4 flex text-yellow-400">
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                    </div>
                    <div>
                        <p className='text-base'>{`${averageRating} rating from ${totalReviewsCounts} reviews`}</p>
                    </div>
                    <div className="flex items-center -space-x-4">
                        {formattedData?.map((rew, i) => (
                            <Image
                                key={i}
                                src={rew?.reviewer?.profilePhotoUrl ?? "/default-profile.png"}
                                alt='user-2'
                                width={100}
                                height={100}
                                className='w-11 h-11'
                            />
                        ))}

                        {
                            !isLoading && (
                                <IconButton variant="filled" className="rounded-full w-11 h-11 bg-white text-black border border-yellow-500 border-dashed font-bold" onClick={() => { window.location.href = "#testimonials" }}>
                                    {restOftheReviews > 0 && `${restOftheReviews}+`}
                                </IconButton>
                            )
                        }

                    </div>
                </>
            )}
        </div>
    );
}

export default BadgeReview;