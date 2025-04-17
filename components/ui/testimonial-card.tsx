import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { formatDateToMonthYearDate } from "@/lib/utils/helper/dateFormatter";
import { ReactGoogleReview } from "react-google-reviews";
interface TestimonialCardProps {
  testimonial: ReactGoogleReview;
  index: number | string | undefined | null;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (typeof index === 'number' ? index : 0) * 0.1
      }
    }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-200 mr-3"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image 
            src={testimonial.reviewer?.profilePhotoUrl ?? "/default-profile.png"} 
            alt={testimonial.reviewer?.displayName ?? "Anonymous"} 
            width={100}
            height={100}
            className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
          />
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-gray-800">{testimonial.reviewer?.displayName ?? "Anonymous"}</h4>
            <div className="text-sm text-gray-600">{formatDateToMonthYearDate(testimonial.createTime ?? new Date().toISOString())}</div>
          </div>
        </div>
        <div className="text-primary">
        <FaQuoteRight size={16} />
        </div>
      </div>
      <div className="text-base text-gray-700">
        <p className="italic">{testimonial.comment}</p>
      </div>
      <div className="mt-4 flex text-yellow-400">
        {Array.from({ length: Math.floor(testimonial.starRating ?? 0) }).map((_, i) => (
          <FaStar size={16} key={i} />
        ))}
        {(testimonial.starRating ?? 0) % 1 !== 0 && (
          <FaStarHalfAlt size={16} />
        )}
      </div>
    </motion.div>
  );
}
