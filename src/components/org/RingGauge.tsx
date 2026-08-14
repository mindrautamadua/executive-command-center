"use client";

import { useEffect, useState } from "react";

export function RingGauge({
  pct,
  color,
  size = 34,
  label,
  animate = false,
}: {
  pct: number;
  color: string;
  size?: number;
  label?: string;
  /** sapuan busur dianimasikan saat mount */
  animate?: boolean;
}) {
  const r = (size - 4) / 2;
  const c = 2 * Math.PI * r;
  const [sweep, setSweep] = useState(animate ? 0 : pct);

  useEffect(() => {
    if (!animate) {
      setSweep(pct);
      return;
    }
    const raf = requestAnimationFrame(() => setSweep(pct));
    return () => cancelAnimationFrame(raf);
  }, [animate, pct]);

  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--surface-3)"
          strokeWidth={3}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={`${(c * sweep) / 100} ${c}`}
          style={{ transition: "stroke-dasharray 0.9s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
        style={{ color }}
      >
        {label ?? `${pct.toString().replace(".", ",")}%`}
      </span>
    </span>
  );
}
