import Link from "next/link";
import Image from "next/image";
import './globals.css'

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center p-6 ">


            <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl">


                <div className="flex items-center justify-center w-full max-h-[50vh] ">
                    <Image
                        src="https://i.ibb.co.com/vx1FFTMp/Chat-GPT-Image-May-20-2026-at-10-11-19-PM-1-removebg-preview.png"
                        alt="404"
                        width={1000}
                        height={800}
                        priority
                        className="w-full object-cover rounded-2xl"
                    />
                </div>
                <h2 className=" text-4xl md:text-6xl font-bold">
                    Page Not Found
                </h2>

                <p className="max-w-2xl text-lg text-gray-500 text-center">
                    The page you are looking for might have been removed,
                    renamed, or <br/> temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="px-8 py-3 rounded-full bg-black text-white hover:scale-105 transition-transform duration-300 shadow-md"
                >
                    Go Home
                </Link>


            </div>

        </section>
    );
}