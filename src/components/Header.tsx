"use client";

import { useState } from "react";
import { RotateCw, Maximize2, Calendar, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [spin, setSpin] = useState(false);

  return (
    <header className="flex items-center justify-between px-5 pb-3 pt-4">
      <div>
        <h1 className="text-[22px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
          EXECUTIVE COMMAND CENTER
        </h1>
        <p className="mt-[5px] text-[11px] font-medium tracking-[0.02em] text-ink-500">
          PTPN GROUP
        </p>
      </div>

      <div className="flex items-center gap-5">
        <ThemeToggle />
        <button
          onClick={() => {
            setSpin(true);
            setTimeout(() => setSpin(false), 700);
          }}
          className="text-ink-500 transition-colors hover:text-ptpn-green"
          aria-label="Muat ulang"
        >
          <RotateCw size={17} strokeWidth={1.7} className={spin ? "animate-spin" : ""} />
        </button>
        <button
          className="text-ink-500 transition-colors hover:text-ptpn-green"
          aria-label="Layar penuh"
        >
          <Maximize2 size={17} strokeWidth={1.7} />
        </button>

        <div className="leading-tight">
          <div className="text-[13px] font-bold text-ink-900">15 Agu 2026</div>
          <div className="mt-[2px] flex items-center gap-1.5 text-[10.5px] text-ink-500">
            <span>Selasa, 09:41 WIB</span>
            <span className="rounded-[3px] bg-[#22a45d] px-[5px] py-[1px] text-[7.5px] font-bold tracking-wide text-white">
              LIVE
            </span>
          </div>
        </div>

        <button className="flex w-[150px] items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11.5px] font-medium text-ink-700 shadow-card">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-ink-400" />
            PTPN Group
          </span>
          <ChevronDown size={13} className="text-ink-400" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="text-right leading-tight">
            <div className="text-[11.5px] font-bold text-ink-900">BOD Dashboard</div>
            <div className="text-[10px] text-ink-500">Direksi</div>
          </div>
          <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#e6ecf2]">
            <svg viewBox="0 0 40 40" className="h-full w-full">
              <rect width="40" height="40" fill="#dfe7ee" />
              <circle cx="20" cy="15" r="7" fill="#8a6a52" />
              <path d="M6 40c1.5-9 7.5-13 14-13s12.5 4 14 13Z" fill="#2a3b52" />
              <path d="M20 27c2.6 0 4.8 1 6 2.6L20 40l-6-10.4c1.2-1.6 3.4-2.6 6-2.6Z" fill="#f2f4f7" />
              <path d="M13 12c1-5 13-6 14 0 .6 3.6-1 4.6-1 4.6S25 11 22 11.6c-3 .6-7-1-7-1s-1 3-1 5.2S12.4 15 13 12Z" fill="#3b3128" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
