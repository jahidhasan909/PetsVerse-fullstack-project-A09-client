"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";


const MomentSlider = () => {
    return (
        <div>
             <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-[770px] h-[600px] z-0"
        >
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1776655978171-48b2185bbef7" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1642407021218-5f1ae25c3604" className="h-[600px] w-full rounded" />
            </SwiperSlide>

            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1653157992433-d2d4230fb651" className="h-[600px] w-full rounded" />
            </SwiperSlide>

            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1777196963629-0c09dd203433" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" className="h-[600px] w-full rounded" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://i.ibb.co.com/tMrBLhkP/Screenshot-2026-05-12-at-3-46-53-AM-Photoroom.png" className="h-[600px] w-full rounded" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default MomentSlider;