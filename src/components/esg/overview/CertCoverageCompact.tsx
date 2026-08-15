import { certCoverageCompact } from "@/lib/esg-data";
import { SectionHead } from "@/components/hc/SectionHead";

const pct = (v: number) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`;

export function CertCoverageCompact() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Cakupan Sertifikasi per Subholding" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        % Areal Inti Tersertifikasi · ISPO grup 88,2% · RSPO grup 36,4%
      </p>

      <div className="mt-3 flex flex-col gap-3">
        {certCoverageCompact.map((r) => (
          <div key={r.subholding}>
            <div className="flex items-center justify-between">
              <span className="text-[9.5px] font-bold text-ink-900">{r.subholding}</span>
              <span className="text-[8.5px] font-semibold text-ink-500">
                ISPO {pct(r.ispoPct)} · RSPO {pct(r.rspoPct)}
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="w-[46px] shrink-0 text-[8px] font-semibold text-ink-400">ISPO</span>
              <div className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <div
                  className="h-full rounded-full bg-ptpn-green"
                  style={{ width: `${r.ispoPct}%` }}
                />
              </div>
            </div>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="w-[46px] shrink-0 text-[8px] font-semibold text-ink-400">RSPO</span>
              <div className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <div
                  className="h-full rounded-full bg-[#3b7ded]"
                  style={{ width: `${r.rspoPct}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-auto pt-2 text-[8px] leading-snug text-ink-400">
        SupportingCo tertinggal di kedua skema (ISPO 72,4% · RSPO 8,2%) — fokus akselerasi audit
        berikutnya.
      </p>
    </div>
  );
}
