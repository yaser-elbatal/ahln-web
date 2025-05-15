/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
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
  const currentYear = new Date().getFullYear();

  return (
    // Remove relative/overflow, adjust top padding (e.g., pt-16 or pt-12)
    <footer className=" text-gray-300 pb-8">
      <div className="w-screen ">
        <img
          src="/footerBG.svg"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-5 justify-between">
          {/* Column 1: AHLN Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">AHLN</h5>
            <p className="text-sm mb-4 leading-relaxed">
              Revolutionizing package delivery with secure, convenient, and
              contactless solutions.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 ">Contact</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <img
                  src="/icons/location.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="ml-2">
                  mamzar, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center">
                <img src="/icons/call.svg" alt="call" width={20} height={20} />
                <a href="tel:+971 4 269 3935" className="hover:text-white ml-2">
                  +971 4 269 3935
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
                  href="mailto:info@dccme.ai"
                  className="hover:text-white ml-2"
                >
                  info@dccme.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h5>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500 text-sm"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary text-white px-3 py-2 rounded-r-md flex items-center justify-center"
                aria-label="Subscribe to newsletter"
              >
                <IconPlaceholder name="Send" className="text-white" />{" "}
                {/* Replace with Send icon */}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} AHLN . All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
