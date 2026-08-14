"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { jamPerKaryawan, partisipasiGenerasi } from "@/lib/lnd-data";
import { PALETTE } from "@/lib/chart-palette";
import { CountUp } from "../ui/CountUp";

/** Ikon orang sederhana, warna mengikuti generasi. */
function PersonIcon({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 30" width={size} height={size * 1.23} aria-hidden>
      <circle cx="12" cy="6" r="5" fill={color} />
      <path
        d="M12 13c-4.4 0-7 2.6-7 6.4V30h3.2v-8.4h1.1V30h5.4v-8.4h1.1V30H19V19.4c0-3.8-2.6-6.4-7-6.4Z"
        fill={color}
      />
    </svg>
  );
}

/** Ring progres jam belajar / karyawan vs target tahunan, sweep saat mount. */
function TargetRing() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const size = 92;
  const sw = 9;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const frac = Math.min(1, jamPerKaryawan.value / jamPerKaryawan.target);
  return (
    <div className="flex shrink-0 flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#eef2f6"
            strokeWidth={sw}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={PALETTE.green}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={on ? c * (1 - frac) : c}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)" }}
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <CountUp
            value={jamPerKaryawan.label}
            className="text-[17px] font-extrabold leading-none text-ink-900"
          />
          <span className="mt-[2px] text-[9px] text-ink-500">Jam / Kry</span>
        </div>
      </div>
      <span className="mt-1 text-[9px] text-ink-400">{jamPerKaryawan.targetLabel}</span>
    </div>
  );
}

export function PartisipasiGenerasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "400ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Partisipasi Berdasarkan Generasi</h3>

      <div className="flex min-h-0 flex-1 items-center gap-4">
        <div className="min-w-0 flex-1">
          {/* bar bertumpuk 100% — porsi tiap generasi */}
          <div className="flex h-[16px] w-full overflow-hidden rounded-md">
            {partisipasiGenerasi.map((g, i) => (
              <span
                key={g.nama}
                title={`${g.nama} ${g.pct}`}
                className="anim-grow-x flex h-full items-center justify-center"
                style={
                  {
                    width: `${g.share}%`,
                    background: g.color,
                    "--d": `${100 * i}ms`,
                  } as React.CSSProperties
                }
              >
                {g.share >= 12 && (
                  <span className="text-[9px] font-bold text-white">{g.pct}</span>
                )}
              </span>
            ))}
          </div>

          {/* legend ikon per generasi */}
          <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {partisipasiGenerasi.map((g) => (
              <div key={g.nama} className="flex items-center gap-1.5">
                <PersonIcon color={g.color} size={11} />
                <span className="min-w-0 truncate text-[9px] leading-[1.2] text-ink-700">
                  <span className="font-semibold">{g.nama}</span>{" "}
                  <span className="text-ink-400">{g.rentang}</span>
                </span>
                <span className="ml-auto shrink-0 text-[9.5px] font-bold tabular-nums text-ink-900">
                  {g.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        <TargetRing />
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat analisis generasi <ArrowRight size={11} />
      </button>
    </div>
  );
}
