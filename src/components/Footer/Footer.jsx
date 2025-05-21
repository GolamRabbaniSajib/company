"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo/logo_orange.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { handleWhatsApp } from "@/utils";

const Footer = () => {
  return (
    <footer className="bg-[#37434D] shadow-xl py-10 px-5 md:py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        {/* Logo & Contact Info */}
        <div className="flex flex-col space-y-6 text-white">
          <Link
            href="/"
            aria-label="ByteOnSoft homepage"
            className="inline-flex items-center space-x-3"
          >
            <Image
              src={Logo}
              alt="ByteOnSoft Logo"
              width={150}
              height={150}
              className="rounded-full"
              priority
            />
          </Link>

          <address className="not-italic space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaLocationDot className="w-5 h-5" aria-hidden="true" />
              <span>
                House #12 (Lift 5), Road-12, DIT Project, Merul Badda, Dhaka,
                Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdCall className="w-5 h-5" aria-hidden="true" />
              <a
                href="tel:+8801533633913"
                className="hover:underline focus-visible:underline"
              >
                +880 15336 33913
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdMail className="w-5 h-5" aria-hidden="true" />
              <a
                href="mailto:byteonsoft@gmail.com"
                className="hover:underline focus-visible:underline"
              >
                byteonsoft@gmail.com
              </a>
            </div>
          </address>
        </div>

        {/* Services */}
        <nav aria-label="Services" className="text-white space-y-4">
          <h2 className="uppercase text-lg md:text-xl font-semibold">Services</h2>
          <ul className="space-y-2 text-sm list-inside list-disc">
            <li>Web Design & Development</li>
            <li>WordPress Development</li>
            <li>E-Commerce Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software Development</li>
          </ul>
        </nav>

        {/* Useful Links */}
        <nav aria-label="Useful Links" className="text-white space-y-4">
          <h2 className="uppercase text-lg md:text-xl font-semibold">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact Us" },
              { href: "/career", label: "Career" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-&-condition", label: "Terms & Conditions" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[var(--color-primary)] hover:underline transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="text-white space-y-4">
          <h2 className="uppercase text-lg md:text-xl font-semibold">Social Links</h2>
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="https://www.facebook.com/byteonsoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (not available)"
              className="opacity-50 cursor-not-allowed"
              tabIndex={-1}
              title="Twitter link not provided"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/byte-on-soft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@ByteOnSoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <button
              onClick={() => handleWhatsApp("Hello, I want to contact with you.")}
              aria-label="WhatsApp"
              className="hover:text-[var(--color-primary)] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] rounded"
              type="button"
            >
              <FaWhatsapp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <p className="text-center text-sm text-white select-none">
        © 2024{" "}
        <Link href="/" className="hover:underline text-white">
          ByteOnSoft
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
