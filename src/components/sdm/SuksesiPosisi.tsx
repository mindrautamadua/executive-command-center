import { ChevronRight } from "lucide-react";
import { suksesi, RISK_STYLE } from "@/lib/sdm-data";
import { READINESS } from "@/lib/chart-palette";

const HORIZON = ["Ready Now", "Ready 1-2 Thn", "Ready 3+ Thn"];

const pct = (v: number, total: number) => Math.round((v / total) * 100);

export function SuksesiPosisi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "540ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">SUKSESI POSISI KRITIS</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Overview Succession Readiness</p>

      {/* legenda horizon kesiapan */}
      <div className="mt-2 flex items-center gap-3">
        {HORIZON.map((h, i) => (
          <span key={h} className="flex items-center gap-1 text-[9px] text-ink-500">
            <span
              className="h-[7px] w-[7px] rounded-[2px]"
              style={{ background: READINESS[i] }}
            />
            {h}
          </span>
        ))}
      </div>

      <table className="mt-2 w-full table-auto">
        <thead>
          <tr className="border-b border-[#eef2f6]">
            <th className="whitespace-nowrap px-1 pb-1.5 text-left text-[9px] font-semibold text-ink-500">
              Posisi Kritis
            </th>
            <th className="whitespace-nowrap px-1 pb-1.5 text-center text-[9px] font-semibold text-ink-500">
              Jumlah
            </th>
            <th className="whitespace-nowrap px-1 pb-1.5 text-left text-[9px] font-semibold text-ink-500">
              Kesiapan Suksesor
            </th>
            <th className="whitespace-nowrap px-1 pb-1.5 text-center text-[9px] font-semibold text-ink-500">
              Risk Level
            </th>
          </tr>
        </thead>
        <tbody>
          {suksesi.map((r, ri) => {
            const total = r.kesiapan.reduce((s, v) => s + v, 0);
            return (
              <tr
                key={r.posisi}
                className="border-b border-[#f4f7fa] transition-colors last:border-0 hover:bg-[#f7f9fb]"
              >
                <td className="whitespace-nowrap py-[11px] pr-2 text-left text-[10px] font-semibold text-ink-900">
                  {r.posisi}
                </td>
                <td className="px-1 text-center text-[10px] tabular-nums text-ink-700">
                  {r.jumlah}
                </td>
                <td className="px-1">
                  {/* bar kesiapan bertumpuk; rincian angka di tooltip hover */}
                  <div className="group relative w-full min-w-[150px]">
                    <div className="flex h-[11px] w-full overflow-hidden rounded-full bg-[#f1f5f8]">
                      {r.kesiapan.map((v, i) => (
                        <span
                          key={HORIZON[i]}
                          className="anim-grow-x h-full"
                          style={
                            {
                              width: `${(v / total) * 100}%`,
                              background: READINESS[i],
                              "--d": `${540 + ri * 90}ms`,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                    <div className="pointer-events-none absolute -top-1.5 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-[#e3e9ef] bg-white px-2 py-1 text-[9px] text-ink-700 shadow-cardHover group-hover:block">
                      {r.kesiapan.map((v, i) => (
                        <span key={HORIZON[i]} className="flex items-center gap-1.5">
                          <span
                            className="h-[6px] w-[6px] rounded-[2px]"
                            style={{ background: READINESS[i] }}
                          />
                          {HORIZON[i]}:{" "}
                          <strong className="font-semibold text-ink-900">
                            {v} ({pct(v, total)}%)
                          </strong>
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="px-1 text-center">
                  <span
                    className={`inline-block rounded-md px-2.5 py-[3px] text-[9px] font-semibold ${RISK_STYLE[r.risk]}`}
                  >
                    {r.risk}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="link-more mt-auto flex cursor-pointer items-center gap-0.5 pt-2">
        Lihat Succession Planning <ChevronRight size={12} />
      </button>
    </div>
  );
}
