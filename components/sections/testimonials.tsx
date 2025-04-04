"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@/Constant/testimonials";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Patients Say"
          description="Real stories from real people who have experienced positive outcomes with our physiotherapy services."
        />
        
        <div className="mt-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {testimonials
                .slice(activeSlide * 3, (activeSlide * 3) + 3)
                .map((testimonial, index) => (
                  <TestimonialCard 
                    key={activeSlide * 3 + index} 
                    testimonial={testimonial} 
                    index={index}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  activeSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
