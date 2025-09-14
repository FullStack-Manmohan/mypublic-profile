"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  

export default function Contact() {
  useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false, 
        });
      }, []);
    
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#1E3A8A]  text-[#F3F4F6] flex justify-center"
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-poppins" data-aos="fade-up">
          Contact
        </h2>
        <p className="mb-8 text-lg font-inter" data-aos="fade-up">
          Interested in working together or have a question? <br />
          Reach out via social links below!
        </p>
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/fullstack-manmohan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manmohan-yadav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.upwork.com/freelancers/manmohanyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] hover:scale-110 transition-transform text-2xl"
            aria-label="Upwork"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
      {/* Animation */}
      <style jsx>{`
        section {
          animation: fadeInUp 1.1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}