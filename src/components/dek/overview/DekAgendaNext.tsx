import { CalendarDays, FileInput } from "lucide-react";
import { dekAgendaNext } from "@/lib/dek-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";

const TONE = {
  red: { wrap: "border-[#f6d5d5] bg-[#fdf5f5]", accent: "text-[#ef4444]" },
  amber: { wrap: "border-[#f3e3c3] bg-[#fdf9f0]", accent: "text-[#d98b06]" },
  blue: { wrap: "border-[#d3e3f6] bg-[#f1f7fd]", accent: "text-[#2f6fe4]" },
} as const;

/**
 * Rail kanan: agenda pengawasan terdekat beserta materi yang diminta Dewan
 * Komisaris dari Direksi — bukan daftar keputusan yang harus diambil.
 */
export function DekAgendaNext() {
  return (
    <div className="card anim-rise px-4 pb-3.5 pt-3" style={{ "--d": "60ms" } as React.CSSProperties}>
      <SectionHead title="Agenda Pengawasan Terdekat" action="Lihat Kalender" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        5 Forum hingga 16 Jul 2026 · materi yang diminta dari Direksi
      </p>

      <div className="mt-2.5 flex flex-col gap-2">
        {dekAgendaNext.map((a) => {
          const t = TONE[a.tone];
          return (
            <div key={`${a.tanggal}-${a.forum}`} className={`rounded-xl border px-3 pb-2.5 pt-2.5 ${t.wrap}`}>
              <div className="flex items-center gap-1.5">
                <CalendarDays size={11} className={`shrink-0 ${t.accent}`} />
                <span className={`shrink-0 text-[8.5px] font-extrabold ${t.accent}`}>
                  {a.tanggal}
                </span>
                <span className="truncate text-[9px] font-bold text-ink-900" title={a.forum}>
                  {a.forum}
                </span>
              </div>
              <p className="mt-1.5 text-[9px] font-semibold leading-[1.45] text-ink-900">
                {a.agenda}
              </p>
              <p className="mt-1.5 flex items-start gap-1 text-[8.5px] leading-[1.45] text-ink-500">
                <FileInput size={9} className="mt-[2px] shrink-0 text-ink-400" />
                <span>
                  <span className="font-bold text-ink-700">Materi diminta:</span> {a.materiDiminta}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
