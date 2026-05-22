"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";


const ImageSlider = () => {
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
            className="h-[300px] z-0"
        >
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1554956615-1ba6dc39921b" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1654535871938-78c504de015f" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>

            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1523480717984-24cba35ae1ef" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>

            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1646725942918-2c09c2832d80" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1699815625875-63e7d59e9ff3" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={770} height={600} alt="" src="https://images.unsplash.com/photo-1617398881039-4c977f633b0e" className="h-[300px] object-cover w-full rounded-2xl" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default ImageSlider;