"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { payGapPerLevel, payGapRingkas, payGapWarna } from "@/lib/comp-data";
import { Delta } from "../ui/Delta";

const MAX = 65; // skala global (Rp juta) agar antar level sebanding

const jt = (v: number) => v.toLocaleString("id-ID", { maximumFractionDigits: 1 });

function GenderIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 28" width={16} height={19} aria-hidden>
      <circle cx="12" cy="6" r="4.6" fill={color} />
      <path
        d="M12 12.5c-4.1 0-6.6 2.4-6.6 6V28h3v-7.8h1V28h5.2v-7.8h1V28h3v-9.5c0-3.6-2.5-6-6.6-6Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Dumbbell per level: dua titik (laki-laki biru, perempuan pink)
 * dihubungkan bar gap — satu warna kanonik per gender di seluruh kartu.
 */
export function PayGapAnalisis() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const p = (v: number) => (v / MAX) * 100;

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "280ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Analisis Kesenjangan Gaji (Pay Gap)</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Rata-rata Gaji berdasarkan Gender</p>

      <div className="flex min-h-0 flex-1 gap-2.5">
        <div className="flex w-[104px] shrink-0 flex-col justify-center gap-2">
          <div className="rounded-lg border border-[#eef2f6] bg-[#f9fbfc] px-2.5 py-[7px]">
            <span className="flex items-center gap-1.5">
              <GenderIcon color={payGapWarna.lakiLaki} />
              <span className="text-[9px] text-ink-500">Laki-laki</span>
            </span>
            <div className="mt-[3px] whitespace-nowrap text-[13px] font-extrabold leading-none text-ink-900">
              {payGapRingkas.lakiLaki}
            </div>
          </div>

          <div className="rounded-lg border border-[#eef2f6] bg-[#f9fbfc] px-2.5 py-[7px]">
            <span className="flex items-center gap-1.5">
              <GenderIcon color={payGapWarna.perempuan} />
              <span className="text-[9px] text-ink-500">Perempuan</span>
            </span>
            <div className="mt-[3px] whitespace-nowrap text-[13px] font-extrabold leading-none text-ink-900">
              {payGapRingkas.perempuan}
            </div>
          </div>

          <div className="border-t border-[#f0f3f6] pt-1.5">
            <div className="text-[9px] text-ink-500">Pay Gap</div>
            <div className="mt-[2px] flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[17px] font-extrabold leading-none text-ink-900">
                {payGapRingkas.gap}
              </span>
              <Delta
                value={payGapRingkas.gapDelta}
                trend={payGapRingkas.gapTrend}
                tone="bad"
                size={9}
              />
            </div>
            <div className="mt-[2px] text-[9px] text-ink-400">{payGapRingkas.gapCompare}</div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-end gap-3">
            <span className="flex items-center gap-1 text-[9px] text-ink-500">
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ background: payGapWarna.lakiLaki }}
              />
              Laki-laki
            </span>
            <span className="flex items-center gap-1 text-[9px] text-ink-500">
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ background: payGapWarna.perempuan }}
              />
              Perempuan
            </span>
            <span className="text-[9px] text-ink-400">(Rp Juta)</span>
          </div>

          <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
            {payGapPerLevel.map((r) => (
              <div key={r.level} className="group relative flex items-center gap-2">
                <span className="w-[72px] shrink-0 truncate text-[9px] text-ink-700">
                  {r.level}
                </span>

                <span className="relative h-[14px] min-w-0 flex-1">
                  <span className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-[#f2f5f8]" />
                  {/* bar gap antara dua titik */}
                  <span
                    className="absolute top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#d7e0e8]"
                    style={{
                      left: on ? `${p(r.perempuan)}%` : "0%",
                      width: on ? `${p(r.lakiLaki) - p(r.perempuan)}%` : "0%",
                      transition: "left 0.9s cubic-bezier(0.22,1,0.36,1), width 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  <span
                    className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      boxShadow: "0 0 0 2px var(--surface)",
                      left: on ? `${p(r.perempuan)}%` : "0%",
                      background: payGapWarna.perempuan,
                      transition: "left 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  <span
                    className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      boxShadow: "0 0 0 2px var(--surface)",
                      left: on ? `${p(r.lakiLaki)}%` : "0%",
                      background: payGapWarna.lakiLaki,
                      transition: "left 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                </span>

                <span className="w-[34px] shrink-0 text-right text-[9px] font-bold tabular-nums text-ink-900">
                  {r.gap}
                </span>

                {/* tooltip gaji + headcount */}
                <div className="pointer-events-none absolute bottom-full right-0 z-20 mb-0.5 hidden whitespace-nowrap rounded-lg border border-[#e3e9ef] bg-white px-2.5 py-1.5 shadow-cardHover group-hover:block">
                  <div className="text-[9.5px] font-bold text-ink-900">{r.level}</div>
                  <div className="mt-[2px] text-[9px] text-ink-500">
                    Laki-laki{" "}
                    <span className="font-bold text-ink-900">Rp {jt(r.lakiLaki)} Jt</span> (
                    {r.headcountLaki.toLocaleString("id-ID")} kry) · Perempuan{" "}
                    <span className="font-bold text-ink-900">Rp {jt(r.perempuan)} Jt</span> (
                    {r.headcountPerempuan.toLocaleString("id-ID")} kry) · Gap{" "}
                    <span className="font-semibold text-ink-700">{r.gap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat analisis pay gap <ArrowRight size={11} />
      </button>
    </div>
  );
}
