"use client";

import { FaLaptopCode, FaDatabase, FaGlobe, FaCogs } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesLinkedIn, whatIBuild } from "../lib/profile-data";

const iconMap = {
  "IT Consulting": <FaCogs className="text-3xl text-[var(--color-accent)]" />,
  "Application Development": <FaLaptopCode className="text-3xl text-[var(--color-accent)]" />,
  "Database Development": <FaDatabase className="text-3xl text-[var(--color-accent)]" />,
  "Web Development": <FaGlobe className="text-3xl text-[var(--color-accent)]" />,
};

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="py-20 px-6 bg-[var(--color-surface-elevated)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2 text-center" data-aos="fade-up">
          Services
        </h2>
        <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          What I offer — from consulting to full-stack delivery. Built for teams who want ownership from architecture through launch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesLinkedIn.map((service) => (
            <div
              key={service.title}
              data-aos="fade-up"
              className="bg-[var(--color-surface)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-4 border border-[var(--color-border)] hover-lift border-l-4 border-l-[var(--color-accent)]"
            >
              <div className="mb-2">{iconMap[service.title]}</div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)]" data-aos="fade-up">
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">What I build (most requested)</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {whatIBuild.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
