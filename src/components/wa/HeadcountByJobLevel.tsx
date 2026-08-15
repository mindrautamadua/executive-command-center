"use client";

import { headcountByJobLevel, jobLevelTotal } from "@/lib/wa-data";
import { SectionHead } from "../hc/SectionHead";
import { ScopeNote } from "../ui/ScopeNote";

/** Piramida SVG: 6 lapis trapesium, lebar linier mengikuti posisi lapis. */
function Pyramid() {
  const W = 180;
  const H = 148;
  const n = headcountByJobLevel.length;
  const gap = 3;
  const slice = (H - gap * (n - 1)) / n;
  const cx = W / 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-auto max-w-full">
      {headcountByJobLevel.map((lvl, i) => {
        const yTop = i * (slice + gap);
        const yBot = yTop + slice;
        const wTop = (yTop / H) * W;
        const wBot = (yBot / H) * W;
        const points =
          i === 0
            ? `${cx},0 ${cx + wBot / 2},${yBot} ${cx - wBot / 2},${yBot}`
            : `${cx - wTop / 2},${yTop} ${cx + wTop / 2},${yTop} ${cx + wBot / 2},${yBot} ${cx - wBot / 2},${yBot}`;
        return <polygon key={lvl.name} points={points} fill={lvl.color} opacity={0.9} />;
      })}
    </svg>
  );
}

export function HeadcountByJobLevel() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead
        title="Headcount by Job Level"
        action="Lihat Detail"
        href="/workforce-analytics/headcount-job-level"
        badge={<ScopeNote />}
      />
      <p className="mt-[3px] text-[9px] text-ink-500">Distribusi berdasarkan Level Jabatan</p>

      <div className="mt-2 flex min-h-0 flex-1 items-center gap-4">
        <div className="flex h-[85%] w-[38%] shrink-0 items-center justify-center">
          <Pyramid />
        </div>

        <div className="min-w-0 flex-1">
          {headcountByJobLevel.map((lvl) => (
            <div
              key={lvl.name}
              className="flex items-center gap-1.5 border-b border-[#f1f5f9] py-[4.5px]"
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: lvl.color }}
              />
              <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-ink-700">
                {lvl.name}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold text-ink-900">{lvl.value}</span>
              <span className="w-[34px] shrink-0 text-right text-[8.5px] text-ink-400">
                {lvl.pct}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 py-[5px]">
            <span className="w-[8px] shrink-0" />
            <span className="min-w-0 flex-1 text-[9px] font-extrabold text-ink-900">Total</span>
            <span className="shrink-0 text-[9.5px] font-extrabold text-ink-900">
              {jobLevelTotal.value}
            </span>
            <span className="w-[34px] shrink-0 text-right text-[8.5px] font-bold text-ink-700">
              {jobLevelTotal.pct}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
