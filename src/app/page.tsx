/* eslint-disable react/no-unescaped-entities */

"use client";

import BouncingText from "@/components/bouncing-text";
import AhlnSection from "@/components/home/AhlnSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import LatestHappenings from "@/components/home/HappeningsSection";
import TypewriterText from "@/components/typewriter-text";
import { Button } from "@/components/ui/button";
import VideoComparison from "@/components/video-comparison";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Smartphone, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const secureRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLanguage();

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  // // Scroll to next section
  // const scrollToNextSection = () => {
  //   if (appRef.current) {
  //     appRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <main className="relative bg-background text-white overflow-hidden">
      {/* Hero Section */}

      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background container with overlay */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          {/* Background image with overlay wrapper */}
          <div className="relative w-full h-full">
            {/* Desktop Background Image */}
            <Image
              src="/images/delivery-box.jpg"
              alt="Smart Delivery System"
              fill
              priority
              className="object-cover hidden md:block"
            />

            {/* Mobile Background Image */}
            <Image
              src="/images/delivery-box-mobile.jpg"
              alt="Smart Delivery System"
              fill
              priority
              className="object-cover block md:hidden"
            />
            {/* Dark Overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            />
          </div>
        </motion.div>

        {/* Foreground content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 mt-40">
          <BouncingText
            text="Ahln."
            className="text-6xl md:text-8xl font-bold text-primary drop-shadow-xl"
            delay={0.3}
          />

          <TypewriterText
            text={t("heroSubtitle")}
            className="text-3xl md:text-5xl font-semibold text-white mb-6"
            delay={1}
            showCursor={true}
            speed={75} // optional, default 100ms
            lang={lang} // from your LanguageContext
          />
          {/* Feature cards */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto"
          >
            {t("heroDescription")}
          </motion.p>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            {[
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                label: "Security",
              },
              {
                icon: <Video className="h-6 w-6 text-white" />,
                label: "liveStream",
              },
              {
                icon: <Smartphone className="h-6 w-6 text-white" />,
                label: "AppControl",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 min-w-[180px] text-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {item.icon}
                <span className="text-lg font-medium text-white">
                  {t(item.label)}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Button className="bg-primary hover:bg-cyan-500 text-first font-medium px-8 py-5 text-lg rounded-full transition">
              <Link href="/products">{t("discoverAhln")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <AhlnSection />
      {/* Process Flow Section */}
      <section className="relative py-16 md:py-12 bg-gradient-to-b bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-text text-center mb-10 md:mb-16"
          >
            <span className="text-text">{t("howItWorksPrefix")}</span>{" "}
            <span className="text-primary">
              {t("howItWorksHighlight")}
              {lang == "en" ? "?" : "؟"}
            </span>
          </motion.h2>

          {/* Container for cards */}
          <div className="relative">
            {/* ✅ Horizontal line ONLY for desktop */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute left-[10%] right-[10%] top-[70px] h-0.5 bg-cyan-800 origin-left z-0 hidden md:block"
            />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10">
              {[
                {
                  title: t("processStep1Title"),
                  description: t("processStep1Desc"),
                  icon: "/images/Delivers.png",
                },
                {
                  title: t("processStep2Title"),
                  description: t("processStep2Desc"),
                  icon: "/images/shipment.png",
                },
                {
                  title: t("processStep3Title"),
                  description: t("processStep3Desc"),
                  icon: "/images/Receive.png",
                },
                {
                  title: t("processStep4Title"),
                  description: t("processStep4Desc"),
                  icon: "/images/Pickup.png",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col items-center text-center w-full md:w-1/4 px-2 py-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-cyan-900/20"
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-900 text-sm md:text-base max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Comparison Section */}
      <section className="relative pt-10 md:pt-1 pb-12 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-text text-center mb-16"
          >
            <span className="text-text">
              {lang == "ar" ? t("beforAndAfter") : t("experiencePrefix")}
            </span>{" "}
            <span className="text-primary">
              {lang == "ar" ? t("whatIsHighlight") : t("experienceHighlight")}
            </span>
          </motion.h2>

          <VideoComparison
            beforeVideoSrc="/videos/beforeAhln.mp4"
            afterVideoSrc="/videos/afterAhln.mp4"
          />
        </div>
      </section>

      {/* App Interface Section */}
      <section ref={appRef} className="relative py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-text mb-6"
              >
                <span className="text-text">
                  {t("controlFingertipsPrefix")}
                </span>{" "}
                <span className="text-primary">
                  {t("controlFingertipsHighlight")}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-text mb-8"
              >
                {t("controlSectionDesc")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {[
                  t("controlFeature1"),
                  t("controlFeature2"),
                  t("controlFeature3"),
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex items-start gap-3 rtl:space-x-reverse"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
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
                    <span className="text-text text-lg">{feature}</span>
                  </motion.li>
                ))}
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
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secure Delivery Section */}
      <section ref={secureRef} className="relative py-20 md:py-12">
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
                <div className="absolute -left-10 top-1/2 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-text mb-6"
              >
                <span className="text-text">{t("secureStoragePrefix")}</span>{" "}
                <span className="text-primary">
                  {t("secureStorageHighlight")}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-text mb-8"
              >
                {t("secureSectionDesc")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ul className="space-y-4">
                  {[
                    t("secureFeature1"),
                    t("secureFeature2"),
                    t("secureFeature3"),
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-3 rtl:space-x-reverse"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="h-4 w-4 text-white"
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
                      <span className="text-text text-lg">{feature}</span>
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
        className="relative py-20 md:py-12 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-text mb-6"
              >
                <span className="text-text">{t("seamlessProcessPrefix")}</span>{" "}
                <span className="text-primary">
                  {t("seamlessProcessHighlight")}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl text-text mb-8"
              >
                {t("processSectionDesc")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ul className="space-y-4">
                  {[
                    t("processFeature1"),
                    t("processFeature2"),
                    t("processFeature3"),
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-3 rtl:space-x-reverse"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="h-4 w-4 text-white"
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
                      <span className="text-text text-lg">{feature}</span>
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
                <div className="absolute -right-10 top-1/2 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
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
