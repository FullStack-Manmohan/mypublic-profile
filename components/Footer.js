"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-[#F3F4F6] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-4">Manmohan Y.</h3>
          <p className="text-lg leading-relaxed font-inter text-gray-200">
            Full-stack Developer passionate about building clean, scalable, 
            and user-friendly web applications. Crafting digital solutions 
            with precision and creativity.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-4">Contact</h3>
          <ul className="space-y-2 text-lg font-inter text-gray-200">
            <li>📍 Hawaii, USA</li>
            <li>📧 fullstack.manmohan@gmail.com</li>
            <li>📞 +1 (808) 666 3188</li>
          </ul>
        </div>

        {/* Quick Links / Socials */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg font-inter text-gray-200">
            <li>
              <a href="/about" className="hover:text-[#10B981] transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#10B981] transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-2xl justify-center md:justify-start">
            <a
              href="https://github.com/fullstack-manmohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manmohan-yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/manmohanyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:scale-110 transition-transform"
              aria-label="Upwork"
            >
              <SiUpwork />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Manmohan Y. 
      </div>
    </footer>
  );
}
