'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';

import image1 from '../../../assets/client-review-image/person-1.webp';
import SwiperCard from '@/components/Card/SwiperCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Testimonials = () => {
    return (
        <div className="mt-16 w-11/12 md:w-4/5 mx-auto">
            <SectionTitle
                heading={'Our Testimonials'}
                subHeading={'Client Feedbacks'}
            />

            <Swiper
                modules={[Autoplay, Parallax]}
                loop={true}
                speed={1000} // transition speed in ms
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                parallax={true}
                spaceBetween={50}
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
                }}
            >
                {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i}>
                        <SwiperCard
                            image={image1}
                            name={'Jhon Doe'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                            location={'Baridhara, Dhaka'}
                            rating={4}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
