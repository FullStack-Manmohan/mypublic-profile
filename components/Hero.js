"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(13,148,136,0.15)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-6 py-20 gap-16">
        {/* Left: Copy */}
        <div className="flex-1 flex flex-col items-start text-white">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] text-sm font-medium mb-6 border border-[var(--color-accent)]/30"
            data-aos="fade-down"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-light)] animate-pulse" />
            Open to work & select projects
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight" data-aos="fade-up">
            Hi, I&apos;m{" "}
            <span className="text-[var(--color-accent-light)]">Manmohan Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2 font-medium" data-aos="fade-up" data-aos-delay="100">
            Software Engineer @ RCUH (UHERO / University of Hawai&apos;i)
          </p>
          <p className="text-lg text-slate-400 mb-6" data-aos="fade-up" data-aos-delay="150">
            Full-Stack (React • Next.js • Node.js) • HIPAA-Compliant Dashboards & Web Apps • Founder, UpTecHunt
          </p>
          <p className="text-slate-500 text-sm mb-8 flex items-center gap-2" data-aos="fade-up" data-aos-delay="200">
            <span>📍</span> Honolulu Metropolitan Area
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="250">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold shadow-lg hover:bg-[var(--color-accent-light)] hover:shadow-[var(--color-accent)]/25 transition-all duration-200 hover-lift"
            >
              Hire Me / Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-white/20 transition-all duration-200"
            >
              View Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/manmohan-yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-[var(--color-accent-light)] transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="800">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[var(--color-accent)]/30 bg-slate-800">
            <Image
              src="/images/ceo.jpg"
              alt="Manmohan Yadav - Software Engineer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
