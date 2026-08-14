import { ChevronDown, ChevronRight } from "lucide-react";
import { posisiKritis, RISK_STYLE } from "@/lib/succession-data";
import { SEMANTIC } from "@/lib/chart-palette";

/** Skala bar bench strength (nilai maksimum tampilan). */
const BENCH_MAX = 2;

export function PosisiKritisTabel() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Posisi Kritis dengan Risiko Kekosongan</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Top 10 Posisi <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2 min-h-0 flex-1">
        {/* leading-none: tanpa ini tiap <tr> mewarisi line-height 24px dan baris jadi tinggi */}
        <table className="w-full table-fixed border-collapse leading-none">
          <thead>
            <tr className="border-b border-[#eef2f6] text-[9px] font-semibold text-ink-500">
              <th className="w-[30%] pb-1.5 text-left">Posisi Kritis</th>
              <th className="w-[27%] pb-1.5 text-left">Unit Organisasi</th>
              <th className="w-[13%] pb-1.5 text-left">Risk Level</th>
              <th className="w-[20%] pb-1.5 text-right">Bench Strength</th>
              <th className="w-[10%] pb-1.5 text-right">Kandidat Siap</th>
            </tr>
          </thead>
          <tbody>
            {posisiKritis.map((p, i) => {
              const kosongKritis = p.kandidat === 0 && p.risk === "Tinggi";
              return (
                <tr
                  key={p.posisi + p.unit}
                  className="h-[19px] border-b border-[#f4f7fa] transition-colors last:border-0 hover:bg-[#f7f9fb]"
                >
                  <td className="truncate py-0 pr-1 text-[9px] font-semibold leading-none text-ink-900">
                    <span className="flex items-center gap-1.5">
                      {kosongKritis && (
                        <span
                          className="animate-pulseDot h-[6px] w-[6px] shrink-0 rounded-full bg-[#ef4444]"
                          title="Tanpa kandidat siap & risiko tinggi"
                        />
                      )}
                      <span className="truncate">{p.posisi}</span>
                    </span>
                  </td>
                  <td className="truncate py-0 pr-1 text-[9px] leading-none text-ink-500">
                    {p.unit}
                  </td>
                  <td className="py-0">
                    <span
                      className={`inline-flex items-center rounded px-1.5 py-[1.5px] text-[9px] font-semibold leading-none ${RISK_STYLE[p.risk]}`}
                    >
                      {p.risk}
                    </span>
                  </td>
                  <td className="py-0 text-right">
                    {/* bar mini vs target 1,0 (penanda di tengah skala 0-2) */}
                    <span className="inline-flex items-center justify-end gap-1.5">
                      <span className="relative h-[5px] w-[44px] overflow-hidden rounded-full bg-[#f1f5f8]">
                        <span
                          className="anim-grow-x absolute inset-y-0 left-0 rounded-full"
                          style={
                            {
                              width: `${(p.benchVal / BENCH_MAX) * 100}%`,
                              background:
                                p.benchVal < 1 ? SEMANTIC.bad : SEMANTIC.good,
                              "--d": `${480 + i * 40}ms`,
                            } as React.CSSProperties
                          }
                        />
                        <span className="absolute inset-y-0 left-1/2 w-[1.5px] bg-[#c3ccd8]" />
                      </span>
                      <span className="w-[16px] text-[9px] leading-none tabular-nums text-ink-700">
                        {p.bench}
                      </span>
                    </span>
                  </td>
                  <td className="py-0 text-right text-[9px] font-semibold leading-none tabular-nums text-ink-900">
                    {p.kandidat}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat semua posisi kritis <ChevronRight size={12} />
      </button>
    </div>
  );
}
