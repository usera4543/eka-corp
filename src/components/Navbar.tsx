"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-[var(--color-navy)] sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-navy)_92%,transparent)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-extrabold tracking-tight text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          aria-label="Eka Corp Home"
        >
          Eka Corp
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 sm:gap-4">
            <li>
              <Link href="/" className="px-3 py-2 rounded-md text-white hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">Home</Link>
            </li>
            <li>
              <Link href="/games" className="px-3 py-2 rounded-md text-white hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">Games</Link>
            </li>
            <li>
              <Link href="/about" className="px-3 py-2 rounded-md text-white hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">About</Link>
            </li>
            <li>
              <Link href="/contact" className="px-3 py-2 rounded-md text-white hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


