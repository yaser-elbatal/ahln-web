/* eslint-disable react/no-unescaped-entities */

"use client";

import BouncingText from "@/components/bouncing-text";
import AhlnSection from "@/components/home/AhlnSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import LatestHappenings from "@/components/home/HappeningsSection";
import TypewriterText from "@/components/typewriter-text";
import { Button } from "@/components/ui/button";
import VideoComparison from "@/components/video-comparison";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Smartphone,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const secureRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  // Scroll to next section
  const scrollToNextSection = () => {
    if (appRef.current) {
      appRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/delivery-box.jpg"
            alt="Smart Delivery System"
            fill
            className="object-cover opacity-30 md:block hidden"
            priority
          />

          <Image
            src="/images/delivery-box-mobile.jpg"
            alt="Smart Delivery System"
            fill
            className="object-cover opacity-30 md:hidden block"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BouncingText
            text="Ahln."
            className="text-6xl md:text-8xl font-bold text-cyan-400 mb-4"
            delay={0.3}
          />

          <TypewriterText
            text="Smart Secured Delivery"
            className="text-3xl md:text-5xl font-semibold text-white mb-6"
            delay={1.5}
            showCursor={false}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Reinventing how packages arrive at your doorstep with cutting-edge
            technology and unparalleled security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="text-white text-lg">Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-cyan-400" />
              <span className="text-white text-lg">App Control</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="h-6 w-6 text-cyan-400" />
              <span className="text-white text-lg">Live Stream</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 4.5 }}
          >
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-cyan-950 font-medium px-8 py-6 text-lg rounded-full">
              <Link
                href={{
                  pathname: `/products`,
                }}
              >
                Discover Ahln.
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="h-10 w-10 text-cyan-400" />
          </motion.div>
        </motion.div>
      </section>
      <AhlnSection />
      {/* Process Flow Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#070F22] to-[#080f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            How It <span className="text-cyan-400">Works</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative">
            {[
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
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col items-center text-center z-10 w-full md:w-1/4"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 180, 216, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-24 h-24 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center text-4xl mb-6 shadow-lg shadow-cyan-900/20"
                >
                  <Image
                    src={step.icon}
                    alt="Ahln Smart Delivery Box"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-base">{step.description}</p>

                {/* Don't show arrow after the last step */}
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="hidden md:flex absolute left-0 right-0 top-12 items-center justify-center"
                    style={{ left: `${index * 25 + 18.75}%`, width: "12.5%" }}
                  >
                    <ArrowRight className="w-10 h-10 text-cyan-400" />
                  </motion.div>
                )}

                {/* Mobile arrow (down) */}
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex md:hidden mt-6 mb-6"
                  >
                    <svg
                      className="w-8 h-8 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Connecting line for desktop */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-cyan-800 z-0 origin-left"
            />
          </div>
        </div>
      </section>

      {/* Video Comparison Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Experience the <span className="text-cyan-400">Difference</span>
          </motion.h2>

          <VideoComparison
            beforeVideoSrc="/videos/beforeAhln.mp4"
            afterVideoSrc="/videos/afterAhln.mp4"
          />
        </div>
      </section>

      {/* App Interface Section */}
      <section
        ref={appRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-black to-cyan-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Control at your{" "}
                <span className="text-cyan-400">fingertips</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-gray-300 mb-8"
              >
                Track all your shipments in one place with our intuitive mobile
                app. Get real-time updates and manage delivery preferences with
                ease.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ul className="space-y-4">
                  {[
                    "Real-time tracking and notifications",
                    "Manage multiple deliveries at once",
                    "Schedule delivery windows that work for you",
                    "Share access with family members",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="h-4 w-4 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] h-[560px]">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="absolute inset-0 rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl bg-black z-10 items-center justify-center"
                >
                  <Image
                    src="/images/ship.jpg"
                    alt="Mobile App Interface"
                    fill
                    className="object-cover object-center" // <-- ADDED object-bottom
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secure Delivery Section */}
      <section ref={secureRef} className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="order-2 md:order-1 relative"
            >
              <div className="relative mx-auto max-w-md">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
                >
                  <Image
                    src="/images/delivery-box.jpg"
                    alt="Smart Delivery Box"
                    width={600}
                    height={800}
                    className="object-cover w-full"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -left-10 top-1/2 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                <span className="text-cyan-400">Secure</span> Package Storage
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-gray-300 mb-8"
              >
                Our smart delivery boxes ensure your packages remain safe and
                secure until you're ready to collect them.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ul className="space-y-4">
                  {[
                    "Tamper-proof design with advanced security features",
                    "Weather-resistant construction protects your deliveries",
                    "Multiple compartment sizes for various package types",
                    "Seamless integration with delivery services",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="h-4 w-4 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Delivery Process Section */}
      <section
        ref={processRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-black to-cyan-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                <span className="text-cyan-400">Seamless</span> Delivery Process
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-gray-300 mb-8"
              >
                Our delivery process is designed to be simple and efficient,
                ensuring your packages are delivered securely every time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ul className="space-y-4">
                  {[
                    "Couriers have secure, one-time access codes",
                    "Automatic verification of delivery with photo confirmation",
                    "Temperature-controlled compartments for sensitive items",
                    "Contactless delivery for your safety and convenience",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="h-4 w-4 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
                >
                  <Image
                    src="/images/delivery-process.jpg"
                    alt="Delivery Process"
                    width={600}
                    height={800}
                    className="object-cover w-full"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -right-10 top-1/2 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <LatestHappenings />
      {/* Mobile App Section */}
    </main>
  );
}
