"use client"

import React from 'react';
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';

const SwiperCard = ({image, rating, description, name, location}) => {
    return (
        // <div className='flex flex-col justify-center items-center p-5 rounded-lg bg-gray-200' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
        <div className='flex flex-col justify-center items-center p-7 rounded-lg bg-gray-100 font-rubik'>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <p className='my-3 text-gray-600 italic'>{description}</p>
            <Image
            src={image}
            width={100}
            height={100}
            className='mb-3 rounded-full border-b-[6px] border-l-[6px] border-t-[6px] border-r-[6px] border-b-[var(--color-primary)] border-l-[var(--color-primary)] border-t-white border-r-white'
            />
            <h2 className='text-lg md:text-xl font-bold'>{name}</h2>
            <p className='text-base text-[var(--color-primary)]'>{location}</p>
        </div>
    );
};

export default SwiperCard;