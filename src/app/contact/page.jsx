export const metadata = {
    title: "CONTACT | ByteOnSoft",
    description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
}

import PageIttle from '@/components/PageItile/PageIttle';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const page = async () => {
    const ContactCard = dynamic(() => import('@/components/Card/ContactCard'), { ssr: false })

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-typographies`, {
        headers: {
            'cache-control': 'no-cache',
        }
    })
    const typos = await res.data

    const contactUs = typos.find(typo => typo.sectionName === 'Contact Us')
    const Location = typos.find(typo => typo.sectionName === 'Location')

    return (
        <>
            <PageIttle pageTitle={"Contact Us"} pageSubTitle={'Contact'}></PageIttle>
            <div className='w-full py-16 px-5 md:px-10 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-full mt-10'>
                    <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[var(--color-secondary)] uppercase'>
                        Schedule a free 30-minute meeting
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0'>
                        <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                        <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-5 md:mt-10 w-full'>
                    <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-7 md:mb-10 lg:mb-10 text-center text-[var(--color-secondary)] uppercase'>
                        Get in Touch
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold py-2 text-[var(--color-primary)]'>Location</h2>
                                <h4 className='md:text-lg'>DIT Project, {Location.subtitle} </h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Contact Us</h2>
                                <h4 className='mt-3 md:text-lg'>Phone: {contactUs.title}</h4>
                                <h4 className='md:text-lg'>Email: <a href='mailto:byteonsoft@gmail.com'>{contactUs.subtitle}</a></h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Our Hours</h2>
                                <h4 className='mt-3 md:text-lg'>We are open</h4>
                                <h4 className='md:text-lg'>SUN - THUR 9:00 AM - 6:00 PM</h4>
                                <h4 className='md:text-lg'>(GMT 6+)</h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Social Links</h2>
                                <div className='flex flex-row justify-between items-center space-x-3 mt-5'>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.facebook.com/byteonsoft"><FaFacebook className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a href=""><FaTwitter className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.linkedin.com/company/byte-on-soft"><FaLinkedin className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.youtube.com/@ByteOnSoft"><FaYoutube className='w-6 h-6 text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*TODO: pin real location in Map */}
                        <div className='p-3 md:p-5'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.51664609894!2d90.41941208719032!3d23.773813833088255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7afdb55a3ff%3A0xe6f6bfe34253d57!2sDIT%20Project%20Merul%20Badda!5e0!3m2!1sen!2sbd!4v1730100062075!5m2!1sen!2sbd"
                                className='w-full md:w-[600px] lg:w-[600px]'
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                                title="DIT Project, Merul Badda, Dhaka Map"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
