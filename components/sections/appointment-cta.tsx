"use client";

import { motion } from "framer-motion";
import { Button } from "@/lib/MtConfig";
import Link from "next/link";

export default function AppointmentCta() {
  return (
    <section className="bg-purple-700 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Ready to Start Your Recovery Journey?</h2>
            <p className="mt-3 text-lg opacity-90">Book your first consultation today and take the first step towards pain-free movement.</p>
          </div>
          <Link href={'/booking'} target="blank">
            <Button
              size="lg"
              variant="filled"
              ripple={false}
              className="bg-white text-primary hover:bg-gray-100 text-lg"
            >
              Book an Appointment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
