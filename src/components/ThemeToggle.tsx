"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title={dark ? "Mode terang" : "Mode gelap"}
      className="theme-toggle relative flex h-[26px] w-[48px] shrink-0 items-center rounded-full border border-[#e3e9ef] px-[3px] transition-colors"
    >
      <span
        className={`theme-toggle-knob flex h-[19px] w-[19px] items-center justify-center rounded-full shadow-card transition-transform duration-200 ${
          dark ? "translate-x-[22px]" : "translate-x-0"
        }`}
      >
        {dark ? <Moon size={11} strokeWidth={2} /> : <Sun size={11} strokeWidth={2} />}
      </span>
    </button>
  );
}
