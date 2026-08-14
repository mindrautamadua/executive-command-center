import { Download } from "lucide-react";
import { orgSummary } from "@/lib/org-data";
import { KpiCard } from "../ui/KpiCard";
import { RingGauge } from "./RingGauge";

export function RingkasanOrganisasi() {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="card-title-navy">Ringkasan Organisasi</h2>
        <button className="flex items-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white px-3 py-[6px] text-[10.5px] font-semibold text-ink-700 shadow-card transition-colors hover:bg-[#f7f9fb]">
          <Download size={13} className="text-ink-500" />
          Ekspor
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {orgSummary.map((k, i) => (
          <KpiCard
            key={k.label}
            label={k.label}
            value={k.value}
            delta={k.delta && k.trend ? { value: k.delta, trend: k.trend } : undefined}
            compare={k.compare}
            delay={i * 60}
            chart={
              k.gauge ? (
                <RingGauge pct={k.gauge.pct} color={k.gauge.color} size={40} animate />
              ) : k.badge ? (
                <span className="tone-green inline-block rounded-md px-2 py-[3px] text-[9px] font-semibold">
                  {k.badge}
                </span>
              ) : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
