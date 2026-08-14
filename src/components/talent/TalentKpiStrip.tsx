"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ShieldAlert, Star, Target, UserRoundCheck, Users } from "lucide-react";
import { talentKpi, diversityTalenta } from "@/lib/talent-data";
import { CHART_TOOLTIP_STYLE, GENDER } from "@/lib/chart-palette";
import { KpiCard } from "../ui/KpiCard";

const ICONS = [Users, UserRoundCheck, Star, Target, ShieldAlert];

const genderData = [
  { name: "Laki-laki", value: diversityTalenta.lakiLaki, color: GENDER.lakiLaki },
  { name: "Perempuan", value: diversityTalenta.perempuan, color: GENDER.perempuan },
];

/** Pembungkus tipis: data KPI talent → anatomi KpiCard standar. */
export function TalentKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {talentKpi.map((k, i) => {
        const Icon = ICONS[i];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={13} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.value}
            delta={{ value: k.delta, trend: k.trend, tone: k.deltaTone }}
            compare={k.compare}
            spark={{ data: k.series, color: k.color }}
            delay={60 * i}
          />
        );
      })}

      {/* diversity — setengah donut gender */}
      <div
        className="card anim-rise flex flex-col px-3.5 pb-2.5 pt-3"
        style={{ "--d": `${60 * talentKpi.length}ms` } as React.CSSProperties}
      >
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.05em] text-ink-500">
          Diversity Talenta (Gender)
        </span>
        <div className="mt-2 flex items-baseline gap-1.5 whitespace-nowrap">
          <span className="text-[20px] font-bold leading-none text-ink-900">
            {diversityTalenta.value}
          </span>
          <span className="text-[10px] font-medium text-ink-500">
            {diversityTalenta.suffix}
          </span>
        </div>
        <span className="mt-1 truncate text-[9.5px] font-medium text-ink-400">
          {diversityTalenta.compare}
        </span>
        <div className="mt-auto flex items-end gap-2 pt-1">
          <div className="h-[32px] w-[64px] shrink-0">
            <ResponsiveContainer width="100%" height={32}>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={19}
                  outerRadius={29}
                  paddingAngle={1}
                  stroke="none"
                >
                  {genderData.map((g) => (
                    <Cell key={g.name} fill={g.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={CHART_TOOLTIP_STYLE}
                  formatter={(v: number, n: string) => [`${v}%`, n]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* legenda mini */}
          <div className="flex min-w-0 flex-col gap-[3px] pb-[2px]">
            {genderData.map((g) => (
              <span key={g.name} className="flex items-center gap-1 text-[9px] text-ink-500">
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ background: g.color }}
                />
                {g.name} {g.value}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
