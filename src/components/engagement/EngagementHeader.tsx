"use client";

import { Bell, ChevronDown, Download, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

function SelectField({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: number;
}) {
  return (
    <button
      className="flex items-center justify-between gap-3 rounded-lg border border-[#e3e9ef] bg-white px-3 py-[7px] text-left shadow-card"
      style={{ width }}
    >
      <span className="leading-tight">
        <span className="block text-[9px] text-ink-400">{label}</span>
        <span className="block text-[11px] font-semibold text-ink-900">{value}</span>
      </span>
      <ChevronDown size={14} className="shrink-0 text-ink-400" />
    </button>
  );
}

export function EngagementHeader() {
  return (
    <>
      <header className="flex items-start justify-between px-5 pt-4">
        <div>
          <h1 className="text-[21px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
            Employee Engagement
          </h1>
          <p className="mt-[7px] text-[11px] text-ink-500">
            Pantau, pahami dan tingkatkan keterlibatan karyawan untuk organisasi yang lebih
            produktif
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <SelectField label="Periode" value="Q2 2025 (Apr - Jun)" width={168} />
          <SelectField label="Unit Organisasi" value="Semua Unit" width={158} />
          <SelectField label="Lokasi" value="Semua Lokasi" width={158} />

          <ThemeToggle />
          <button
            className="relative ml-1 text-ink-500 transition-colors hover:text-ptpn-green"
            aria-label="Notifikasi"
          >
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

      <div className="flex justify-end gap-2.5 px-5 pb-3 pt-3">
        <button className="flex items-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white px-3.5 py-[7px] text-[11px] font-semibold text-ink-700 shadow-card transition-colors hover:bg-[#f5f8fa]">
          <Download size={14} className="text-ink-500" />
          Export
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white px-3.5 py-[7px] text-[11px] font-semibold text-ink-700 shadow-card transition-colors hover:bg-[#f5f8fa]">
          <FileText size={14} className="text-ink-500" />
          Laporan Detail
        </button>
      </div>
    </>
  );
}
