"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import TherapistCard from "@/components/ui/therapist-card";
import { therapists } from "@/Constant/therapists";

export default function Therapists() {
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
    <section id="therapists" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Expert Therapists"
          description="Meet our team of qualified physiotherapists dedicated to providing you with the highest standard of care."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {therapists.map((therapist, index) => (
            <TherapistCard key={index} therapist={therapist} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
