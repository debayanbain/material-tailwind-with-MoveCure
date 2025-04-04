"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/Constant/services";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Specialized Services"
          description="We offer a comprehensive range of physiotherapy treatments tailored to meet your specific needs and help you achieve optimal health."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
