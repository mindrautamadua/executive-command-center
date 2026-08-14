"use client";

import { ISLANDS, MAP_H } from "@/lib/indonesia";
import { regional } from "@/lib/data";
import { Delta } from "./ui/Delta";

export function KinerjaRegional() {
  return (
    <div className="card flex h-full flex-col px-4 pb-2.5 pt-3">
      <div className="flex items-baseline gap-1.5">
        <h3 className="card-title">KINERJA REGIONAL</h3>
        <span className="text-[9px] text-ink-400">(YTD 2025)</span>
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
              stroke="#ffffff"
              strokeWidth="1"
              strokeOpacity="0.7"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <span className="muted-label">REGIONAL</span>
        <span className="text-[9px] text-ink-400">Pendapatan (YTD 2025)</span>
      </div>

      <div className="mt-1 flex flex-1 flex-col justify-around">
        {regional.map((r) => (
          <div key={r.name} className="flex items-center">
            <span
              className="mr-2 h-[7px] w-[7px] shrink-0 rounded-full"
              style={{ background: r.color }}
            />
            <span className="text-[10.5px] font-medium text-ink-700">{r.name}</span>
            <span className="ml-auto mr-5 text-[10.5px] font-bold tabular-nums text-ink-900">
              {r.value}
            </span>
            <Delta
              value={r.delta}
              trend={r.trend}
              size={10}
              className="w-[46px] justify-end"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
