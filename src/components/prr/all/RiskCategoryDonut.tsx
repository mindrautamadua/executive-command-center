"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { SectionHead } from "@/components/hc/SectionHead";
import { CATEGORICAL, CHART_TOOLTIP_STYLE } from "@/lib/chart-palette";
import { allRisks, riskByCategory } from "@/lib/prr-registry";

export function RiskCategoryDonut() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "80ms" } as React.CSSProperties}
    >
      <SectionHead title="Risk by Category" />

      <div className="mt-1 flex min-h-0 flex-1 items-center gap-2">
        <div className="relative min-h-0 w-[46%] flex-1 self-stretch">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskByCategory}
                dataKey="count"
                nameKey="category"
                innerRadius="58%"
                outerRadius="88%"
                paddingAngle={1.5}
                stroke="none"
                isAnimationActive={false}
              >
                {riskByCategory.map((c, i) => (
                  <Cell key={c.category} fill={CATEGORICAL[i % CATEGORICAL.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number, name: string) => [`${v} risiko`, name]}
                contentStyle={CHART_TOOLTIP_STYLE}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[22px] font-extrabold leading-none text-ink-900">
              {allRisks.length}
            </span>
            <span className="mt-[2px] text-[8.5px] font-semibold text-ink-400">Total</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
          {riskByCategory.map((c, i) => (
            <div key={c.category} className="flex items-center gap-1.5">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ background: CATEGORICAL[i % CATEGORICAL.length] }}
              />
              <span className="min-w-0 flex-1 truncate text-[9px] text-ink-700">{c.category}</span>
              <span className="shrink-0 text-[9px] font-bold text-ink-900">{c.count}</span>
              <span className="shrink-0 text-[8.5px] text-ink-400">
                ({c.share.toFixed(1).replace(".", ",")}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
