"use client";

import { FaCheckCircle, FaDatabase, FaCloud, FaReact, FaNodeJs, FaTools, FaExternalLinkAlt } from "react-icons/fa";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Experience from "../components/Experience";
import {
  aboutSummary,
  whatIBuild,
  selectedWorkLinks,
  topSkills,
} from "../lib/profile-data";

const skillsWithIcons = [
  { icon: <FaReact className="text-2xl text-[var(--color-accent)]" />, label: "Frontend: React, Next.js, Tailwind CSS, Bootstrap" },
  { icon: <FaNodeJs className="text-2xl text-[var(--color-accent)]" />, label: "Backend: Node.js (Express, Nest.js)" },
  { icon: <FaTools className="text-2xl text-[var(--color-accent)]" />, label: "Integrations: Stripe, Twilio, Firebase, GraphQL" },
  { icon: <FaDatabase className="text-2xl text-[var(--color-accent)]" />, label: "Databases: MongoDB, PostgreSQL, Firebase" },
  { icon: <FaCloud className="text-2xl text-[var(--color-accent)]" />, label: "Deployment: Vercel, AWS, DigitalOcean" },
];

export default function Home() {
  return (
    <div className="bg-[var(--color-surface)] font-sans min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col">
        <Hero />

        {/* About — aligned with LinkedIn */}
        <section id="about" className="w-full py-20 px-6 bg-pattern">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4" data-aos="fade-up">
                About Me
              </h2>
              <p className="text-[var(--color-primary)]/90 text-lg mb-4 leading-relaxed">
                {aboutSummary.currentRole}
              </p>
              <p className="text-[var(--color-primary)]/90 text-lg mb-6 leading-relaxed">
                {aboutSummary.freelance}
              </p>
              <p className="text-lg font-semibold text-[var(--color-primary)] mb-3">What I build (most common requests)</p>
              <ul className="space-y-2 mb-6">
                {whatIBuild.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                    <span className="text-[var(--color-primary)]/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[var(--color-primary)]/90 mb-6 italic border-l-4 border-[var(--color-accent)] pl-4">
                {aboutSummary.cta}
              </p>
              <p className="text-sm font-semibold text-[var(--color-muted)] mb-2">Selected work (public links)</p>
              <ul className="flex flex-wrap gap-3">
                {selectedWorkLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-primary-light)] hover:text-[var(--color-accent)] font-medium"
                    >
                      {link.label}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 flex-1 max-w-sm w-full">
              <div className="bg-[var(--color-surface-elevated)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-6 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[var(--color-primary)]">13+</span>
                  <span className="text-[var(--color-primary)]/80 font-medium">years experience</span>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[var(--color-primary)]">58+</span>
                  <span className="text-[var(--color-primary)]/80 font-medium">completed jobs (Upwork)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-[var(--color-primary)]">100%</span>
                  <span className="text-[var(--color-primary)]/80 font-medium">job success</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-muted)] mb-3">Top skills</p>
                <div className="flex flex-wrap gap-2">
                  {topSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium px-3 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {skillsWithIcons.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[var(--color-surface-elevated)] rounded-xl px-4 py-3 shadow-sm border border-[var(--color-border)]"
                  >
                    {skill.icon}
                    <span className="text-[var(--color-primary)]/90 font-medium text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Services />
        <Projects />
        <Reviews />
      </main>
    </div>
  );
}
