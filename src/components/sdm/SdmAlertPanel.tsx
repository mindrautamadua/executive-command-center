import { AlertTriangle, TriangleAlert, Lightbulb, ChevronRight } from "lucide-react";
import { sdmAlerts } from "@/lib/sdm-data";

/** Chip memakai kelas tone (globals.css) agar aman dark mode. */
const TONE = {
  danger: { chip: "tone-red", title: "text-[#dc2626]", Icon: AlertTriangle },
  warning: { chip: "tone-amber", title: "text-[#d97706]", Icon: TriangleAlert },
  info: { chip: "tone-blue", title: "text-[#2f6fe4]", Icon: Lightbulb },
} as const;

export function SdmAlertPanel() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "660ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <h3 className="card-title-navy">ALERT &amp; NOTIFIKASI</h3>
        <button className="link-more cursor-pointer">Lihat semua</button>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {sdmAlerts.map((a, i) => {
          const t = TONE[a.tone];
          return (
            <div
              key={a.title}
              className={`flex gap-2.5 py-[7px] ${i !== 0 ? "border-t border-[#f2f5f8]" : ""}`}
            >
              <span
                className={`${t.chip} mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md`}
              >
                <t.Icon size={12} strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[10px] font-bold ${t.title}`}>{a.title}</span>
                  <span className="shrink-0 text-[9px] text-ink-400">{a.time}</span>
                </div>
                <p className="mt-[2px] text-[9px] leading-[1.35] text-ink-500">{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat semua notifikasi <ChevronRight size={12} />
      </button>
    </div>
  );
}
