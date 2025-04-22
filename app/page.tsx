import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/services";
import AppointmentCta from "@/components/sections/appointment-cta";
import Therapists from "@/components/sections/therapists";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
      <main className="min-h-screen">
        <HeroSection />
        <Services />
        <AppointmentCta />
        <Therapists />
        <Testimonials />
      </main>
  );
}
