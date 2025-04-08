import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa6";
import { type Service } from "@/Constant/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
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

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
          <p className="text-base text-gray-600 mb-4">
            {service.description}
          </p>
        </div>
        {/* <a href="#" className="inline-flex items-center text-purple-600 hover:text-primary font-medium transition-colors">
          Learn more <FaArrowRight size={16} className="ml-1" />
        </a> */}
      </div>
    </motion.div>
  );
}
