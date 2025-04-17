"use client";

import SectionHeader from "@/components/ui/section-header";
import Reviews from "../ui/Reviews";

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Patients Say"
          description="Real stories from real people who have experienced positive outcomes with our physiotherapy services."
        />

        <div className="mt-12 relative overflow-hidden">
          {/* <Reviews /> */}
          <Reviews />

        </div>
      </div>
    </section>
  );
}
