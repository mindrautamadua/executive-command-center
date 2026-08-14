"use client";

import { useEffect, useState } from "react";
import { statusHariIni, stempelRealtime, totalKaryawan } from "@/lib/absensi-data";
import { CountUp } from "../ui/CountUp";

/** Jam WIB berjalan — interval hanya jalan setelah mount (aman hidrasi). */
function JamWib() {
  const [jam, setJam] = useState("--:--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setJam(fmt.format(new Date()).replace(/\./g, ":"));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{jam} WIB</span>;
}

export function StatusHariIni() {
  return (
    <div
      className="anim-rise flex h-full flex-col gap-1.5"
      style={{ "--d": "360ms" } as React.CSSProperties}
    >
      <div className="card flex min-h-0 flex-1 flex-col px-4 pb-2.5 pt-3">
        <h3 className="card-title-navy">Status Kehadiran Hari Ini</h3>

        <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
          {statusHariIni.map((s) => (
            <div key={s.nama} className="flex items-center gap-2 whitespace-nowrap">
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: s.color }}
              />
              <span className="text-[9.5px] text-ink-700">{s.nama}</span>
              <CountUp
                value={s.jumlah}
                className="ml-auto text-[9.5px] tabular-nums text-ink-900"
              />
              <span className="w-[38px] text-right text-[9.5px] tabular-nums text-ink-400">
                {s.pct}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-1.5 flex items-center justify-between border-t border-[#f0f3f6] pt-2">
          <span className="text-[9.5px] font-semibold text-ink-700">Total Karyawan</span>
          <CountUp
            value={totalKaryawan.toLocaleString("id-ID")}
            className="text-[10px] font-bold tabular-nums text-ink-900"
          />
        </div>
      </div>

      <div className="tone-green flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-[6px]">
        <span
          className="animate-pulseDot h-[6px] w-[6px] shrink-0 rounded-full"
          style={{ background: "currentColor" }}
        />
        <span className="text-[9px] font-semibold">Real-time</span>
        <span className="ml-auto text-[9px] font-medium">
          {stempelRealtime} · <JamWib />
        </span>
      </div>
    </div>
  );
}
