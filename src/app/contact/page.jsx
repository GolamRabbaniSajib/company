"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import PageIttle from '@/components/PageItile/PageIttle';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactCard = dynamic(() => import('@/components/Card/ContactCard'), { ssr: false });

export default function ContactClient() {
  const [contactUs, setContactUs] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-typographies`, {
          headers: {
            'cache-control': 'no-cache',
          }
        });
        const typos = res.data;
        setContactUs(typos.find(typo => typo.sectionName === 'Contact Us'));
        setLocation(typos.find(typo => typo.sectionName === 'Location'));
      } catch (error) {
        console.error("Failed to fetch typography data", error);
      }
    }
    fetchData();
  }, []);

  if (!contactUs || !location) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <PageIttle pageTitle="Contact Us" pageSubTitle="Contact" />

      <div className="w-full py-16 px-5 md:px-10 flex flex-col justify-center items-center max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center w-full mt-10">
          <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[var(--color-secondary)] uppercase">
            Schedule a free 30-minute meeting
          </h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0">
            <ContactCard title="Send message via email" btnTxt="SEND MESSAGE" />
            <ContactCard title="Send message via whatsapp" btnTxt="SEND MESSAGE" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 md:mt-10 w-full">
          <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-7 md:mb-10 lg:mb-10 text-center text-[var(--color-secondary)] uppercase">
            Get in Touch
          </h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-8 md:space-y-0 md:space-x-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-3xl">
              <div className="flex flex-col justify-start items-start p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold py-2 text-[var(--color-primary)]">Location</h2>
                <h4 className="md:text-lg">DIT Project, {location.subtitle}</h4>
              </div>
              <div className="flex flex-col justify-start items-start p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">Contact Us</h2>
                <h4 className="mt-3 md:text-lg">Phone: {contactUs.title}</h4>
                <h4 className="md:text-lg">
                  Email: <a href="mailto:byteonsoft@gmail.com" className="underline hover:text-[var(--color-primary)]">{contactUs.subtitle}</a>
                </h4>
              </div>
              <div className="flex flex-col justify-start items-start p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">Our Hours</h2>
                <h4 className="mt-3 md:text-lg">We are open</h4>
                <h4 className="md:text-lg">SUN - THUR 9:00 AM - 6:00 PM</h4>
                <h4 className="md:text-lg">(GMT 6+)</h4>
              </div>
              <div className="flex flex-col justify-start items-start p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">Social Links</h2>
                <div className="flex flex-row justify-between items-center space-x-3 mt-5">
                  <a href="https://www.facebook.com/byteonsoft" target="_blank" rel="noreferrer" className="bg-[var(--color-primary)] p-2 rounded-md flex cursor-pointer hover:bg-[#3b5998] transition-colors">
                    <FaFacebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="" className="bg-[var(--color-primary)] p-2 rounded-md flex cursor-pointer opacity-50 pointer-events-none" title="Twitter link not provided">
                    <FaTwitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/byte-on-soft" target="_blank" rel="noreferrer" className="bg-[var(--color-primary)] p-2 rounded-md flex cursor-pointer hover:bg-[#0077b5] transition-colors">
                    <FaLinkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.youtube.com/@ByteOnSoft" target="_blank" rel="noreferrer" className="bg-[var(--color-primary)] p-2 rounded-md flex cursor-pointer hover:bg-[#FF0000] transition-colors">
                    <FaYoutube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-5 w-full max-w-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.51664609894!2d90.41941208719032!3d23.773813833088255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7afdb55a3ff%3A0xe6f6bfe34253d57!2sDIT%20Project%20Merul%20Badda!5e0!3m2!1sen!2sbd!4v1730100062075!5m2!1sen!2sbd"
                className="w-full h-[450px] rounded-lg shadow-lg"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="DIT Project, Merul Badda, Dhaka Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
