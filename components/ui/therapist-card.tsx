import { motion } from "framer-motion";
import { type Therapist } from "@/Constant/therapists";
import Image from "next/image";

interface TherapistCardProps {
  therapist: Therapist;
  index: number;
}

export default function TherapistCard({ therapist, index }: TherapistCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden text-center border border-gray-200"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="h-64 overflow-hidden">
        <Image 
          src={therapist.image} 
          alt={therapist.name} 
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{therapist.name}</h3>
        <p className="text-base text-purple-600 font-medium mb-3">{therapist.specialty}</p>
        <p className="text-base text-gray-600 mb-4">
          {therapist.bio}
        </p>
      </div>
    </motion.div>
  );
}
