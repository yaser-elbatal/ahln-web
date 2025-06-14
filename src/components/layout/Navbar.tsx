"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBrochureOptions, setShowBrochureOptions] = useState(false);

  const { t, toggleLang, lang } = useLanguage();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // Define nav items
  const navItems = [
    { key: "home", href: "/" },
    { key: "products", href: "/products" },
    { key: "contact", href: "/contact" },
  ];

  // Determine direction for language (rtl for Arabic)
  const isRTL = lang === "ar";

  // Link active class with underline decoration
  const linkClasses = (href: string) =>
    cn(
      "relative text-md font-medium hover:text-primary text-background transition-colors pb-1",
      pathname === href &&
        "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-10 after:bg-secondary after:rounded-full"
    );

  return (
    // Set direction on header for RTL/LTR
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        "bg-black/80 backdrop-blur-md py-3"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between max-w-7xl mx-auto px-4",
          // Reverse flex direction for RTL
          isRTL ? "flex-row-reverse" : "flex-row"
        )}
      >
        {/* Logo - Flip or align for RTL */}
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            // No flipping for RTL to keep logo correct
            className={undefined}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={cn(
            "hidden md:flex items-center space-x-8",
            // Adjust horizontal spacing for RTL
            isRTL ? "space-x-reverse" : ""
          )}
          aria-label="Primary navigation"
        >
          {navItems.map(({ key, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClasses(href)}
              tabIndex={0}
              role="link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {t(key)}
            </Link>
          ))}

          {/* Brochure & Language Switch */}
          <div className={cn("relative ml-4", isRTL ? "ml-0 mr-4" : "")}>
            <button
              onClick={() => setShowBrochureOptions(!showBrochureOptions)}
              className="text-secondary font-medium border border-secondary text-sm px-4 py-2 rounded-md hover:bg-primary hover:text-background transition-colors"
              aria-haspopup="true"
              aria-expanded={showBrochureOptions}
            >
              {t("downloadBrochure")}
            </button>

            <button
              onClick={toggleLang}
              className={cn(
                "ml-4 text-sm text-secondary border border-secondary px-4 py-2 rounded-md hover:bg-primary hover:text-background transition-colors",
                isRTL ? "ml-0 mr-4" : ""
              )}
              aria-label={`Switch language to ${
                lang === "en" ? "Arabic" : "English"
              }`}
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

            {showBrochureOptions && (
              <div
                className={cn(
                  "absolute top-full mt-1 w-44 bg-white rounded-md shadow-md z-50 transition-all duration-200",
                  isRTL ? "left-auto right-0" : "left-0"
                )}
                role="menu"
              >
                <a
                  href="/ahln_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-text hover:bg-gray-100"
                  role="menuitem"
                >
                  Ahln Max
                </a>
                <a
                  href="/broucher-mini.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-text hover:bg-gray-100"
                  role="menuitem"
                >
                  Ahln Mini
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-secondary"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X size={32} color="white" />
          ) : (
            <Menu size={32} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        dir={isRTL ? "rtl" : "ltr"}
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center overflow-hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-label="Mobile navigation"
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "absolute top-6",
            isRTL ? "left-4" : "right-4",
            "text-secondary"
          )}
          aria-label="Close menu"
        >
          <X size={32} color="white" />
        </button>

        <div className="flex flex-col items-center space-y-8 p-8 w-full max-w-xs">
          {navItems.map(({ key, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-white text-2xl font-medium hover:text-secondary transition-colors",
                pathname === href && "text-secondary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
              role="link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {t(key)}
            </Link>
          ))}

          {/* Brochure & Language Switch */}
          <button
            onClick={() => setShowBrochureOptions(!showBrochureOptions)}
            className="text-secondary border-2 border-secondary text-lg px-6 py-3 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors w-full"
            aria-haspopup="true"
            aria-expanded={showBrochureOptions}
          >
            {t("downloadBrochure")}
          </button>

          <button
            onClick={() => {
              toggleLang();
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 text-secondary border-2 border-secondary text-lg px-6 py-3 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors w-full"
            aria-label={`Switch language to ${
              lang === "en" ? "Arabic" : "English"
            }`}
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          {showBrochureOptions && (
            <div className="mt-4 space-y-3 w-full">
              <a
                href="/ahln_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary border border-secondary px-6 py-2 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors"
                role="menuitem"
              >
                Ahln Max
              </a>
              <a
                href="/broucher-mini.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary border border-secondary px-6 py-2 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors"
                role="menuitem"
              >
                Ahln Mini
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
