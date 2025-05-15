'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// Client logos
import image1 from '../../../assets/client image/client-1.png';
import image2 from '../../../assets/client image/client-2.png';
import image3 from '../../../assets/client image/client-3.png';
import image4 from '../../../assets/client image/client-4.png';
import image5 from '../../../assets/client image/client-5.png';
import image6 from '../../../assets/client image/client-6.png';
import image7 from '../../../assets/client image/client-7.png';
import image8 from '../../../assets/client image/client-8.png';
import image9 from '../../../assets/client image/client-9.png';
import tutor_agency from '../../../assets/client image/Tutor_Agency.jpg';
import DB_news from '../../../assets/client image/DB_News.jpg';

const logos = [
  tutor_agency,
  DB_news,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const OurClient = () => {
  return (
    <div className="bg-[#EBF5F6] py-6 px-4 md:px-0">
      <div className="w-full md:max-w-7xl mx-auto">
        

        {/* Marquee Section */}
        <Marquee
          gradient
          gradientColor={[235, 245, 246]}
          speed={40}
          pauseOnHover
          className="py-2 no-scrollbar"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-6 h-[80px] w-[150px] bg-white shadow-md border border-gray-200 rounded-xl flex justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurClient;
