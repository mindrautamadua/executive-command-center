"use client";

import { useState } from "react";
import { Bell, Check, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { orgNodes } from "@/lib/hc-data";

function SelectBox({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <button
      className="flex items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-1.5 text-left shadow-card"
      style={{ width }}
    >
      <span className="leading-tight">
        <span className="block text-[8.5px] font-medium text-ink-400">{label}</span>
        <span className="mt-[2px] block text-[11px] font-bold text-ink-900">{value}</span>
      </span>
      <ChevronDown size={13} className="ml-2 shrink-0 text-ink-400" />
    </button>
  );
}

/** Dropdown drill-down: Enterprise → Subholding → Region → Business Unit. */
function OrgLevelSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const node = orgNodes[selected];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-[200px] items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-1.5 text-left shadow-card"
      >
        <span className="min-w-0 leading-tight">
          <span className="block text-[8.5px] font-medium text-ink-400">{node.level}</span>
          <span className="mt-[2px] block truncate text-[11px] font-bold text-ink-900">
            {node.label}
          </span>
        </span>
        <ChevronDown
          size={13}
          className={`ml-2 shrink-0 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <button
            className="fixed inset-0 z-40 cursor-default"
            aria-label="Tutup pilihan level organisasi"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-1.5 w-[248px] rounded-xl border border-[#e3e9ef] bg-white py-1.5 shadow-card">
            {orgNodes.map((n, i) => (
              <button
                key={n.label}
                onClick={() => {
                  setSelected(i);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-[6px] text-left transition-colors hover:bg-[#f5f8fa] ${
                  i === selected ? "bg-ptpn-greenLight/50" : ""
                }`}
                style={{ paddingLeft: `${12 + n.depth * 14}px` }}
              >
                <span className="min-w-0">
                  <span className="block truncate text-[10px] font-semibold text-ink-900">
                    {n.label}
                  </span>
                  <span className="block text-[8px] text-ink-400">{n.level}</span>
                </span>
                {i === selected && <Check size={12} className="shrink-0 text-ptpn-green" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function SdmHeader() {
  return (
    <header className="flex items-center gap-4 px-5 pb-3 pt-3.5">
      <div className="min-w-0 shrink-0">
        <h1 className="text-[20px] font-extrabold leading-none tracking-[-0.01em] text-[#1b3a6b]">
          HC Executive Command Center
        </h1>
        <p className="mt-[5px] text-[10.5px] font-semibold text-ptpn-green">
          Human Capital Intelligence for Sustainable Growth
        </p>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-3">
        <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
        <OrgLevelSelect />

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
            <div className="text-[11px] font-bold text-ink-900">Direktur Utama</div>
            <div className="text-[9.5px] text-ink-500">BOD-1</div>
          </div>
          <ChevronDown size={13} className="text-ink-400" />
        </div>
      </div>
    </header>
  );
}
