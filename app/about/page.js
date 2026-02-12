"use client";

import { FaCheckCircle, FaUserTie, FaAward } from "react-icons/fa";
import {
  experience,
  topSkills,
  aboutSummary,
  whatIBuild,
} from "../../lib/profile-data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
          More About Me
        </h1>
        <p className="text-lg text-[var(--color-primary)]/90 leading-relaxed mb-6">
          {aboutSummary.currentRole}
        </p>
        <p className="text-lg text-[var(--color-primary)]/90 leading-relaxed mb-8">
          {aboutSummary.freelance}
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
          <FaUserTie className="text-[var(--color-accent)]" /> Experience
        </h2>
        <ol className="border-l-4 border-[var(--color-accent)] pl-6 space-y-8 mb-12">
          {experience.map((job, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-[33px] top-2 w-4 h-4 bg-[var(--color-accent)] rounded-full border-2 border-[var(--color-surface)] outline-3 outline-[var(--color-surface)]" />
              <div className="mb-1 text-lg font-bold text-[var(--color-primary)]">
                {job.period} — {job.role}, {job.company}
              </div>
              <div className="text-sm text-[var(--color-muted)] mb-1">
                {job.type} · {job.location}
              </div>
              <p className="text-[var(--color-muted)]">{job.description}</p>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
          What I Build
        </h2>
        <ul className="space-y-2 mb-10">
          {whatIBuild.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[var(--color-primary)]/90"
            >
              <FaCheckCircle className="text-[var(--color-accent)] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
          Top Skills
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium px-3 py-1.5 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
          <p className="text-[var(--color-primary)]/90 italic border-l-4 border-[var(--color-accent)] pl-4 mb-4">
            {aboutSummary.cta}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
