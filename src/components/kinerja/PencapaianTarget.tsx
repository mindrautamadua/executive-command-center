"use client";

import { ChevronRight } from "lucide-react";
import { pencapaian, kpiStrategis } from "@/lib/kinerja-data";
import { Delta } from "../ui/Delta";
import { CountUp } from "../ui/CountUp";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Gauge setengah lingkaran; busur progres dianimasikan (anim-draw). */
function Gauge({ value }: { value: number }) {
  const R = 62;
  const CX = 76;
  const CY = 76;
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const point = (deg: number) => [CX + R * Math.cos(rad(deg)), CY - R * Math.sin(rad(deg))];

  // 180° (kiri) → 0° (kanan)
  const endDeg = 180 - (value / 100) * 180;
  const [sx, sy] = point(180);
  const [ex, ey] = point(endDeg);
  const [tx, ty] = point(0);

  return (
    <svg viewBox="0 0 152 92" className="h-full w-full">
      <defs>
        <linearGradient id="gg-arc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e56a8" />
          <stop offset="55%" stopColor="#3b8fe0" />
          <stop offset="100%" stopColor="#5fc7f0" />
        </linearGradient>
      </defs>

      <path
        d={`M ${sx} ${sy} A ${R} ${R} 0 0 1 ${tx} ${ty}`}
        fill="none"
        stroke="var(--surface-3)"
        strokeWidth="13"
        strokeLinecap="round"
      />
      {/* sapuan busur: pathLength 1 + anim-draw menggambar dari kiri */}
      <path
        d={`M ${sx} ${sy} A ${R} ${R} 0 0 1 ${ex} ${ey}`}
        fill="none"
        stroke="url(#gg-arc)"
        strokeWidth="13"
        strokeLinecap="round"
        pathLength={1}
        className="anim-draw"
      />
      <circle cx={ex} cy={ey} r="7.5" fill="var(--surface)" className="anim-fade" style={{ "--d": "700ms" } as React.CSSProperties} />
      <circle cx={ex} cy={ey} r="5.5" fill="#3fae63" className="anim-fade" style={{ "--d": "700ms" } as React.CSSProperties} />
    </svg>
  );
}

export function PencapaianTarget() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy flex min-w-0 items-center gap-1.5"><span>PENCAPAIAN TARGET ORGANISASI</span><ScopeNote /></h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Progress pencapaian KPI Strategis</p>

      <div className="mt-1 flex min-h-0 flex-1 gap-3">
        <div className="relative flex w-[168px] shrink-0 flex-col items-center justify-center">
          <div className="h-[92px] w-[152px]">
            <Gauge value={pencapaian.value} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-[42px] text-center">
            <CountUp
              value={pencapaian.label}
              className="block text-[22px] font-extrabold leading-none text-ink-900"
            />
            <div className="mt-[4px] text-[9px] text-ink-500">{pencapaian.sub}</div>
          </div>
          <Delta value={pencapaian.delta} trend="up" size={10} className="mt-1" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[9px] font-semibold text-ink-500">KPI Strategis</span>
          <div className="mt-1 flex flex-1 flex-col justify-around">
            {kpiStrategis.map((k, i) => (
              <div key={k.label} className="flex items-center gap-2" title={`${k.label}: ${k.pct}%`}>
                <span className="w-[108px] shrink-0 whitespace-nowrap text-[9.5px] text-ink-700">
                  {k.label}
                </span>
                <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#f1f5f8]">
                  <div
                    className="anim-grow-x h-full rounded-full bg-gradient-to-r from-[#7ed957] to-[#22a45d]"
                    style={{ width: `${k.pct}%`, "--d": `${i * 60}ms` } as React.CSSProperties}
                  />
                </div>
                <span className="w-[24px] shrink-0 text-right text-[9.5px] font-bold tabular-nums text-ink-900">
                  {k.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat KPI strategis <ChevronRight size={11} />
      </button>
    </div>
  );
}
