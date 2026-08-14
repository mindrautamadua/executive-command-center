"use client";

import { Bell, Calendar, ChevronDown, Network } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PersonAvatar } from "@/components/ui/PersonAvatar";

export function OrgHeader() {
  return (
    <header className="flex items-start justify-between px-5 pb-2 pt-3.5">
      <div>
        <h1 className="text-[21px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
          Organisasi &amp; Jabatan
        </h1>
        <p className="mt-[6px] text-[11px] text-ink-500">
          Dashboard Struktur Organisasi dan Manajemen Jabatan
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button className="flex w-[230px] items-center justify-between gap-2 rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
          <span className="flex items-center gap-2">
            <Network size={13} className="text-ink-400" />
            Struktur: Holding &amp; Anak Perusahaan
          </span>
          <ChevronDown size={13} className="text-ink-400" />
        </button>

        <button className="flex w-[160px] items-center justify-between gap-2 rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
          <span className="flex items-center gap-2">
            <Calendar size={13} className="text-ink-400" />
            Periode: Mei 2025
          </span>
          <ChevronDown size={13} className="text-ink-400" />
        </button>

        <button className="flex w-[140px] items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
          PTPN Group
          <ChevronDown size={13} className="text-ink-400" />
        </button>

        <ThemeToggle />
        <button
          className="relative text-ink-500 transition-colors hover:text-ptpn-green"
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
  );
}
