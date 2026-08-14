"use client";

import { Bell, ChevronDown, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PersonAvatar } from "@/components/ui/PersonAvatar";

function SelectField({
  label,
  value,
  width,
}: {
  label?: string;
  value: string;
  width: number;
}) {
  return (
    <button
      className="flex items-center justify-between gap-3 rounded-lg border border-[#e3e9ef] bg-white px-3 py-[7px] text-left shadow-card"
      style={{ width }}
    >
      <span className="leading-tight">
        {label && <span className="block text-[9px] text-ink-400">{label}</span>}
        <span className="block text-[11px] font-semibold text-ink-900">{value}</span>
      </span>
      <ChevronDown size={14} className="shrink-0 text-ink-400" />
    </button>
  );
}

export function KinerjaHeader() {
  return (
    <>
      <header className="flex items-start justify-between px-5 pt-4">
        <div>
          <h1 className="text-[21px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
            Kinerja Karyawan
          </h1>
          <p className="mt-[7px] text-[11px] text-ink-500">
            Pantau, kelola dan tingkatkan kinerja untuk mencapai target perusahaan
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <SelectField label="Periode Penilaian" value="Q2 2026 (Apr - Jun)" width={168} />
          <SelectField label="Unit Organisasi" value="Semua Unit" width={158} />
          <SelectField value="PTPN Group" width={152} />

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
            <PersonAvatar seed={0} size={36} className="ring-2 ring-[#e6ecf2]" />
            <div className="leading-tight">
              <div className="text-[11px] font-bold text-ink-900">BOD Dashboard</div>
              <div className="text-[9.5px] text-ink-500">Direksi</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex justify-end px-5 pb-3 pt-3">
        <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3fae63] to-[#1a9c5b] px-4 py-[8px] text-[11px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
          <Download size={14} />
          Ekspor
        </button>
      </div>
    </>
  );
}
