"use client";

import React, { useEffect, useState } from 'react';
import TeamMemberCard from '@/components/Card/TeamMemberCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios';
import { motion } from 'framer-motion';

const TeamMember = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-team-members`);
        setMembers(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'Failed to fetch team members');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-600 text-lg">
        Loading team members...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500 text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="bg-[#f9fbfc] py-16 px-4 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          heading="Our Team Members"
          subHeading="Meet Our Experts"
        />

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Parallax]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            parallax
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {members.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="flex justify-center"
                >
                  <TeamMemberCard
                    image={member.image}
                    name={member.name}
                    email={member.email}
                    bio={member.bio}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
