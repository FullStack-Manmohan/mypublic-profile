"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { featuredProjects } from "../lib/projects";
import ProjectCardIcon from "./ProjectCardIcon";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2 text-center" data-aos="fade-up">
          Featured Work
        </h2>
        <p className="text-center text-[var(--color-muted)] mb-4 max-w-2xl mx-auto" data-aos="fade-up">
          Recent projects — production-grade web apps, dashboards, and platforms. Live links below.
        </p>
        <p className="text-center mb-12" data-aos="fade-up">
          <a
            href="https://github.com/FullStack-Manmohan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
          >
            More on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              data-aos="fade-up"
              className="bg-[var(--color-surface-elevated)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border border-[var(--color-border)] overflow-hidden hover-lift flex flex-col"
            >
              <div className="relative w-full h-52 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <Image src={project.image} alt="" fill className="object-cover opacity-20" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <ProjectCardIcon project={project} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">{project.name}</h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.caseStudySlug && (
                    <Link
                      href={`/case-studies/${project.caseStudySlug}`}
                      className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors"
                    >
                      Read case study
                    </Link>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
                  >
                    View project
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
