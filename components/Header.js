"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#1E3A8A]/90 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#F59E0B] font-bold text-2xl tracking-tight">Manmohan Y.</span>
          <span className="hidden sm:inline text-white font-semibold text-lg">| Full-stack Dev & CEO</span>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[#F3F4F6] hover:text-[#10B981] transition-colors font-medium px-2 py-1"
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
          <span className="w-7 h-0.5 bg-[#F3F4F6] rounded transition-all group-hover:bg-[#10B981]" />
          <span className="w-7 h-0.5 bg-[#F3F4F6] rounded transition-all group-hover:bg-[#10B981]" />
          <span className="w-7 h-0.5 bg-[#F3F4F6] rounded transition-all group-hover:bg-[#10B981]" />
        </button>
        {/* Mobile Nav Drawer */}
        {open && (
          <div className="fixed inset-0 bg-[#1E3A8A]/95 flex flex-col items-center justify-center gap-8 md:hidden transition-all">
            <button
              className="absolute top-6 right-6 text-[#F59E0B] text-3xl"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              &times;
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#F3F4F6] text-2xl font-semibold hover:text-[#10B981] transition-colors"
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