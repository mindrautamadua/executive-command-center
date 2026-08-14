"use client";

import { useState } from "react";
import { ISLANDS, MAP_H } from "@/lib/indonesia";
import {
  heatLevelByRegion,
  HEAT_COLOR,
  heatLegend,
  heatRegions,
} from "@/lib/talent-data";

export function HeatmapUnitKerja() {
  const [hover, setHover] = useState<number | null>(null);
  const hovered = heatRegions.find((r) => r.region === hover);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "600ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Talent Density Map</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">
            HiPo relatif terhadap workforce &amp; posisi kritikal per region
          </p>
        </div>
        {/* tooltip region — muncul saat hover pulau/chip */}
        {hovered && (
          <div className="anim-fade shrink-0 whitespace-nowrap rounded-md border border-[#e3e9ef] bg-white px-2.5 py-1.5 text-[8.5px] leading-[1.5] text-ink-700 shadow-cardHover">
            <strong className="block text-[9px] font-bold text-ink-900">{hovered.name}</strong>
            HiPo <strong className="font-bold text-ink-900">{hovered.hipo}</strong> / Workforce{" "}
            <strong className="font-bold text-ink-900">
              {hovered.workforce.toLocaleString("id-ID")}
            </strong>
            <br />
            Density <strong className="font-bold text-ptpn-green">{hovered.density}</strong> · Coverage{" "}
            <strong className="font-bold text-ink-900">{hovered.coverage}</strong> · Flight Risk{" "}
            <strong className="font-bold text-[#ef4444]">{hovered.flightRisk}</strong>
          </div>
        )}
      </div>

      <div className="relative min-h-0 flex-1">
        <svg
          viewBox={`0 0 1000 ${MAP_H}`}
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="hm-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <g filter="url(#hm-soft)" opacity="0.28">
            {ISLANDS.map((is) => (
              <path
                key={`hg-${is.id}`}
                d={is.d}
                fill={HEAT_COLOR[heatLevelByRegion[is.region]]}
              />
            ))}
          </g>
          {ISLANDS.map((is) => (
            <path
              key={is.id}
              d={is.d}
              fill={HEAT_COLOR[heatLevelByRegion[is.region]]}
              fillOpacity={hover === null || hover === is.region ? 0.78 : 0.3}
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinejoin="round"
              style={{ transition: "fill-opacity .15s" }}
              onMouseEnter={() => setHover(is.region)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </svg>

        {/* chip density per region */}
        {heatRegions.map((r) => {
          const rendah = heatLevelByRegion[r.region] === "rendah";
          return (
            <span
              key={r.region}
              onMouseEnter={() => setHover(r.region)}
              onMouseLeave={() => setHover(null)}
              className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-default items-center gap-1 rounded-full border border-[#e3e9ef] bg-white px-1.5 py-[1px] text-[9px] font-bold tabular-nums text-ink-900 shadow-card transition-transform duration-150 ${
                hover === r.region ? "scale-110" : ""
              }`}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
            >
              {rendah && (
                <span className="animate-pulseDot h-[6px] w-[6px] rounded-full bg-[#ef4444]" />
              )}
              {r.density}
            </span>
          );
        })}
      </div>

      <div className="mt-1 flex flex-col gap-[5px]">
        {heatLegend.map((l) => (
          <span key={l.label} className="flex items-center gap-1.5 text-[9px] text-ink-500">
            <span
              className="h-[8px] w-[8px] rounded-[2px]"
              style={{ background: HEAT_COLOR[l.level] }}
            />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
