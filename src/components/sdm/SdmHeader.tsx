"use client";

import { Search, Calendar, ChevronDown, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SdmHeader() {
  return (
    <header className="flex items-center gap-4 px-5 pb-3 pt-3.5">
      <div className="shrink-0">
        <h1 className="text-[20px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
          SDM &amp; TALENTA
        </h1>
        <p className="mt-[5px] text-[10.5px] font-medium text-ink-500">
          Dashboard Manajemen SDM Terintegrasi
        </p>
      </div>

      <div className="relative mx-auto w-[300px]">
        <Search
          size={14}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
        />
        <input
          readOnly
          placeholder="Cari karyawan, posisi, unit kerja..."
          className="w-full rounded-lg border border-[#e3e9ef] bg-white py-[9px] pl-9 pr-14 text-[11px] text-ink-700 shadow-card placeholder:text-ink-400 focus:outline-none"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[#e3e9ef] bg-[#f7f9fb] px-1.5 py-[1px] text-[9px] font-semibold text-ink-400">
          ⌘K
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
          <Calendar size={13} className="text-ink-400" />
          Periode: YTD 2025
          <ChevronDown size={13} className="ml-1 text-ink-400" />
        </button>

        <button className="flex w-[140px] items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
          PTPN Group
          <ChevronDown size={13} className="text-ink-400" />
        </button>

        <ThemeToggle />
        <button className="relative text-ink-500 transition-colors hover:text-ptpn-green" aria-label="Notifikasi">
          <Bell size={18} strokeWidth={1.7} />
          <span className="absolute -right-[7px] -top-[6px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#ef4444] px-[3px] text-[9px] font-bold text-white">
            12
          </span>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#e6ecf2]">
            <svg viewBox="0 0 40 40" className="h-full w-full">
              <rect width="40" height="40" fill="#dfe7ee" />
              <circle cx="20" cy="15" r="7" fill="#8a6a52" />
              <path d="M6 40c1.5-9 7.5-13 14-13s12.5 4 14 13Z" fill="#2a3b52" />
              <path d="M20 27c2.6 0 4.8 1 6 2.6L20 40l-6-10.4c1.2-1.6 3.4-2.6 6-2.6Z" fill="#f2f4f7" />
              <path d="M13 12c1-5 13-6 14 0 .6 3.6-1 4.6-1 4.6S25 11 22 11.6c-3 .6-7-1-7-1s-1 3-1 5.2S12.4 15 13 12Z" fill="#3b3128" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-bold text-ink-900">BOD Dashboard</div>
            <div className="text-[9.5px] text-ink-500">Direksi</div>
          </div>
        </div>
      </div>
    </header>
  );
}
