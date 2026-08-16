"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { valueCreationTrend } from "@/lib/stg-data";
import { ceoValueDrivers, ceoValueSummary } from "@/lib/ceo-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

const rp = (v: number) =>
  `Rp ${v.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} T`;

/**
 * Value creation di dashboard utama: berapa nilai tercipta, dari mana
 * asalnya, dan di mana nilai bocor. Tren kumulatif memakai data yang sama
 * dengan /strategi-kinerja; dekomposisi driver/leakage dari ceo-data.
 */
export function CeoValueCreation() {
  const maxAbs = Math.max(...ceoValueDrivers.map((d) => Math.abs(d.rpT)));

  return (
    <div className="card flex h-full flex-col px-4 pb-3 pt-3">
      <SectionHead title="Value Creation" action="Lihat Detail" href="/strategi-kinerja/value-creation" />

      <div className="mt-1.5 flex items-baseline gap-2">
        <span className="text-[17px] font-extrabold leading-none text-ink-900">
          Rp {ceoValueSummary.ytdRpT.toLocaleString("id-ID", { minimumFractionDigits: 2 })} T
        </span>
        <span className="text-[9px] text-ink-500">
          {ceoValueSummary.pct}% dari target FY Rp{" "}
          {ceoValueSummary.targetFyRpT.toLocaleString("id-ID", { minimumFractionDigits: 1 })} T
        </span>
      </div>

      <div className="mt-1 h-[64px] w-full shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={valueCreationTrend} margin={{ top: 6, right: 4, bottom: 0, left: 4 }}>
            <defs>
              <linearGradient id="ceo-vc-real" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PALETTE.green} stopOpacity="0.24" />
                <stop offset="100%" stopColor={PALETTE.green} stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 7.5, fill: CHART_AXIS.tick }}
              interval={1}
            />
            <Tooltip contentStyle={CHART_TOOLTIP_STYLE} formatter={(v: number) => rp(v)} />
            <Area
              type="monotone"
              name="Jalur Target"
              dataKey="target"
              stroke={PALETTE.blue}
              strokeWidth={1.3}
              strokeDasharray="4 3"
              fill="none"
              dot={false}
            />
            <Area
              type="monotone"
              name="Realisasi"
              dataKey="realisasi"
              stroke={PALETTE.green}
              strokeWidth={1.8}
              fill="url(#ceo-vc-real)"
              dot={false}
              activeDot={{ r: 3 }}
              connectNulls={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* dari mana nilai datang, di mana nilai bocor */}
      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around gap-[5px]">
        {ceoValueDrivers.map((d) => {
          const leak = d.kind === "leakage";
          const color = leak ? "#ef4444" : "#22a45d";
          return (
            <div key={d.label} className="flex items-center gap-2">
              <span className="w-[128px] shrink-0 truncate text-[8.5px] text-ink-700" title={d.label}>
                {d.label}
              </span>
              <div className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(Math.abs(d.rpT) / maxAbs) * 100}%`,
                    background: color,
                    opacity: leak ? 0.85 : 1,
                  }}
                />
              </div>
              <span
                className="w-[52px] shrink-0 text-right text-[9px] font-bold tabular-nums"
                style={{ color }}
              >
                {d.rpT > 0 ? "+" : "−"}Rp {Math.abs(d.rpT).toLocaleString("id-ID", {
                  minimumFractionDigits: 2,
                })} T
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-1.5 truncate text-[8px] text-ink-400">
        Driver bruto − leakage = netto YTD; efisiensi biaya &amp; yield menyumbang 59% netto.
      </p>
    </div>
  );
}
