"use client";

import { useState } from "react";
import { komoditasTabs } from "@/lib/data";
import { DetailLink } from "./DetailLink";

const KOMODITAS: Record<
  string,
  { name: string; price: string; unit: string; pct: number; color: string }[]
> = {
  "Regional 1": [
    { name: "CPO", price: "Rp 12.482", unit: "/kg", pct: 92, color: "#22a45d" },
    { name: "PK", price: "Rp 2.648", unit: "/kg", pct: 64, color: "#2f9bf5" },
    { name: "Karet", price: "Rp 18.650", unit: "/kg", pct: 48, color: "#f5a524" },
  ],
  "Regional 2": [
    { name: "CPO", price: "Rp 12.310", unit: "/kg", pct: 88, color: "#22a45d" },
    { name: "PK", price: "Rp 2.512", unit: "/kg", pct: 58, color: "#2f9bf5" },
    { name: "Tebu", price: "Rp 1.225", unit: "/kg", pct: 41, color: "#f5a524" },
  ],
  "Regional 3": [
    { name: "CPO", price: "Rp 12.104", unit: "/kg", pct: 81, color: "#22a45d" },
    { name: "PK", price: "Rp 2.480", unit: "/kg", pct: 55, color: "#2f9bf5" },
    { name: "Teh", price: "Rp 9.870", unit: "/kg", pct: 37, color: "#f5a524" },
  ],
  "Regional 4": [
    { name: "CPO", price: "Rp 11.985", unit: "/kg", pct: 74, color: "#22a45d" },
    { name: "Karet", price: "Rp 18.220", unit: "/kg", pct: 52, color: "#2f9bf5" },
    { name: "Tebu", price: "Rp 1.198", unit: "/kg", pct: 33, color: "#f5a524" },
  ],
  "Regional 5": [
    { name: "CPO", price: "Rp 12.220", unit: "/kg", pct: 79, color: "#22a45d" },
    { name: "PK", price: "Rp 2.530", unit: "/kg", pct: 57, color: "#2f9bf5" },
    { name: "Kopi", price: "Rp 32.400", unit: "/kg", pct: 44, color: "#f5a524" },
  ],
};

export function KomoditasUtama() {
  const [tab, setTab] = useState(komoditasTabs[0]);
  const rows = KOMODITAS[tab].slice(0, 2);

  return (
    <div className="card flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-2.5 pt-2">
      <div className="flex items-baseline justify-between">
        <h3 className="card-title whitespace-nowrap">KOMODITAS UTAMA</h3>
        <div className="flex shrink-0 items-baseline gap-2">
          <span className="text-[9px] text-ink-400">(YTD 2026)</span>
          <DetailLink href="/produksi-operasi" />
        </div>
      </div>

      <div className="relative mt-1 shrink-0">
        <div className="no-scrollbar flex gap-1 overflow-x-auto pr-6">
          {komoditasTabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-md px-1.5 py-[3px] text-[9px] font-semibold leading-none transition-colors ${
                t === tab
                  ? "bg-ptpn-greenLight text-ptpn-green"
                  : "text-ink-500 hover:bg-[#f5f8fa]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <span className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="mt-0.5 flex min-h-0 flex-1 flex-col justify-center gap-1.5">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="flex items-baseline gap-2">
              <span className="w-[30px] shrink-0 text-[10px] font-semibold text-ink-700">
                {r.name}
              </span>
              <span className="text-[11px] font-bold text-ink-900">{r.price}</span>
              <span className="text-[9px] text-ink-400">{r.unit}</span>
            </div>
            <div className="mt-[3px] h-[3px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${r.pct}%`, background: r.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
