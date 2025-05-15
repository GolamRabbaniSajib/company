'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heroimage from '../../../assets/image2/home-font.png';

const HeroImage = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = ((x / width) * 30) - 15;
    const rotateX = -((y / height) * 30) + 15;

    setRotation({ rotateX, rotateY });
  };

  return (
    <div
      className="w-full px-4 py-10 flex justify-center items-center max-h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ rotateX: 0, rotateY: 0 })}
    >
      <motion.div
        className="w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
        animate={{
          rotateX: rotation.rotateX,
          rotateY: rotation.rotateY,
          y: [0, -10, 0],
        }}
        transition={{
          rotateX: { type: 'spring', stiffness: 200, damping: 20 },
          rotateY: { type: 'spring', stiffness: 200, damping: 20 },
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Image
          src={Heroimage}
          alt="Hero image"
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-3xl"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
