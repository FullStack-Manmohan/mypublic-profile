"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#10B981] py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-4 font-poppins drop-shadow">
            Hi, I’m Manmohan — <br className="hidden md:block" />
            <span className="text-[#10B981]">Full-stack Developer</span> & CEO.
          </h1>
          <p className="text-lg md:text-xl text-[#F3F4F6] mb-6 font-inter">
            Building scalable, reliable web apps and SaaS platforms.
          </p>
          <div className="flex gap-4 mt-2" data-aos="zoom-in" data-aos-delay="200">
            <Link
              href="/contact"
              className="bg-[#10B981] text-[#111827] px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            >
              Hire Me
            </Link>
            <Link
              href="/projects"
              className="bg-[#10B981] text-[#F3F4F6] px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="flex-1 flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#10B981] bg-[#F3F4F6]">
            <Image
              src="/images/ceo.jpg"
              alt="Manmohan Y. Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

