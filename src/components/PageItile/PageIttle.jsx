import Link from 'next/link';
import React from 'react';

const PageIttle = ({pageTitle,pageSubTitle}) => {
    return (

            <div className="overflow-hidden w-full">
                <div
                    className="lg:h-[400px] md:h-[350px] sm:h-[300px] h-[230px]  w-full bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url('https://i.ibb.co.com/CP0Br5p/breadcrumb-bg-1.png')` }}
                >
                    <div className="p-8 text-center text-white">
                       
                       <h2 className='text-4xl font-bold py-4'>{pageTitle}</h2>
                      <p className='font-bold'><Link href='/' className='cursor-pointer hover:text-[var(--color-primary)]'>Home</Link> | {pageSubTitle}</p>
                    </div>
                </div>
            </div>

    );
};

export default PageIttle;