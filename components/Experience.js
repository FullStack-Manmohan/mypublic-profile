"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { experience } from "../lib/profile-data";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="experience" className="py-20 px-6 bg-[var(--color-surface)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2" data-aos="fade-up">
          Experience
        </h2>
        <p className="text-[var(--color-muted)] mb-10" data-aos="fade-up">
          Current and past roles — aligned with my LinkedIn profile.
        </p>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <article
              key={`${job.company}-${idx}`}
              data-aos="fade-up"
              className="bg-[var(--color-surface-elevated)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] border border-[var(--color-border)] hover-lift"
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-[var(--color-primary)]">{job.role}</h3>
                <span className="text-[var(--color-muted)]">·</span>
                <span className="font-semibold text-[var(--color-primary-light)]">{job.company}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-[var(--color-muted)] mb-3">
                <span>{job.period}</span>
                <span>·</span>
                <span>{job.type}</span>
                {job.location && (
                  <>
                    <span>·</span>
                    <span>{job.location}</span>
                  </>
                )}
              </div>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
