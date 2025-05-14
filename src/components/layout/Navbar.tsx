"use client";

import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const linkClasses = (href: string) =>
    `relative text-md font-medium hover:text-secondary transition-colors pb-1
     ${
       pathname === href
         ? "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-10 after:bg-secondary after:rounded-full"
         : ""
     }`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/ahln_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-secondary border border-secondary text-sm px-4 py-2 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors"
          >
            Download Brochure
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-secondary"
        >
          {isMobileMenuOpen ? (
            <X size={32} color={"white"} />
          ) : (
            <Menu size={32} color={"white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu (shown only if open) */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ position: "fixed", top: 0 }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-4 text-secondary"
          aria-label="Close menu"
        >
          <X size={32} color={"white"} />
        </button>
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-white text-2xl font-medium hover:text-secondary transition-colors",
                pathname === item.href && "text-secondary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/ahln_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-secondary border-2 border-secondary text-lg px-6 py-3 rounded-md hover:bg-secondary hover:text-[#050b1e] transition-colors"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </header>
  );
}
