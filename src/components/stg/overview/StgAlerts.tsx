import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { stgAlerts } from "@/lib/stg-data";
import { SectionHead } from "@/components/hc/SectionHead";

const TONE = {
  red: {
    Icon: AlertCircle,
    wrap: "border-[#f6d5d5] bg-[#fdf1f1]",
    icon: "bg-[#ef4444] text-white",
  },
  amber: {
    Icon: AlertTriangle,
    wrap: "border-[#f3e3c3] bg-[#fdf8ec]",
    icon: "bg-[#f5a524] text-white",
  },
  blue: {
    Icon: Info,
    wrap: "border-[#d3e3f6] bg-[#f1f7fd]",
    icon: "bg-[#2f6fe4] text-white",
  },
} as const;

/** Peringatan eksekusi strategi yang perlu perhatian Direksi. */
export function StgAlerts() {
  return (
    <div
      className="card anim-rise px-4 pb-3.5 pt-3"
      style={{ "--d": "200ms" } as React.CSSProperties}
    >
      <SectionHead title="Alerts & Notifications" action="Lihat Semua" />

      <div className="mt-2.5 flex flex-col gap-2">
        {stgAlerts.map((a) => {
          const t = TONE[a.tone];
          const Icon = t.Icon;
          return (
            <div key={a.title} className={`rounded-xl border px-3 pb-2.5 pt-2.5 ${t.wrap}`}>
              <div className="flex items-center gap-1.5">
                <span
                  className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full ${t.icon}`}
                >
                  <Icon size={10} strokeWidth={2.2} />
                </span>
                <span className="truncate text-[9.5px] font-bold text-ink-900" title={a.title}>
                  {a.title}
                </span>
              </div>
              <p className="mt-1.5 text-[8.5px] leading-[1.45] text-ink-500">{a.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
