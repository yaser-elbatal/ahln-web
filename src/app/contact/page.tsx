"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState, FormEvent } from "react";
import axios from "@/lib/axiosConfig";

export default function ContactPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactFormMessage, setContactFormMessage] = useState<string>("");
  const [isContactFormSuccess, setIsContactFormSuccess] =
    useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("/api/website/create-web-subscribers", {
        email,
      });

      if (response.status >= 200 && response.status < 300) {
        setMessage(t("subscriptionSuccess"));
        setIsSuccess(true);
        setEmail(""); // Clear email input on success
      } else {
        const errorData = response.data;
        setMessage(
          t("subscriptionError") +
            `: ${errorData.message || response.statusText || response.status}`
        );
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage(
        t("subscriptionError") +
          `: ${error instanceof Error ? error.message : String(error)}`
      );
      setIsSuccess(false);
    }
  };

  const handleContactFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setContactFormMessage(""); // Clear previous messages

    try {
      const response = await axios.post("/api/website/create-contact-form", {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
      });

      if (response.status >= 200 && response.status < 300) {
        setContactFormMessage(t("contactFormSuccess"));
        setIsContactFormSuccess(true);
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        const errorData = response.data;
        setContactFormMessage(
          t("contactFormError") +
            `: ${errorData.message || response.statusText || response.status}`
        );
        setIsContactFormSuccess(false);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setContactFormMessage(
        t("contactFormError") +
          `: ${error instanceof Error ? error.message : String(error)}`
      );
      setIsContactFormSuccess(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-text font-sans">
      {/* Hero */}
      <section className="mt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-text"
        >
          {t("contactPageTitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-xl mx-auto px-2"
        >
          {t("contactPageSubtitle")}
        </motion.p>
      </section>

      {/* Info + Map */}
      <section className="grid md:grid-cols-2 gap-2 px-6 py-6 max-w-6xl mx-auto mt-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold">{t("contactInformation")}</h2>
          <p className="text-gray-600">{t("reachUs")}</p>

          <div>
            <p className="font-medium">📞 {t("phone")}:</p>
            <a href="tel: +971 52 288 0118" className="text-text ml-2">
              +971 52 288 0118
            </a>
          </div>

          <div>
            <p className="font-medium">📧 {t("email")}:</p>
            <a
              href="mailto:info@ahln.ae"
              className="hover:text-text ltr:ml-2 rtl:mr-2"
            >
              info@ahln.ae
            </a>
          </div>

          <div>
            <p className="font-medium">📍 {t("address")}</p>
            <a
              href="https://maps.app.goo.gl/CpW7NjNJEFdmNxgY6"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {t("address")}
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
              className="rounded-2xl shadow-lg border-4 border-[#c2c5d6] w-full h-[350px] pointer-events-none"
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
            {t("sendUsMessage")}
          </h2>
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleContactFormSubmit}
          >
            <input
              className=" bg-background-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              type="text"
              placeholder={t("enterFullName")}
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
            <input
              className=" bg-background-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              type="email"
              placeholder={t("enterEmail")}
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
            <textarea
              className=" bg-background-700 border border-secondary px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              rows={5}
              placeholder={t("yourMessage")}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary text-white py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {t("sendMessage")}
            </button>
          </form>
          {contactFormMessage && (
            <p
              className={`mt-4 text-center ${
                isContactFormSuccess ? "text-green-600" : "text-red-500"
              }`}
            >
              {contactFormMessage}
            </p>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-text py-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl mb-2"
        >
          {t("stayConnected")}
        </motion.h3>
        <p className="text-gray-400 mb-6">{t("subscribeForLatest")}</p>

        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="p-3 px-4 rounded-l-lg  bg-background-700  text-text border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder={t("enterEmail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="p-3 px-6 rounded-r-lg bg-secondary hover:bg-secondary text-white"
          >
            {t("subscribeNow")}
          </button>
        </form>
        {message && (
          <p
            className={`mt-2 text-sm text-center ${
              isSuccess ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

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
