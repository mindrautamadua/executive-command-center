"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { driversIndex } from "@/lib/produktivitas-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE, SEMANTIC } from "@/lib/chart-palette";
import { ScopeNote } from "../ui/ScopeNote";

const koma = (v: number) => v.toFixed(1).replace(".", ",");

/** Susun waterfall: batang tak terlihat (offset) + batang nilai. */
let cum = 0;
const data = driversIndex.map((d) => {
  if (d.kind === "base" || d.kind === "total") {
    cum = d.value ?? 0;
    return { name: d.name, offset: 0, bar: d.value ?? 0, kind: d.kind, label: `${d.value}` };
  }
  const delta = d.delta ?? 0;
  const start = cum;
  cum += delta;
  return {
    name: d.name,
    offset: Math.min(start, cum),
    bar: Math.abs(delta),
    kind: d.kind,
    label: `${delta > 0 ? "+" : "-"}${koma(Math.abs(delta))}`,
  };
});

const FILL: Record<string, string> = {
  base: PALETTE.slate,
  up: SEMANTIC.good,
  down: SEMANTIC.bad,
  total: PALETTE.blue,
};

function WrapTick({ x, y, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  const words = (payload?.value ?? "").split(" ");
  const lines: string[] = [];
  for (const w of words) {
    const last = lines[lines.length - 1];
    if (last && (last + " " + w).length <= 12) lines[lines.length - 1] = `${last} ${w}`;
    else lines.push(w);
  }
  return (
    <text x={x} y={y} textAnchor="middle" fill={CHART_AXIS.tick} fontSize={8}>
      {lines.map((l, i) => (
        <tspan key={l} x={x} dy={i === 0 ? 10 : 9}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

export function DriversProduktivitas() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2 pt-3"
      style={{ "--d": "360ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy flex min-w-0 items-center gap-1.5">
        <span>6. Drivers of Productivity (YTD)</span>
        <ScopeNote />
      </h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">
        Faktor Pendorong Perubahan Productivity Index
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 4, bottom: 18, left: -22 }} barGap={0}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={<WrapTick />}
              interval={0}
            />
            <YAxis
              domain={[90, 120]}
              ticks={[90, 95, 100, 105, 110, 115, 120]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
            />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              cursor={{ fill: "var(--surface-2)" }}
              formatter={(v: number, name: string, item) =>
                name === "bar" ? [item.payload.label, "Kontribusi"] : [null, null]
              }
            />
            <Bar dataKey="offset" stackId="wf" fill="transparent" isAnimationActive={false} />
            <Bar dataKey="bar" stackId="wf" radius={[3, 3, 0, 0]} maxBarSize={34}>
              {data.map((d) => (
                <Cell key={d.name} fill={FILL[d.kind]} />
              ))}
              <LabelList
                dataKey="label"
                position="top"
                offset={5}
                style={{ fontSize: 9, fontWeight: 700, fill: "var(--text-2)" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
