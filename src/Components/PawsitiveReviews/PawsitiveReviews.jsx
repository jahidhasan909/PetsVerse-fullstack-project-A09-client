"use client"
import { Card } from "@heroui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PawsitiveReviews = () => {
    return (
        <div className=" container mx-auto my-10">
            <h1 className="text-center text-xl font-semibold">Pawsitive Reviews</h1>
            <p className="text-center pt-3 pb-4">Pet owners share their journey and experience with our platform.</p>

            <Marquee speed={100} pauseOnHover={true} className="">
                <section className="flex gap-5">
                    <Card className="flex flex-row w-[500px] h-[250px] rounded-md ">
                        <div>
                            <h2 className="text-[17px] text-white">
                                {'“I found my perfect furry friend through this platform. The whole experience was smooth, safe, and amazing.”'}
                            </h2>
                            <div className="mt-10">
                                <p className=""> — Michael Chen</p>
                                <p className="pl-5 text-neutral-400">Dogs</p>
                            </div>
                        </div>
                        <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1637282166579-bf8ad9a1471a'} width={150} height={150} alt="" />
                    </Card>



                    <Card className="flex flex-row w-[500px] h-[250px] rounded-md ">
                        <div>
                            <h2 className="text-[17px] text-white">
                                {'“Such a trusted platform for pet lovers. I adopted my lovely companion without any hassle.”'}
                            </h2>
                            <div className="mt-10">
                                <p className=""> — Sarah Johnson</p>
                                <p className="pl-5 text-neutral-400">New York, USA</p>
                            </div>
                        </div>
                        <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1702700364296-f755dad7119c'} width={150} height={150} alt="" />
                    </Card>
                    <Card className="flex flex-row w-[500px] h-[250px] rounded-md ">
                        <div>
                            <h2 className="text-[17px] text-white">
                                {'“The pets are adorable, and the support team was very helpful throughout the process.”'}
                            </h2>
                            <div className="mt-15">
                                <p className=""> — Jhon Doe</p>
                                <p className="pl-5 text-neutral-400">Paris</p>
                            </div>
                        </div>
                        <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1626921665123-577a588e433b'} width={160} height={150} alt="" />
                    </Card>
                    <Card className="flex flex-row w-[500px] h-[250px] rounded-md mr-5">
                        <div>
                            <h2 className="text-[17px] text-white">
                                {'“I’m really happy with my experience. Everything felt professional, friendly, and easy to use.”'}
                            </h2>
                            <div className="mt-10">
                                <p className=""> — Adv Aderson</p>
                                <p className="pl-5 text-neutral-400">Rabbit</p>
                            </div>
                        </div>
                        <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1619960636726-7782c5db91e5'} width={150} height={150} alt="" />
                    </Card>
                </section>
            </Marquee>
        </div>
    );
};

export default PawsitiveReviews;









