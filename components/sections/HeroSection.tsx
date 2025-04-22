"use client";

import { motion } from "framer-motion";
import { Button } from "@/lib/MtConfig";
import Image from "next/image";
import Link from "next/link";
import BadgeReview from "../ui/BadgeReview";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const statItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-0">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 text-white mb-10 md:mb-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Empowering You to Move with Confidence
              </motion.h1>
              <motion.p
                className="mt-4 md:mt-6 text-lg md:text-xl opacity-90 max-w-md"
                variants={itemVariants}
              >
                Professional physiotherapy services to help you recover, strengthen, and improve your quality of life.
              </motion.p>

              <motion.div className="w-full" variants={itemVariants}>
                <BadgeReview />
              </motion.div>

              <motion.div
                className="mt-8 md:mt-10 space-x-4 flex flex-wrap"
                variants={itemVariants}
              >
                <Link href={'/booking'} target="blank">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 mb-4 md:mb-0"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <Link href={'#services'}>
                  <Button
                    variant="gradient"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={'/images/hero.jpg'}
                  alt={'hero-image'}
                  width={1000}
                  height={1000}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="bg-white py-6 md:py-8"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5000+", label: "Happy Patients" },
                { value: "15+", label: "Expert Therapists" },
                { value: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div key={index} variants={statItemVariants}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
