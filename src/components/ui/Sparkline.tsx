"use client";

import { useId } from "react";

interface Props {
  data: number[];
  color: string;
  width?: number;
  height?: number;
  fill?: boolean;
  strokeWidth?: number;
  className?: string;
  /** false = garis patah (polyline), true = kurva halus */
  smooth?: boolean;
  /** Animasi draw-in garis saat mount. */
  animate?: boolean;
  /** Titik penanda di ujung akhir garis. */
  endDot?: boolean;
}

export function Sparkline({
  data,
  color,
  width = 160,
  height = 34,
  fill = true,
  strokeWidth = 1.6,
  className = "",
  smooth = true,
  animate = false,
  endDot = false,
}: Props) {
  const id = useId().replace(/[:]/g, "");
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 2;
  const stepX = (width - pad * 2) / (data.length - 1);

  const pts = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = height - pad - ((v - min) / span) * (height - pad * 2);
    return [x, y] as const;
  });

  // catmull-rom -> bezier for a smooth line
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  if (!smooth) {
    d += pts
      .slice(1)
      .map((p) => ` L ${p[0]} ${p[1]}`)
      .join("");
  }
  for (let i = 0; smooth && i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
  }

  const area = `${d} L ${pts[pts.length - 1][0]} ${height} L ${pts[0][0]} ${height} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      {fill && (
        <defs>
          <linearGradient id={`sg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      {fill && <path d={area} fill={`url(#sg-${id})`} className={animate ? "anim-fade" : ""} />}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={animate ? 1 : undefined}
        className={animate ? "anim-draw" : ""}
      />
      {endDot && (
        <circle
          cx={last[0]}
          cy={last[1]}
          r={strokeWidth + 0.8}
          fill={color}
          className={animate ? "anim-fade" : ""}
        />
      )}
    </svg>
  );
}
