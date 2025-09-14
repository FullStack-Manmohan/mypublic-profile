"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function ContactPage() {
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
      });
    }, []);
  
  return (
    <>
      <main className="bg-[#F3F4F6]  min-h-screen py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8 font-poppins" data-aos="fade-up">
          Contact
        </h1>
        <p className="mb-8 text-lg font-inter text-[#111827]" data-aos="fade-up">
          Interested in working together or have a question?<br />
          Reach out via the social links below, or use the info provided!
        </p>
        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8" data-aos="fade-up">
          <a
            href="https://www.upwork.com/freelancers/manmohanyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manmohan-yadav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.upwork.com/freelancers/manmohanyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-3xl"
            aria-label="Upwork"
          >
            <SiUpwork />
          </a>
        </div>
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12" >
          <div className="bg-[#F3F4F6] rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up">
            <FaMapMarkerAlt className="text-[#1E3A8A] text-2xl mb-2" />
            <div className="font-semibold text-[#1E3A8A] mb-1 text-xl">Location</div>
            <div>Honolulu, Hawaii, USA</div>
          </div>
          <div className="bg-[#F3F4F6] rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up">
            <FaPhoneAlt className="text-[#1E3A8A] text-2xl mb-2" />
            <div className="font-semibold text-[#1E3A8A] mb-1 text-xl">Phone</div>
            <div>
              <a href="tel:+18085551234" className=" hover:underline">
               +1 (808) 666 3188
              </a>
            </div>
          </div>
          <div className="bg-[#F3F4F6] rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up">
            <FaRegClock className="text-[#1E3A8A] text-2xl mb-2" />
            <div className="font-semibold text-[#1E3A8A] mb-1 text-xl">Availablity</div>
            <div>24 hours</div>
          </div>
          <div className="bg-[#F3F4F6] rounded-xl shadow p-6 flex flex-col items-center" data-aos="fade-up">
            <span className="text-[#1E3A8A] text-2xl mb-2">@</span>
            <div className="font-semibold text-[#1E3A8A] mb-1 text-xl">Email</div>
            <div>
              <a
                href="mailto:fullstack.manmohan@gmail.com"
                className="hover:underline"
              >
               fullstack.manmohan@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* Map Embed */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
          <iframe
            title="Honolulu Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-157.8583%2C21.3069%2C-157.8583%2C21.3069&amp;layer=mapnik"
            className="w-full h-64 border-0"
            loading="lazy"
          ></iframe>
        </div>
        {/* Call to Action */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2" data-aos="fade-up">Let’s Build Something Great</h2>
          <p className="text-[#111827] text-lg" data-aos="fade-up">
            Whether you have a new idea, need a technical partner, or want to scale your business, I’m here to help you succeed.
          </p>
        </div>
      </main>
    </>
  );
}