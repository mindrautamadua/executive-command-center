"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ISLANDS, MAP_H } from "@/lib/indonesia";
import { regional } from "@/lib/data";
import { Delta } from "./ui/Delta";

export function KinerjaRegional() {
  return (
    <div className="card flex h-full flex-col px-4 pb-2.5 pt-3">
      <div className="flex items-baseline gap-1.5">
        <h3 className="card-title">KINERJA REGIONAL</h3>
        <span className="text-[9px] text-ink-400">(YTD 2026)</span>
      </div>

      <div className="relative mt-0.5 h-[104px] w-full shrink-0">
        <svg
          viewBox={`0 0 1000 ${MAP_H}`}
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="kr-fill"
              gradientUnits="userSpaceOnUse"
              x1="80"
              y1="0"
              x2="700"
              y2="376"
            >
              <stop offset="0%" stopColor="#b7f0c6" />
              <stop offset="50%" stopColor="#4ec583" />
              <stop offset="100%" stopColor="#1e9a60" />
            </linearGradient>
            <filter id="kr-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <g filter="url(#kr-soft)" opacity="0.35">
            {ISLANDS.map((is) => (
              <path key={`kg-${is.id}`} d={is.d} fill="#4ec583" />
            ))}
          </g>
          {ISLANDS.map((is) => (
            <path
              key={is.id}
              d={is.d}
              fill="url(#kr-fill)"
              stroke="var(--map-stroke)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <span className="muted-label">REGIONAL</span>
        <span className="text-[9px] text-ink-400">Pendapatan (YTD 2026)</span>
      </div>

      <div className="mt-1 flex flex-1 flex-col justify-around">
        {regional.map((r) => {
          const baris = (
            <>
              <span
                className="mr-2 h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ background: r.color }}
              />
              <span className="text-[10.5px] font-medium text-ink-700">{r.name}</span>
              {r.diagnosis && (
                <span className="ml-1.5 shrink-0 rounded bg-[#fee2e2] px-1 py-[1px] text-[8px] font-bold text-[#dc2626]">
                  PERLU PERHATIAN
                </span>
              )}
              <span className="ml-auto mr-5 text-[10.5px] font-bold tabular-nums text-ink-900">
                {r.value}
              </span>
              <Delta
                value={r.delta}
                trend={r.trend}
                size={10}
                className="w-[46px] justify-end"
              />
            </>
          );

          // Baris yang tumbuh negatif jadi tautan diagnosis: pertanyaan
          // berikutnya setelah melihat angka merah selalu "kenapa?", dan
          // jawabannya ada di halaman produktivitas kebun.
          return r.diagnosis ? (
            <Link
              key={r.name}
              href={r.diagnosis}
              className="-mx-1 flex items-center rounded px-1 py-[1px] transition-colors hover:bg-[#fef2f2]"
              title={`Telusuri penyebab penurunan ${r.name}`}
            >
              {baris}
              <ChevronRight size={12} className="ml-0.5 shrink-0 text-[#dc2626]" />
            </Link>
          ) : (
            <div key={r.name} className="flex items-center pr-[17px]">
              {baris}
            </div>
          );
        })}
      </div>
    </div>
  );
}
