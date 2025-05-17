"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

const steps = [
  {
    number: 1,
    title: "Order Online",
    description:
      "Shop from your favorite retailers and select Ahln. Box for your delivery option.",
    icon: "/images/shipment.png",
  },
  {
    number: 2,
    title: "Courier Delivers",
    description:
      "The courier securely deposits your package in the Ahln. Box designed for you.",
    icon: "/images/Delivers.png",
  },
  {
    number: 3,
    title: "Receive Notification",
    description:
      "Get instantly notified via our app when your package has been delivered.",
    icon: "/images/Receive.png",
  },
  {
    number: 4,
    title: "Pickup Anytime",
    description:
      "Collect your package at your convenience using our secure access system.",
    icon: "/images/Pickup.png",
  },
];

export default function HowItWorksSection() {
  const fadeInUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  const staggerSteps = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 relative "
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How Ahln. Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, streamlined process that makes package delivery and
            retrieval effortless.
          </p>
        </motion.div>

        <motion.div
          variants={staggerSteps}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              whileHover={{
                scale: 1.04,
                rotateZ: 1,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
              className="flex flex-col items-center text-center cursor-default"
            >
              {/* Step Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg"
              >
                {step.number}
              </motion.div>

              {/* Card */}
              <div className="bg-[#151933] hover:bg-[#1c2333] transition-colors duration-300 rounded-lg p-6 w-full shadow-md">
                {/* Icon Glow */}
                <div className="w-20 h-20 mx-auto relative mb-4">
                  <div className="absolute inset-0 -m-2 rounded-full bg-blue-400/20 blur-lg"></div>
                  <div className="relative w-full h-full flex items-center justify-center text-3xl rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 text-white">
                    <Image
                      src={step.icon}
                      alt="Ahln Smart Delivery Box"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
