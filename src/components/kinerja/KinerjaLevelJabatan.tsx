"use client";

import { ChevronRight } from "lucide-react";
import { levelJabatan, levelLegend } from "@/lib/kinerja-data";
import { ScopeNote } from "@/components/ui/ScopeNote";

export function KinerjaLevelJabatan() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy flex min-w-0 items-center gap-1.5"><span>KINERJA BERDASARKAN LEVEL JABATAN</span><ScopeNote /></h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Distribusi Kategori per Level</p>

      <div className="mt-2 flex items-center gap-3">
        <div className="flex flex-1 items-center justify-center gap-3">
          {levelLegend.map((l) => (
            <span key={l.label} className="flex items-center gap-1 text-[9px] text-ink-500">
              <span className="h-[7px] w-[7px] rounded-[2px]" style={{ background: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
        <span className="w-[62px] shrink-0 text-right text-[9px] text-ink-500">
          Rata-rata Score
        </span>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {levelJabatan.map((r, ri) => (
          <div key={r.level} className="flex items-center gap-2">
            <span className="w-[80px] shrink-0 whitespace-nowrap text-[9.5px] text-ink-700">
              {r.level}
            </span>
            <div
              className="anim-grow-x flex h-[15px] flex-1 overflow-hidden rounded-[3px]"
              style={{ "--d": `${ri * 70}ms` } as React.CSSProperties}
            >
              {r.seg.map((s, i) => (
                <span
                  key={i}
                  className="flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ width: `${s}%`, background: levelLegend[i].color }}
                  title={`${levelLegend[i].label}: ${s}%`}
                >
                  {s >= 8 ? `${s}%` : ""}
                </span>
              ))}
            </div>
            {/* nilai rata-rata score per level (kolom berlabel di header) */}
            <span className="w-[62px] shrink-0 text-right text-[10.5px] font-bold tabular-nums text-ink-900">
              {r.score}
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail level jabatan <ChevronRight size={11} />
      </button>
    </div>
  );
}
