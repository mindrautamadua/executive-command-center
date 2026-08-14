"use client";

import { useState } from "react";

const QUOTES = [
  "SDM unggul, kinerja optimal, PTPN maju berkelanjutan.",
  "Talenta terbaik tumbuh dari budaya kerja yang sehat.",
  "Investasi pada manusia adalah investasi jangka panjang.",
  "Kolaborasi lintas regional mempercepat transformasi.",
];

function TeaGarden() {
  return (
    <svg viewBox="0 0 300 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="q-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fb0dd" />
          <stop offset="40%" stopColor="#b6d2e6" />
          <stop offset="78%" stopColor="#dfe9ea" />
          <stop offset="100%" stopColor="#eef1e6" />
        </linearGradient>
        <linearGradient id="q-r1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9db3b4" />
          <stop offset="100%" stopColor="#7d9a92" />
        </linearGradient>
        <linearGradient id="q-r2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7e9c86" />
          <stop offset="100%" stopColor="#5d8168" />
        </linearGradient>
        <linearGradient id="q-r3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6d9a5e" />
          <stop offset="100%" stopColor="#47764a" />
        </linearGradient>
        <linearGradient id="q-near" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#74ab5c" />
          <stop offset="55%" stopColor="#4d8544" />
          <stop offset="100%" stopColor="#2b5e33" />
        </linearGradient>
        <linearGradient id="q-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04170c" stopOpacity="0" />
          <stop offset="52%" stopColor="#06230f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#04180b" stopOpacity="0.85" />
        </linearGradient>
        <filter id="q-haze" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
        <filter id="q-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
      </defs>

      <rect width="300" height="250" fill="url(#q-sky)" />

      {/* awan tipis */}
      <g filter="url(#q-haze)" opacity="0.75">
        <ellipse cx="52" cy="30" rx="52" ry="8" fill="#ffffff" />
        <ellipse cx="188" cy="20" rx="64" ry="7" fill="#ffffff" />
        <ellipse cx="262" cy="44" rx="44" ry="6" fill="#ffffff" opacity="0.7" />
      </g>

      {/* punggung bukit berlapis, makin dekat makin tajam */}
      <g filter="url(#q-haze)">
        <path d="M0 104 C 40 76, 74 92, 112 72 C 152 51, 196 86, 236 70 C 268 57, 288 74, 300 68 V140 H0Z" fill="url(#q-r1)" opacity="0.85" />
      </g>
      <g filter="url(#q-soft)">
        <path d="M0 128 C 44 104, 84 124, 126 104 C 168 84, 210 122, 250 106 C 274 96, 290 110, 300 106 V168 H0Z" fill="url(#q-r2)" />
      </g>
      <path d="M0 152 C 48 130, 92 154, 140 132 C 186 111, 226 152, 264 136 C 282 128, 294 140, 300 136 V250 H0Z" fill="url(#q-r3)" />
      <path d="M0 186 C 54 162, 108 190, 162 168 C 214 147, 258 184, 300 168 V250 H0Z" fill="url(#q-near)" />

      {/* alur tanam teh mengikuti kontur */}
      <g>
        {Array.from({ length: 22 }).map((_, i) => (
          <path
            key={i}
            d={`M${-60 + i * 18} 250 C ${-14 + i * 18} 222, ${20 + i * 18} 206, ${66 + i * 18} 182`}
            stroke="#1f4f25"
            strokeOpacity="0.32"
            strokeWidth="4"
            fill="none"
          />
        ))}
        {Array.from({ length: 22 }).map((_, i) => (
          <path
            key={`hl-${i}`}
            d={`M${-68 + i * 18} 250 C ${-22 + i * 18} 222, ${12 + i * 18} 206, ${58 + i * 18} 182`}
            stroke="#a3ce85"
            strokeOpacity="0.22"
            strokeWidth="1.6"
            fill="none"
          />
        ))}
      </g>

      {/* rumpun pohon peneduh */}
      {[
        [36, 176, 7],
        [104, 168, 6],
        [186, 174, 8],
        [252, 166, 6],
      ].map(([cx, cy, r], i) => (
        <g key={i} opacity="0.85">
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.8} fill="#25562b" />
          <ellipse cx={cx - r * 0.4} cy={cy - r * 0.3} rx={r * 0.6} ry={r * 0.5} fill="#3a7a3c" />
        </g>
      ))}

      <rect y="60" width="300" height="190" fill="url(#q-shade)" />
    </svg>
  );
}

export function QuoteCard() {
  const [i, setI] = useState(0);

  return (
    <div
      className="card anim-rise relative flex h-full flex-col justify-end overflow-hidden"
      style={{ "--d": "720ms" } as React.CSSProperties}
    >
      <div className="absolute inset-0">
        <TeaGarden />
      </div>

      <div className="relative px-5 pb-7">
        <p className="text-[13px] font-bold italic leading-[1.45] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,.45)]">
          &ldquo;{QUOTES[i]}&rdquo;
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {QUOTES.map((_, n) => (
          <button
            key={n}
            onClick={() => setI(n)}
            aria-label={`Kutipan ${n + 1}`}
            className={`h-[5px] rounded-full transition-all ${
              n === i ? "w-[16px] bg-white" : "w-[5px] bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
