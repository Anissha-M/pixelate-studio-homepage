"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setIsDark(!isDark);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="text-lg w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:border-primary transition"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}