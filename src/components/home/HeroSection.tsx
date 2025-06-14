"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, lang } = useLanguage();
  return (
    <motion.section
      className="w-full min-h-screen bg-main-gradient flex flex-col items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative Ball */}
      <motion.div
        className="mt-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <img src="/smallBall.svg" alt="smallBall" width={20} height={20} />
      </motion.div>

      {/* Header Ball */}
      <motion.div
        className="self-start ml-4 sm:ml-6 md:ml-8 lg:ml-10 mt-0"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/ballHeader.svg"
          alt="ballHeader"
          width={50}
          height={50}
          className="w-10 sm:w-12 md:w-14 lg:w-[50px] h-auto"
        />
      </motion.div>

      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 gap-20">
        {/* Text Section */}
        <motion.div
          className="text-white md:w-2/3 z-50"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6">
            <span className=" font-semibold md:text-8xl text-5xl text-primary">
              Ahln.{" "}
            </span>
            <br />{" "}
            <span className=" font-semibold md:text-5xl text-2xl mt-5">
              {t("heroSubtitle")}
            </span>
          </h1>

          <p className="text-gray-300 font-medium text-base sm:text-lg mb-6 leading-relaxed">
            {t("heroDescription")}
          </p>

          <div className="flex flex-row gap-5">
            {[
              { icon: "security.svg", key: "security" },
              { icon: "moapp.svg", key: "appControl" },
              { icon: "liveStream.svg", key: "liveStream" },
            ].map((item, index) => (
              <div
                className="flex flex-row items-center gap-1 rtl:flex-row-reverse"
                key={index.toString()}
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt="ball"
                  width={25}
                  height={25}
                />

                <h6 className="text-md font-medium">{t(item.key)}</h6>
              </div>
            ))}
          </div>

          {/* Decorative Moon */}
          <motion.div
            className="flex justify-center"
            initial={{ rotate: -30, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src="/moon.svg" alt="moon" width={50} height={50} />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("orderNow")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative flex items-center justify-center md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Add this line to make it animate only once
        >
          {/* Decorative Circle Background */}

          {/* Main Image */}
          <img
            src="/boxes.svg"
            alt="Boxes"
            width={400}
            height={400}
            className="relative z-10 max-w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Bottom Line Background */}
      <motion.div
        className="absolute self-start bottom-1 z-0"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/lineBG.svg"
          alt="lineBG"
          width={400}
          height={400}
          className="w-300 sm:w-120 md:w-14 lg:w-[150px] h-auto z-0"
        />
      </motion.div>
    </motion.section>
  );
}
