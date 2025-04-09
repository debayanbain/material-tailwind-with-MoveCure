import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { type Testimonial } from "@/Constant/testimonials";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-200"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name} 
            width={100}
            height={100}
            className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
          />
          <div>
            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
            <div className="text-sm text-gray-600">{testimonial.type}</div>
          </div>
        </div>
        <div className="text-primary">
        <FaQuoteRight size={16} />
        </div>
      </div>
      <div className="text-base text-gray-700">
        <p className="italic">{testimonial.content}</p>
      </div>
      <div className="mt-4 flex text-yellow-400">
        {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
          <FaStar size={16} key={i} />
        ))}
        {testimonial.rating % 1 !== 0 && (
          <FaStarHalfAlt size={16} />
        )}
      </div>
    </motion.div>
  );
}
