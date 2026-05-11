"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1B4332" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-wide">Stoneman Services</span>
          <span className="text-xs" style={{ color: "#a47551" }}>Middle Tennessee&apos;s Wood Care Pros</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-200 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-yellow-200 transition-colors">Services</Link>
          <Link href="/faq" className="hover:text-yellow-200 transition-colors">FAQ</Link>
          <Link href="/about" className="hover:text-yellow-200 transition-colors">About</Link>
          <Link href="/areas-we-serve" className="hover:text-yellow-200 transition-colors">Areas We Serve</Link>
          <Link href="/contact" className="hover:text-yellow-200 transition-colors">Contact</Link>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full font-semibold text-white transition-colors"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            Get Free Estimate
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div style={{ backgroundColor: "#0f2a1f" }} className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">Services</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">FAQ</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">About</Link>
          <Link href="/areas-we-serve" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">Areas We Serve</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 border-b border-green-800 hover:text-yellow-200">Contact</Link>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-full font-semibold text-white text-center"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            Get Free Estimate
          </a>
          <a href="tel:6154038347" className="text-center py-2 font-semibold" style={{ color: "#a47551" }}>
            📞 Ron: (615) 403-8347
          </a>
        </div>
      )}
    </header>
  );
}
