import { Award, Target } from "lucide-react";
import { tiMobility, tiMobilityImpact } from "@/lib/ti-data";
import { SectionHead } from "../hc/SectionHead";

const IMPACT_ICONS = { target: Target, award: Award };

export function TalentMobilityOverview() {
  const max = Math.max(...tiMobility.map((m) => m.value));

  return (
    <section className="card anim-rise flex flex-col p-3.5" style={{ "--d": "60ms" } as React.CSSProperties}>
      <SectionHead title="Talent Mobility Overview" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">Mobilitas Talenta Internal</p>

      <div className="mt-3 flex flex-1 items-start gap-4">
        {/* jenis mobilitas */}
        <div className="min-w-0 flex-1">
          <div className="text-[8.5px] font-bold text-ink-700">Jenis Mobilitas (YTD)</div>
          <ul className="mt-2 flex flex-col gap-[9px]">
            {tiMobility.map((m) => (
              <li key={m.label} className="flex items-center gap-2">
                <span className="w-[92px] shrink-0 truncate text-[9px] font-semibold text-ink-700">
                  {m.label}
                </span>
                <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                  <span
                    className="anim-grow-x block h-full rounded-full bg-ptpn-green"
                    style={{ width: `${(m.value / max) * 100}%` }}
                  />
                </span>
                <span className="w-[58px] shrink-0 text-right text-[9px] font-bold text-ink-900">
                  {m.value} <span className="font-medium text-ink-400">({m.pct})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* dampak pada kinerja */}
        <div className="w-[210px] shrink-0">
          <div className="text-[8.5px] font-bold text-ink-700">Mobilitas Berdampak pada Kinerja</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {tiMobilityImpact.map((im) => {
              const Icon = IMPACT_ICONS[im.icon];
              return (
                <div
                  key={im.value}
                  className="flex flex-col items-center rounded-lg border border-[#e3efe6] bg-ptpn-greenLight px-2 py-2.5 text-center"
                >
                  <span className="flex items-center gap-1 text-[14px] font-extrabold leading-none text-ptpn-green">
                    <Icon size={13} strokeWidth={2} />
                    {im.value}
                  </span>
                  <span className="mt-1.5 text-[7.5px] leading-[1.35] text-ink-500">{im.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
