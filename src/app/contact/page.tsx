"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d1224] to-[#0d1224] text-white font-sans">
      {/* Hero */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Get In Touch With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-xl mx-auto"
        >
          Whether you have a question, need support, or just want to say hello,
          we’re here to help.
        </motion.p>
      </section>

      {/* Info + Map */}
      <section className="grid md:grid-cols-2 gap-12 px-6 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-300">
            Reach us anytime using the info below.
          </p>

          <div>
            <p className="font-medium">📞 Phone:</p>
            <a href="tel:+971 4 269 3935" className="hover:text-white ml-2">
              +971 4 269 3935
            </a>
          </div>

          <div>
            <p className="font-medium">📧 Email:</p>
            <a href="mailto:info@dccme.ai" className="hover:text-white ml-2">
              info@dccme.ai
            </a>
          </div>

          <div>
            <p className="font-medium">📍 Address:</p>
            <a
              href="https://maps.app.goo.gl/CpW7NjNJEFdmNxgY6"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              Mamzar , Dubai, United arab emirates
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://maps.app.goo.gl/CpW7NjNJEFdmNxgY6"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.259441862384!2d55.3511695!3d25.295486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8392ff46c3%3A0x3ca0d5673a8c98e9!2z2KzYp9im2LLYqSDYr9io2Yog2KfZhNiv2YjZhNmK2Kkg2YTZhNmC2LHYotmGINin2YTZg9ix2YrZhQ!5e0!3m2!1sar!2sae!4v1746862311731!5m2!1sar!2sae"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              className="rounded-2xl shadow-lg border-4 border-[#1c2341] w-full h-[350px] pointer-events-none"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto  p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              className=" bg-gray-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className=" bg-gray-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              type="email"
              placeholder="Email Address"
              required
            />
            <textarea
              className=" bg-gray-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              rows={5}
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary text-white py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl mb-2"
        >
          Stay Connected with AHLN Box
        </motion.h3>
        <p className="text-gray-400 mb-6">
          Subscribe for latest updates, demos & events
        </p>

        <div className="flex justify-center items-center">
          <input
            className="p-3 px-4 rounded-l-lg  bg-gray-700  text-white border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Enter your email"
          />
          <button className="p-3 px-6 rounded-r-lg bg-secondary hover:bg-secondary">
            Subscribe
          </button>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="#">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </main>
  );
}
