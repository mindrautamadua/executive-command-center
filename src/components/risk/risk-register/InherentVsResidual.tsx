import { inherentVsResidual } from "@/lib/risk-data";
import { PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

/** Skala 0–25 (skor matriks 5×5) dipetakan ke lebar track. */
const pos = (score: number) => (score / 25) * 100;

/**
 * Dumbbell inherent → residual untuk 15 risiko teratas: jarak antar titik
 * menunjukkan seberapa besar kontrol menurunkan skor.
 */
export function InherentVsResidual() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <SectionHead title="Inherent vs Residual — Top 15" />
          <p className="mt-[3px] text-[9px] text-ink-500">
            Efektivitas Kontrol: Selisih Skor Sebelum &amp; Sesudah Mitigasi
          </p>
        </div>
        <div className="mt-[2px] flex shrink-0 items-center gap-3">
          <span className="flex items-center gap-1.5 text-[8.5px] text-ink-500">
            <span className="h-[8px] w-[8px] rounded-full" style={{ background: PALETTE.slate }} />
            Inherent
          </span>
          <span className="flex items-center gap-1.5 text-[8.5px] text-ink-500">
            <span className="h-[8px] w-[8px] rounded-full" style={{ background: PALETTE.red }} />
            Residual
          </span>
        </div>
      </div>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-y-1 overflow-y-auto pr-1">
        {inherentVsResidual.map((r) => {
          const left = pos(r.residual);
          const right = pos(r.inherent);
          return (
            <li
              key={r.name}
              className="grid shrink-0 grid-cols-[minmax(0,190px)_minmax(0,1fr)_46px] items-center gap-x-2"
            >
              <span className="min-w-0">
                <span className="block truncate text-[9px] font-bold leading-tight text-ink-900">
                  {r.name}
                </span>
                <span className="block truncate text-[7.5px] leading-tight text-ink-500">
                  {r.category}
                </span>
              </span>

              <span className="relative block h-[14px]">
                <span className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#eef2f6]" />
                <span
                  className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full"
                  style={{
                    left: `${left}%`,
                    width: `${Math.max(right - left, 0)}%`,
                    background: "#cbd5e1",
                  }}
                />
                <span
                  className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${right}%`, background: PALETTE.slate }}
                  title={`Inherent ${r.inherent}`}
                />
                <span
                  className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${left}%`, background: PALETTE.red }}
                  title={`Residual ${r.residual}`}
                />
              </span>

              <span className="text-right text-[8.5px] font-extrabold text-ink-900">
                {r.inherent}
                <span className="text-ink-400"> → </span>
                {r.residual}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-1 flex items-center justify-between text-[7.5px] font-semibold text-ink-400">
        <span>Skor 0</span>
        <span>Skala matriks 5×5 (likelihood × impact)</span>
        <span>25</span>
      </div>
    </div>
  );
}
