"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-slate-200 py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Manmohan Yadav</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Software Engineer @ RCUH (UHERO / University of Hawai&apos;i). Full-stack web systems, HIPAA-compliant dashboards, and production-grade apps. Founder, UpTecHunt.
          </p>
          <p className="mt-3 text-[var(--color-accent-light)] font-medium text-sm">
            Open to select projects and leads — get in touch.
          </p>
          <p className="mt-2 text-slate-500 text-sm">
            Available for long-term projects · 40+ hours/week.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Honolulu Metropolitan Area, Hawaii, USA</li>
            <li>
              <a href="mailto:fullstack.manmohan@gmail.com" className="hover:text-[var(--color-accent-light)] transition">
                fullstack.manmohan@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+18086663188" className="hover:text-[var(--color-accent-light)] transition">
                +1 (808) 666 3188
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Hire Me / Contact
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/about" className="hover:text-[var(--color-accent-light)] transition">About</Link></li>
            <li><Link href="/projects" className="hover:text-[var(--color-accent-light)] transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent-light)] transition">Contact</Link></li>
          </ul>
          <div className="flex gap-4 mt-5 text-xl justify-center md:justify-start">
            <a
              href="https://github.com/FullStack-Manmohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[var(--color-accent-light)] transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manmohan-yadav---"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[var(--color-accent-light)] transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/manmohanyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[var(--color-accent-light)] transition-transform hover:scale-110"
              aria-label="Upwork"
            >
              <SiUpwork />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm mt-12 pt-6 border-t border-white/5">
        © {new Date().getFullYear()} Manmohan Yadav. Software Engineer & Founder, UpTecHunt.
      </div>
    </footer>
  );
}
