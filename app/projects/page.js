"use client";

import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { allProjects, githubUrl } from "../../lib/projects";
import ProjectCardIcon from "../../components/ProjectCardIcon";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 4;

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const visible = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

  return (
    <main className="max-w-6xl mx-auto py-16 px-6 min-h-screen bg-[var(--color-surface)]">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2 text-center">
        Projects
      </h1>
      <p className="text-center text-[var(--color-muted)] mb-2 max-w-2xl mx-auto">
        Recent work — full-stack web apps, dashboards, and sites. Live links and tech stack for each.
      </p>
      <p className="text-center mb-10">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
        >
          View more on GitHub
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((project) => (
          <article
            key={project.name}
            data-aos="fade-up"
            className="bg-[var(--color-surface-elevated)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] border border-[var(--color-border)] overflow-hidden hover-lift flex flex-col"
          >
            <div className="relative w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <Image src={project.image} alt="" fill className="object-cover opacity-20" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <ProjectCardIcon project={project} sizeClass="w-20 h-20 md:w-24 md:h-24" />
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
                  View site
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, allProjects.length))}
            className="bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </main>
  );
}
