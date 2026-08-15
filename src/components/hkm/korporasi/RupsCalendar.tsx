import { rupsCalendar, type HkmRupsRow } from "@/lib/hkm-data-detail";
import { SectionHead } from "@/components/hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const STATUS_TONE: Record<HkmRupsRow["status"], BadgeTone> = {
  Terselenggara: "good",
  Terjadwal: "info",
  "Perlu Penjadwalan": "warn",
};

const DOT: Record<HkmRupsRow["status"], string> = {
  Terselenggara: "bg-ptpn-green",
  Terjadwal: "bg-[#3b7ded]",
  "Perlu Penjadwalan": "bg-[#f5a524]",
};

const terselenggara = rupsCalendar.filter((r) => r.status === "Terselenggara").length;
const terjadwal = rupsCalendar.filter((r) => r.status === "Terjadwal").length;

/** Timeline RUPS tahunan & luar biasa beserta agendanya. */
export function RupsCalendar() {
  return (
    <div
      className="card anim-rise flex h-full min-h-0 flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Kalender RUPS 2026" action="Lihat Semua" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        {terselenggara} Terselenggara YTD · {terjadwal} Terjadwal · 1 Perlu Penjadwalan
      </p>

      <div className="scroll-thin mt-2 min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="relative pl-[13px]">
          <span className="absolute bottom-1 left-[3px] top-1 w-px bg-[#eef2f6]" />
          {rupsCalendar.map((r) => (
            <div key={`${r.tanggal}-${r.entitas}`} className="relative py-[6px]">
              <span
                className={`absolute -left-[13px] top-[10px] h-[7px] w-[7px] rounded-full ${DOT[r.status]}`}
              />
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="shrink-0 text-[8.5px] font-bold tabular-nums text-ink-400">
                      {r.tanggal}
                    </span>
                    <span className="truncate text-[9.5px] font-bold text-ink-900">
                      {r.entitas}
                    </span>
                  </div>
                  <div className="mt-[2px] text-[8.5px] leading-snug text-ink-500">
                    <span className="font-semibold text-ink-700">{r.jenis}</span> — {r.agenda}
                  </div>
                </div>
                <ToneBadge label={r.status} tone={STATUS_TONE[r.status]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
