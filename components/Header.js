"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/#experience" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.y.jpg"
            alt="Manmohan Y. Logo"
            width={60}
            height={60}
            className=""
            priority
          />
          {/* <span className="text-[#10B981] font-bold text-2xl tracking-tight">Manmohan Y.</span>
          <span className="hidden sm:inline text-white font-semibold text-lg">| Full-stack Dev & CEO</span> */}
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          <Link
            href="/contact"
            className="text-[var(--color-accent-light)] font-semibold text-sm px-3 py-1.5 rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 transition-colors"
          >
            Open to work
          </Link>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-slate-200 hover:text-[var(--color-accent-light)] transition-colors font-medium px-2 py-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Open navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-7 h-0.5 bg-slate-200 rounded transition-all group-hover:bg-[var(--color-accent-light)]" />
          <span className="w-7 h-0.5 bg-slate-200 rounded transition-all group-hover:bg-[var(--color-accent-light)]" />
          <span className="w-7 h-0.5 bg-slate-200 rounded transition-all group-hover:bg-[var(--color-accent-light)]" />
        </button>
        {/* Mobile Nav Drawer */}
        {open && (
          <div className="fixed inset-0 bg-[var(--color-primary)]/98 flex flex-col items-center justify-center gap-8 md:hidden transition-all">
            <button
              className="absolute top-6 right-6 text-amber-400 text-3xl"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              &times;
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-100 text-2xl font-semibold hover:text-[var(--color-accent-light)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
