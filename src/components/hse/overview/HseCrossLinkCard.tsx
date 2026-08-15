import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hseCrossLinks } from "@/lib/hse-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Kartu ringkas tautan pendalaman ke dimensi lain (anti-duplikasi scope). */
export function HseCrossLinkCard() {
  return (
    <div className="card anim-rise px-4 pb-3.5 pt-3" style={{ "--d": "60ms" } as React.CSSProperties}>
      <SectionHead title="Pendalaman Lintas Dimensi" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Topik berikut dikelola di dimensi lain agar tidak terduplikasi.
      </p>

      <div className="mt-2.5 flex flex-col gap-1.5">
        {hseCrossLinks.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-[#eef2f6] bg-[#f8fafc] px-3 pb-2.5 pt-2.5 transition-colors hover:border-ptpn-green"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 truncate text-[9.5px] font-bold text-ink-900 group-hover:text-ptpn-green">
                {c.label}
              </span>
              <ArrowUpRight
                size={12}
                className="shrink-0 text-ink-400 group-hover:text-ptpn-green"
              />
            </div>
            <p className="mt-1 text-[8.5px] leading-[1.45] text-ink-500">{c.catatan}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
