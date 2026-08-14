"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { kualitasHire, kualitasHireBar } from "@/lib/rekrutmen-data";
import { CountUp } from "../ui/CountUp";

/** gauge 281° dengan celah di bawah; sapuan busur dianimasikan saat mount */
function ScoreGauge({ pct }: { pct: number }) {
  const size = 132;
  const r = 56;
  const arc = 78; // porsi keliling yang tergambar
  const [sweep, setSweep] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setSweep(pct));
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
      <g transform={`rotate(129.6 ${size / 2} ${size / 2})`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          pathLength={100}
          fill="none"
          stroke="var(--surface-3)"
          strokeWidth={11}
          strokeLinecap="round"
          strokeDasharray={`${arc} ${100 - arc}`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          pathLength={100}
          fill="none"
          stroke="#22a45d"
          strokeWidth={11}
          strokeLinecap="round"
          strokeDasharray={`${(arc * sweep) / 100} ${100 - (arc * sweep) / 100}`}
          style={{ transition: "stroke-dasharray 1s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </g>
    </svg>
  );
}

export function KualitasHire() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Kualitas Hire (New Hire Performance)</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px] transition-colors hover:bg-[#f7f9fb]">
          Q2 2025 <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 items-center gap-3">
        <div className="flex h-full w-[136px] shrink-0 flex-col items-center justify-center">
          <div className="relative min-h-0 w-full flex-1">
            <ScoreGauge pct={kualitasHire.pct} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CountUp
                value={kualitasHire.skor}
                className="text-[24px] font-extrabold leading-none text-ink-900"
              />
              <span className="mt-[3px] text-[9px] text-ink-500">{kualitasHire.skala}</span>
            </div>
          </div>
          <div className="mt-[2px] flex items-center gap-[3px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                strokeWidth={0}
                fill="#22a45d"
                opacity={i < kualitasHire.bintang ? 1 : 0.45}
              />
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
          {kualitasHireBar.map((b, i) => (
            <div
              key={b.label}
              className="flex items-center gap-2"
              title={`${b.label}: ${b.pct}%`}
            >
              <span className="w-[104px] shrink-0 truncate text-[9.5px] text-ink-700">
                {b.label}
              </span>
              <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="anim-grow-x block h-full rounded-full"
                  style={
                    {
                      width: `${b.pct}%`,
                      background: b.color,
                      "--d": `${i * 60}ms`,
                    } as React.CSSProperties
                  }
                />
              </span>
              <span className="w-[26px] shrink-0 text-right text-[9.5px] font-semibold tabular-nums text-ink-900">
                {b.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat detail kualitas hire <ChevronRight size={11} />
      </button>
    </div>
  );
}
