import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dekCrossLinks } from "@/lib/dek-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Rail kanan: tautan silang ke dimensi lain yang menjadi sumber pemantauan. */
export function CrossLinkCard() {
  return (
    <div className="card anim-rise px-4 pb-3.5 pt-3" style={{ "--d": "120ms" } as React.CSSProperties}>
      <SectionHead title="Sumber Pemantauan Lintas Dimensi" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Data milik dimensi lain yang menjadi dasar pengawasan Dewan Komisaris
      </p>

      <div className="mt-2.5 flex flex-col gap-2">
        {dekCrossLinks.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-[#eef2f6] bg-[#f8fafc] px-3 pb-2.5 pt-2.5 transition-colors hover:border-ptpn-green"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-[9.5px] font-bold text-ink-900 group-hover:text-ptpn-green">
                {c.label}
              </span>
              <ArrowUpRight size={11} className="shrink-0 text-ink-400 group-hover:text-ptpn-green" />
            </div>
            <p className="mt-1.5 text-[8.5px] leading-[1.45] text-ink-500">{c.konteks}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
