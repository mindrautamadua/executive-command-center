import { AlertTriangle } from "lucide-react";
import { tiRiskDonut, tiTopFlightRisk, tiRiskNote } from "@/lib/ti-data";
import { SectionHead } from "../hc/SectionHead";
import { DonutChart } from "../ui/DonutChart";

export function TalentRiskOverview() {
  return (
    <section className="card anim-rise flex flex-col p-3.5">
      <SectionHead no="4" title="Talent Risk Overview" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">Identifikasi Risiko Kehilangan Talenta</p>

      <div className="mt-2 flex flex-1 items-center gap-3">
        {/* donut + legend */}
        <div className="flex shrink-0 items-center gap-2.5">
          <DonutChart
            data={tiRiskDonut.map(({ name, value, color }) => ({ name, value, color }))}
            size={124}
            thickness={22}
            centerValue="186"
            centerCaption="Total"
          />
          <ul className="flex flex-col gap-2">
            {tiRiskDonut.map((d) => (
              <li key={d.name} className="flex items-start gap-1.5">
                <span
                  className="mt-[2px] h-[7px] w-[7px] shrink-0 rounded-[2px]"
                  style={{ background: d.color }}
                />
                <span className="text-[8.5px] leading-[1.3] text-ink-500">
                  <span className="font-bold text-ink-900">{d.name}</span>
                  <br />
                  {d.value} ({d.pctLabel})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* top 5 flight risk */}
        <div className="min-w-0 flex-1 border-l border-[#eef2f6] pl-3">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-bold text-ink-700">Top 5 Flight Risk (High)</span>
            <span className="text-[8px] font-semibold text-ink-400">Risk Score</span>
          </div>
          <ul className="mt-1.5 flex flex-col gap-[6px]">
            {tiTopFlightRisk.map((r, i) => (
              <li key={r.nama} className="flex items-center gap-2">
                <span className="w-3 shrink-0 text-[8.5px] font-semibold text-ink-400">
                  {i + 1}.
                </span>
                <span className="min-w-0 flex-1 leading-[1.2]">
                  <span className="block truncate text-[9px] font-bold text-ink-900">{r.nama}</span>
                  <span className="block truncate text-[8px] text-ink-400">{r.jabatan}</span>
                </span>
                <span className="shrink-0 rounded-md bg-[#fdecec] px-1.5 py-[2px] text-[9px] font-extrabold text-[#ef4444]">
                  {r.score}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-[#f5e5c8] bg-[#fdf7ea] px-2.5 py-[7px]">
        <AlertTriangle size={12} className="shrink-0 text-[#d98b06]" />
        <span className="text-[8.5px] text-ink-700">
          <span className="font-bold text-[#d98b06]">Perhatian:</span> {tiRiskNote}
        </span>
      </div>
    </section>
  );
}
