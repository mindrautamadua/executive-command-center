import { ArrowRight } from "lucide-react";
import { elemenKritis } from "@/lib/data-analytics";
import { SEMANTIC } from "@/lib/chart-palette";

/** Elemen kritis dituntut lebih ketat: hijau ≥98, amber 95-98, merah <95. */
const warnaElemen = (pct: number) => {
  if (pct >= 98) return SEMANTIC.good;
  if (pct >= 95) return SEMANTIC.warn;
  return SEMANTIC.bad;
};

/**
 * Cakupan critical data elements — tidak semua field sama penting:
 * Employee ID kosong jauh lebih berbahaya daripada field opsional kosong.
 */
export function ElemenKritis() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "600ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Cakupan Elemen Data Kritis</h3>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {elemenKritis.map((e, i) => (
          <div key={e.name} className="flex items-center gap-2">
            <span className="w-[104px] shrink-0 whitespace-nowrap text-[9.5px] text-ink-700">
              {e.name}
            </span>
            <div className="relative h-[7px] flex-1 rounded-full bg-[#eef2f6]">
              <div
                className="anim-grow-x h-full rounded-full"
                style={
                  {
                    width: `${e.pct}%`,
                    background: warnaElemen(e.pct),
                    "--d": `${i * 50}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
            <span className="w-[38px] shrink-0 text-right text-[9.5px] font-semibold tabular-nums text-ink-900">
              {e.pct.toFixed(1).replace(".", ",")}%
            </span>
          </div>
        ))}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua elemen <ArrowRight size={11} />
      </button>
    </div>
  );
}
