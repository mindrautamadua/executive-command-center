import { MapPin, Wallet } from "lucide-react";
import { refineryPipeline } from "@/lib/hilir-stok-margin-data";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";
import { SectionHead } from "../../hc/SectionHead";

const STATUS_TONE: Record<string, BadgeTone> = {
  "On Track": "good",
  Delayed: "bad",
  Kajian: "neutral",
};

const barColor = (pct: number) =>
  pct >= 50 ? "bg-ptpn-green" : pct >= 25 ? "bg-[#3b7ded]" : "bg-[#94a3b8]";

/** Pipeline proyek hilirisasi: progress, capex & target COD. */
export function RefineryPipeline() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Pipeline Refinery & Hilirisasi" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Progress Proyek Kapasitas Hilir · total capex pipeline Rp 5,7 T
      </p>

      <div className="mt-2 grid min-h-0 flex-1 grid-cols-4 gap-3">
        {refineryPipeline.map((p) => (
          <div
            key={p.proyek}
            className="flex min-w-0 flex-col rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2"
          >
            <div className="flex items-start justify-between gap-1.5">
              <span className="min-w-0 text-[9.5px] font-extrabold leading-[1.3] text-ink-900">
                {p.proyek}
              </span>
              <ToneBadge label={p.status} tone={STATUS_TONE[p.status]} />
            </div>
            <div className="mt-1 flex items-center gap-2.5 text-[8.5px] text-ink-500">
              <span className="flex items-center gap-1">
                <MapPin size={9} className="shrink-0 text-ink-400" /> {p.lokasi}
              </span>
              <span className="flex items-center gap-1">
                <Wallet size={9} className="shrink-0 text-ink-400" /> {p.capex}
              </span>
            </div>
            <div className="mt-auto pt-2">
              <div className="flex items-center justify-between text-[8px] font-semibold text-ink-500">
                <span>Progress</span>
                <span className="font-bold text-ink-700">{p.progressPct}%</span>
              </div>
              <div className="mt-1 h-[6px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className={`block h-full rounded-full ${barColor(p.progressPct)}`}
                  style={{ width: `${p.progressPct}%` }}
                />
              </div>
              <div className="mt-1.5 text-[8.5px] text-ink-500">
                Target COD <span className="font-bold text-ink-900">{p.cod}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
