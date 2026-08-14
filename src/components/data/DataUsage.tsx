import { ArrowRight } from "lucide-react";
import { dataUsage } from "@/lib/data-analytics";
import { Delta } from "../ui/Delta";
import { Sparkline } from "../ui/Sparkline";

export function DataUsage() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "360ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Data Usage &amp; Analytics</h3>

      <div className="mt-2 grid min-h-0 flex-1 grid-cols-4 gap-3">
        {dataUsage.map((u) => (
          <div key={u.label} className="flex flex-col">
            <div className="text-[9.5px] text-ink-500">{u.label}</div>
            <div className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[18px] font-extrabold leading-none text-ink-900">
                {u.value}
              </span>
              <Delta value={u.delta} trend={u.trend} size={9} />
            </div>
            <div className="mt-[4px] text-[9px] text-ink-400">{u.compare}</div>

            <div className="mt-auto">
              <Sparkline data={u.series} color={u.color} height={44} animate endDot />
            </div>
          </div>
        ))}
      </div>

      <button className="link-more mt-2 flex items-center gap-1">
        Lihat analitik penggunaan <ArrowRight size={11} />
      </button>
    </div>
  );
}
