"use client";

import { ISLANDS, MARKERS } from "@/lib/indonesia";
import { mapLegend } from "@/lib/data";

export function IndonesiaMap() {
  return (
    <div className="card relative flex h-full flex-col overflow-hidden">
      {/* legend */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-center gap-7 pt-3">
        {mapLegend.map((l) => (
          <div key={l.label} className="text-center leading-none">
            <div className="text-[9px] font-semibold text-ink-500">{l.label}</div>
            <div className="mt-1.5 flex items-center justify-center gap-1.5">
              <span
                className="h-[7px] w-[7px] rounded-full"
                style={{ background: l.color }}
              />
              <span className="text-[15px] font-extrabold text-ink-900">
                {l.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* map stage */}
      <div className="relative flex-1">
        <svg
          viewBox="0 0 1000 560"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="mp-fill"
              gradientUnits="userSpaceOnUse"
              x1="80"
              y1="0"
              x2="620"
              y2="376"
            >
              <stop offset="0%" stopColor="#9ceb8f" />
              <stop offset="45%" stopColor="#45c57a" />
              <stop offset="100%" stopColor="#199058" />
            </linearGradient>
            <linearGradient id="mp-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bf5c8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2fd48a" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="mp-core" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#eafffb" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#7fe3ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3fb6e8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mp-ray" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bff3ff" stopOpacity="0" />
              <stop offset="55%" stopColor="#8fe6ff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#5fd8ff" stopOpacity="0.6" />
            </linearGradient>
            <filter id="mp-blur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
            <filter id="mp-soft" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          <g transform="translate(0 66)">
            {/* light convergence rays from islands to the pedestal */}
            <g opacity="0.6">
              {MARKERS.filter((_, i) => i % 2 === 0).map((m, i) => (
                <path
                  key={i}
                  d={`M${m.x - 9} ${m.y} L${m.x + 9} ${m.y} L${508} 388 L${492} 388 Z`}
                  fill="url(#mp-ray)"
                />
              ))}
            </g>

            {/* soft glow behind islands */}
            <g filter="url(#mp-blur)" opacity="0.8">
              {ISLANDS.map((is) => (
                <path key={`g-${is.id}`} d={is.d} fill="url(#mp-glow)" />
              ))}
            </g>

            {/* islands */}
            <g>
              {ISLANDS.map((is) => (
                <path
                  key={is.id}
                  d={is.d}
                  fill="url(#mp-fill)"
                  stroke="#d6fbe2"
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                  strokeLinejoin="round"
                />
              ))}
            </g>

            {/* facility markers */}
            <g>
              {MARKERS.map((m, i) => (
                <g key={i}>
                  <circle cx={m.x} cy={m.y} r="13" fill={m.c} opacity="0.25" filter="url(#mp-soft)" />
                  <circle cx={m.x} cy={m.y} r="5" fill={m.c} />
                  <circle cx={m.x} cy={m.y} r="2" fill="#ffffff" opacity="0.95" />
                </g>
              ))}
            </g>

            {/* pedestal / ripple rings */}
            <g transform="translate(500 388)">
              <ellipse rx="260" ry="52" fill="url(#mp-core)" opacity="0.75" />
              {[0, 1, 2, 3].map((i) => (
                <ellipse
                  key={i}
                  rx={72 + i * 58}
                  ry={13 + i * 11}
                  fill="none"
                  stroke="#5fd8ff"
                  strokeWidth="1.4"
                  strokeOpacity={0.55 - i * 0.11}
                />
              ))}
              <ellipse rx="36" ry="9" fill="#ddfcff" opacity="0.9" filter="url(#mp-soft)" />
            </g>
          </g>
        </svg>

        {/* animated ripple */}
        <div className="pointer-events-none absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 block h-[46px] w-[170px] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-[50%] border border-[#5fd8ff]/50"
              style={{ animationDelay: `${i * 1.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
