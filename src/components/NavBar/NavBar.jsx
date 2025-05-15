"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo_blue.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#1f1f1f]/90 backdrop-blur-md shadow-md text-white"
          : "bg-transparent text-blue-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={140}
            height={50}
            className="h-auto w-auto max-w-full"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="hover:text-[var(--color-primary)] transition-colors duration-300 uppercase"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Call Button */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2 text-sm bg-[var(--color-primary)] text-white px-4 py-2 rounded-full shadow-md hover:bg-opacity-90 transition"
        >
          <MdCall className="w-5 h-5" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs">Call Now</span>
            <span className="font-medium text-sm">+880 15336 33913</span>
          </div>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#1f1f1f] text-white rounded-b-xl shadow-md overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 border-t border-white/20">
                <MdCall className="w-5 h-5" />
                <div className="flex flex-col leading-tight text-sm">
                  <span>+880 15336 33913</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
