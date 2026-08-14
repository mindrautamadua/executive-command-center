import { ArrowRight } from "lucide-react";
import {
  levelJabatanMax,
  perempuanLevelJabatan,
  targetLevelJabatan,
} from "@/lib/di-data";
import { PALETTE } from "@/lib/chart-palette";

/** Posisi marker target pada lintasan bar (%). */
const POSISI_TARGET = (targetLevelJabatan / levelJabatanMax) * 100;

export function PerempuanLevelJabatan() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Perempuan berdasarkan Level Jabatan</h3>
          <p className="mt-[3px] text-[9px] text-ink-400">(Per 30 Jun 2025)</p>
        </div>
        <span className="flex items-center gap-1 whitespace-nowrap text-[9px] text-ink-400">
          <span className="h-[10px] w-[2px] rounded" style={{ background: PALETTE.amber }} />
          Target {targetLevelJabatan}%
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {perempuanLevelJabatan.map((b, i) => (
          <div key={b.level} className="flex items-center gap-2.5">
            <span
              className={`w-[92px] shrink-0 text-[9.5px] leading-[1.2] ${
                b.total ? "font-bold text-ink-900" : "text-ink-700"
              }`}
            >
              {b.level}
            </span>
            <span className="relative block h-[9px] min-w-0 flex-1 rounded-full bg-[#f2f5f8]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={
                  {
                    width: `${Math.min(100, (b.pct / levelJabatanMax) * 100)}%`,
                    background: PALETTE.purple,
                    opacity: b.total ? 1 : 0.82,
                    "--d": `${i * 50}ms`,
                  } as React.CSSProperties
                }
              />
              {/* marker target 30% per level */}
              <span
                className="absolute -bottom-[2px] -top-[2px] w-[2px] rounded"
                style={{ left: `${POSISI_TARGET}%`, background: PALETTE.amber }}
                title={`Target ${targetLevelJabatan}%`}
              />
            </span>
            <span
              className={`w-[36px] shrink-0 text-right text-[10px] tabular-nums ${
                b.total ? "font-bold text-ink-900" : "font-semibold text-ink-700"
              }`}
            >
              {b.label}
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail jabatan <ArrowRight size={11} />
      </button>
    </div>
  );
}
