import { ChevronDown, ChevronRight } from "lucide-react";
import { rekrutmenAtas, rekrutmenBawah } from "@/lib/sdm-data";
import { Delta } from "../ui/Delta";

export function Rekrutmen() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-3 pb-2.5 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-1">
        <div>
          <h3 className="card-title-navy whitespace-nowrap">REKRUTMEN</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">Ringkasan Rekrutmen</p>
        </div>
        <button className="select-chip-sm">
          YTD 2026 <ChevronDown size={10} />
        </button>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {rekrutmenAtas.map((m) => (
          <div key={m.label}>
            <div className="text-[9px] text-ink-500">{m.label}</div>
            <div className="mt-[3px] whitespace-nowrap text-[17px] font-extrabold leading-none text-ink-900">
              {m.value}
            </div>
            <Delta
              value={m.delta}
              trend={m.trend}
              tone={"deltaTone" in m ? m.deltaTone : undefined}
              size={9}
              className="mt-1.5"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        {rekrutmenBawah.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[#eef2f6] bg-[#f9fbfc] px-2.5 py-2"
          >
            <div className="text-[9px] leading-[1.25] text-ink-500">{m.label}</div>
            <div className="mt-[3px] whitespace-nowrap text-[15px] font-extrabold leading-none text-ink-900">
              {m.value}
            </div>
            {m.delta ? (
              <Delta value={m.delta} trend={m.trend ?? "up"} size={9} className="mt-1.5" />
            ) : (
              <div className="mt-1.5 text-[10px] font-bold text-ink-700">{m.sub}</div>
            )}
          </div>
        ))}
      </div>

      <button className="link-more mt-2 flex cursor-pointer items-center gap-0.5">
        Lihat pipeline rekrutmen <ChevronRight size={12} />
      </button>
    </div>
  );
}
