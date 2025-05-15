"use client"

import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi';
import Apply from '../Apply/Apply';

const CareerCard = ({title, salary, jobType, jobCategory, location}) => {
    return (
        <div className='p-3 md:p-5 bg-white text-gray-700 font-rubik rounded-lg w-full flex flex-col cursor-pointer' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row justify-start items-center w-2/3 space-x-5'>
                    <div className='bg-gray-100 p-3 rounded-lg'>
                        <HiOutlineBriefcase className='w-5 h-5 ' />
                    </div>
                    <h1 className='text-lg md:text-xl font-semibold'>{title} </h1>
                </div>

                <div className='flex flex-row justify-center items-center space-x-3 w-1/3'>
                    <div className="border-2 border-[var(--color-primary)] rounded-full py-1 px-2 font-semibold text-[var(--color-primary)]">
                        ৳
                    </div>
                    <h2 className='font-semibold'>{salary}</h2>
                </div>

            </div>

            <div className='flex flex-row justify-between items-center w-full mt-3'>
                <div className='flex flex-row justify-start items-center space-x-4 w-2/3'>
                    <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                        {jobType}
                    </div>
                    <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                        {jobCategory}
                    </div>
                    <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                        {location}
                    </div>
                </div>

                <div className='w-1/3 flex mx-auto justify-center'>
                    <Apply
                        jobTitle='Remote Internship: Graphic Designer (3 Months, Unpaid)'
                        id={1}
                    />
                </div>
            </div>
        </div>
    );
};

export default CareerCard;