import type { ReactNode } from "react";
import { CountUp } from "./CountUp";
import { Delta } from "./Delta";
import { Sparkline } from "./Sparkline";

export type ChipTone =
  | "green"
  | "blue"
  | "teal"
  | "amber"
  | "red"
  | "purple"
  | "pink"
  | "slate";

/**
 * Anatomi KPI standar modul SDM:
 * icon chip + label → nilai (count-up) + delta → pembanding → sparkline.
 * Slot `chart` menggantikan sparkline bila KPI memakai ring/gauge mini.
 */
export function KpiCard({
  icon,
  tone = "green",
  label,
  value,
  delta,
  compare,
  spark,
  chart,
  delay = 0,
  className = "",
}: {
  icon?: ReactNode;
  tone?: ChipTone;
  label: string;
  value: string;
  delta?: { value: string; trend: "up" | "down"; tone?: "good" | "bad" };
  compare?: string;
  spark?: { data: number[]; color: string };
  chart?: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`card anim-rise flex flex-col px-3.5 pb-2.5 pt-3 ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      <div className="flex items-center gap-2">
        {icon && (
          <span
            className={`tone-${tone} flex h-6 w-6 shrink-0 items-center justify-center rounded-md`}
          >
            {icon}
          </span>
        )}
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.05em] text-ink-500">
          {label}
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <CountUp value={value} className="text-[20px] font-bold leading-none text-ink-900" />
        {delta && <Delta value={delta.value} trend={delta.trend} tone={delta.tone} />}
      </div>
      {compare && (
        <span className="mt-1 truncate text-[9.5px] font-medium text-ink-400">{compare}</span>
      )}
      <div className="mt-auto pt-1.5">
        {chart ??
          (spark && (
            <Sparkline data={spark.data} color={spark.color} height={26} animate />
          ))}
      </div>
    </div>
  );
}
