import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "../../../lib/case-studies";

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const study = getCaseStudyBySlug(resolved.slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] font-medium mb-8 transition-colors"
        >
          <FaArrowLeft className="text-sm" />
          All case studies
        </Link>

        <header className="mb-10">
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-2">
            {study.client}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
            {study.title}
          </h1>
          <p className="text-xl text-[var(--color-muted)] mb-4">{study.subtitle}</p>
          <p className="text-lg text-[var(--color-primary)]/90 mb-6">
            {study.tagline}
          </p>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            <strong className="text-[var(--color-primary)]">My role:</strong> {study.role}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tech.map((t) => (
              <span
                key={t}
                className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium px-2.5 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
          >
            View live project
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </header>

        <div className="relative w-full h-56 rounded-[var(--radius-card)] overflow-hidden bg-slate-200 mb-10">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">Overview</h2>
          <p className="text-[var(--color-primary)]/90 leading-relaxed">{study.overview}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">Challenge</h2>
          <p className="text-[var(--color-primary)]/90 leading-relaxed">{study.challenge}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6">End-to-end delivery</h2>
          <p className="text-[var(--color-muted)] mb-6">
            Delivered from design and Figma through prototype, frontend, backend, and cloud hosting.
          </p>
          <ol className="space-y-6">
            {study.phases.map((phase, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">{phase.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{phase.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-[var(--color-accent)]" />
            Outcome
          </h2>
          <p className="text-[var(--color-primary)]/90 leading-relaxed">{study.outcome}</p>
        </section>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--color-border)]">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            All case studies
          </Link>
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-primary-light)] font-semibold hover:text-[var(--color-accent)] transition-colors"
          >
            View live project
            <FaExternalLinkAlt className="text-sm" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
          >
            Get in touch for similar work
          </Link>
        </div>
      </div>
    </main>
  );
}
