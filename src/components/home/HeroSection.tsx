"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
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
              Smart Secured Delivery
            </span>
          </h1>

          <p className="text-gray-300 font-medium text-base sm:text-lg mb-6 leading-relaxed">
            Reinventing how packages arrive at your doorstep
          </p>

          <div className="flex flex-row gap-5">
            {[
              { icon: "security.svg", text: "Security" },
              { icon: "moapp.svg", text: "App Control" },
              { icon: "liveStream.svg", text: "Live Stream" },
            ].map((item, index) => (
              <div
                className="flex flex-row items-center gap-1"
                key={index.toString()}
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt="ball"
                  width={25}
                  height={25}
                />

                <h6 className="text-md font-medium">{item.text}</h6>
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
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }} // Add this line to make it animate only once
          >
            {["Order Now"].map((text, i) => (
              <motion.button
                key={text}
                className={`${
                  i === 0
                    ? "bg-primary hover:bg-secondary"
                    : "border border-secondary hover:bg-secondary"
                } text-white px-6 py-3 rounded-md font-medium transition duration-300`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {text}
              </motion.button>
            ))}
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
