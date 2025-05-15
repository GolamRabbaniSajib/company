"use client"

import React from 'react';

const Apply = ({ jobTitle, id }) => {
    return (
        <button className="relative font-rubik hidden lg:flex font-semibold rounded-lg bg-[var(--color-primary)] transition duration-500 px-5 py-2 text-white flex-row justify-center items-center overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)] transform translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></span>
            {/* <MdCall className="w-6 h-6 text-white mr-2 relative z-10" /> */}
            <span className="relative z-10">APPLY</span>
        </button>
    );
};

export default Apply;