/* eslint-disable react/no-unescaped-entities */
"use client";

import { useLanguage } from "@/context/LanguageContext";
import axios from "@/lib/axiosConfig";
import Link from "next/link";
import { FormEvent, useState } from "react";
// Import icons (using placeholders for now, consider using @mui/icons-material or react-icons)
// Example: import LocationOnIcon from '@mui/icons-material/LocationOn';
// Example: import PhoneIcon from '@mui/icons-material/Phone';
// Example: import EmailIcon from '@mui/icons-material/Email';
// Example: import FacebookIcon from '@mui/icons-material/Facebook';
// Example: import TwitterIcon from '@mui/icons-material/Twitter';
// Example: import InstagramIcon from '@mui/icons-material/Instagram';
// Example: import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Example: import SendIcon from '@mui/icons-material/Send';

// Placeholder icons (replace with actual icon components)
const IconPlaceholder = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => <span className={`inline-block text-gray-400 ${className}`}>{name}</span>;

export default function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

  return (
    // Remove relative/overflow, adjust top padding (e.g., pt-16 or pt-12)
    <footer className=" text-text-300 pb-8">
      <div className="w-screen ">
        <img
          src="/footer.svg"
          alt="footer background"
          className="w-full md:block hidden"
        />
        <img
          src="/mobilefooter.svg"
          alt="footer background"
          className="w-full md:hidden"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 justify-between">
        {/* Top Section: Links and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          {/* Column 1: Ahln. Info */}
          <div>
            <h5 className="text-lg font-semibold text-primary mb-4">Ahln.</h5>
            <p className="text-sm mb-4 leading-relaxed text-text">
              {t("companyDescription")}
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/icons/instgram.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/icons/twitter.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <img
                  src="/icons/linkedin.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </div> */}
          </div>

          {/* Column 3: Contact */}
          <div>
            <h5 className="text-lg font-semibold text-text mb-4 ">
              {t("contactTitle")}
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <img
                  src="/icons/location.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="ltr:ml-2 rtl:mr-2 text-text">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-center">
                <img src="/icons/call.svg" alt="call" width={20} height={20} />
                <a href="tel: +971 52 288 0118" className="text-text ml-2">
                  {lang === "en" ? "+971 52 288 0118" : "   522880118 (971+)"}
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/icons/email.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:info@ahln.ae"
                  className="text-text ltr:ml-2 rtl:mr-2"
                >
                  info@ahln.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h5 className="text-lg font-semibold text-text mb-4">
              {t("stayUpdated")}
            </h5>
            <p className="text-sm text-text mb-4">{t("subscribeDesc")}</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-grow px-3 py-2 bg-background-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-text placeholder-gray-500 text-sm"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary text-text px-3 py-2 rounded-r-md flex items-center justify-center"
                aria-label="Subscribe to newsletter"
              >
                <IconPlaceholder name={t("Send")} className="text-white" />{" "}
                {/* Replace with Send icon */}
              </button>
            </form>
            {message && (
              <p
                className={`mt-2 text-sm ${
                  isSuccess ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-400">
          <p className="mb-4 md:mb-0 text-text">
            &copy; {currentYear} Ahln. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-text">
                {t("privacyPolicy")}
              </Link>
              <Link href="/terms-of-service" className="text-text">
                {t("termsOfService")}
              </Link>
              <Link href="/cookie-policy" className="text-text">
                {t("cookiePolicy")}
              </Link>
              <Link href="/disclaimer" className="text-text">
                {t("Disclaimer")}
              </Link>
              <Link href="/intellectual-property-rights" className="text-text">
                {t("IntellectualProperty")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
