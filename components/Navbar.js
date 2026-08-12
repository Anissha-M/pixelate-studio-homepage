"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-dark dark:text-white">
          Pixelate<span className="text-primary">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-base font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-dark dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-dark dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-dark dark:bg-white"></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-gray-700 dark:text-gray-300 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
