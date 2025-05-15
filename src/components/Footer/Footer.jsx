"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo/logo_orange.png';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall, MdMail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { handleWhatsApp } from '@/utils';

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-[#042C4C] shadow-xl py-10 px-5 md:py-16 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4 text-white">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={Logo}
                width={200}
                height={200}
                className="rounded-full"
                alt="Logo"
              />
            </Link>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <FaLocationDot className="w-5 h-5 text-white" />
                <p className="text-sm">
                  House #12 (Lift 5), Road-12, DIT Project, Merul Badda, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <MdCall className="w-5 h-5 text-white" />
                <p className="text-sm">+880 15336 33913</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdMail className="w-5 h-5 text-white" />
                <a href="mailto:byteonsoft@gmail.com" className="text-sm hover:underline">
                  byteonsoft@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-white space-y-4">
            <h2 className="uppercase text-lg md:text-xl font-semibold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>Web Design & Development</li>
              <li>WordPress Development</li>
              <li>E-Commerce Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Custom Software Development</li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="text-white space-y-4">
            <h2 className="uppercase text-lg md:text-xl font-semibold">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <Link href="/about">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  About Us
                </li>
              </Link>
              <Link href="/services">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  Services
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  Contact Us
                </li>
              </Link>
              <Link href="/career">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  Career
                </li>
              </Link>
              <Link href="/privacy-policy">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  Privacy Policy
                </li>
              </Link>
              <Link href="/terms-&-condition">
                <li className="cursor-pointer hover:text-[var(--color-primary)] hover:underline transition-all duration-300">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="text-white space-y-4">
            <h2 className="uppercase text-lg md:text-xl font-semibold">Social Links</h2>
            <div className="flex space-x-4">
              <div className="bg-white p-2 rounded-md hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer">
                <a target="_blank" href="https://www.facebook.com/byteonsoft">
                  <FaFacebook className="w-6 h-6 text-[var(--color-primary)] hover:text-white" />
                </a>
              </div>
              <div className="bg-white p-2 rounded-md hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer">
                <a href="">
                  <FaTwitter className="w-6 h-6 text-[var(--color-primary)] hover:text-white" />
                </a>
              </div>
              <div className="bg-white p-2 rounded-md hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer">
                <a target="_blank" href="https://www.linkedin.com/company/byte-on-soft">
                  <FaLinkedin className="w-6 h-6 text-[var(--color-primary)] hover:text-white" />
                </a>
              </div>
              <div className="bg-white p-2 rounded-md hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer">
                <a target="_blank" href="https://www.youtube.com/@ByteOnSoft">
                  <FaYoutube className="w-6 h-6 text-[var(--color-primary)] hover:text-white" />
                </a>
              </div>
              <div
                onClick={() => {
                  handleWhatsApp('Hello, I want to contact with you.');
                }}
                className="bg-white p-2 rounded-md hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer"
              >
                <FaWhatsapp className="w-6 h-6 text-[var(--color-primary)] hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-center text-sm text-white">
          © 2024 <Link href="/" className="hover:underline text-white">ByteOnSoft</Link>. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
