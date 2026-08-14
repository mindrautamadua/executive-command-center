"use client";

import { ISLANDS, MAP_H } from "@/lib/indonesia";
import { regionIndex, regionLegend } from "@/lib/ir-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";
import { Delta } from "../ui/Delta";

export function RegionIrIndex() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead no="7" title="Indeks Hubungan Industrial per Region" />

      <div className="flex min-h-0 flex-1 items-center gap-3 pt-1">
        <div className="relative h-full w-[42%] shrink-0 self-center">
          <svg
            viewBox={`0 0 1000 ${MAP_H}`}
            className="h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="ir-map-fill"
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
              <filter id="ir-map-soft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>
            <g filter="url(#ir-map-soft)" opacity="0.35">
              {ISLANDS.map((is) => (
                <path key={`irg-${is.id}`} d={is.d} fill="#4ec583" />
              ))}
            </g>
            {ISLANDS.map((is) => (
              <path
                key={is.id}
                d={is.d}
                fill="url(#ir-map-fill)"
                stroke="#ffffff"
                strokeWidth="1"
                strokeOpacity="0.7"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>

        <div className="flex min-w-0 flex-1 flex-col self-stretch">
          <div className="flex items-center justify-between border-b border-[#eef2f6] pb-1 text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
            <span>Region</span>
            <span className="flex items-center gap-4">
              <span>Indeks</span>
              <span className="w-[42px] text-right">Perubahan</span>
            </span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-around">
            {regionIndex.map((r) => (
              <div key={r.name} className="flex items-center">
                <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-ink-700">
                  {r.name}
                </span>
                <span className="w-[34px] shrink-0 text-right text-[9.5px] font-bold tabular-nums text-ink-900">
                  {r.index}
                </span>
                <Delta
                  value={r.delta}
                  trend={r.trend}
                  size={9}
                  className="w-[42px] shrink-0 justify-end"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        {regionLegend.map((l) => (
          <span key={l.label} className="flex items-center gap-1 text-[8px] text-ink-500">
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: l.color }} />
            {l.label}
          </span>
        ))}
      </div>

      <PanelFooterLink label="Lihat Detail Regional" />
    </div>
  );
}
