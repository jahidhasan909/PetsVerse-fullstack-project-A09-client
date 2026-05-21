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
                className="w-[350px] md:w-[500px] h-[300px] z-0"
            >
                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://plus.unsplash.com/premium_photo-1681843815216-f50fc50d0b8a" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1712746438734-70d05ade0e02" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://plus.unsplash.com/premium_photo-1683133331408-ad77955f6d03" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>


                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1595762834093-8964e63a87b9" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1721904309410-ca4cd5ed681e" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1579364068581-33f9cf730738" className="h-[300px] object-cover w-full rounded-2xl" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MomentSlider;