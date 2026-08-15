"use client";

import Link from "next/link";
import { ChevronLeft, ShieldAlert } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { bodEscalations, priorityRisks } from "@/lib/prr-priority";

export function PriorityHeader() {
  return (
    <ModuleHeader
      icon={<ShieldAlert size={19} strokeWidth={1.9} />}
      title="Prioritas Risiko"
      subtitle="Antrean risiko people yang memerlukan tindakan — skor prioritas, pemilik aksi, tenggat, dan jalur eskalasi"
      titleExtra={
        <Link
          href="/people-risk-radar"
          className="flex items-center gap-1 rounded-lg border border-[#e3e9ef] px-2 py-[3px] text-[9px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa]"
        >
          <ChevronLeft size={11} />
          People Risk Radar
        </Link>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">{priorityRisks.length} Risiko Prioritas</span>
          <span className="text-ink-400">·</span>
          <span className="font-semibold text-[#ef4444]">{bodEscalations} perlu eskalasi BOD</span>
          <span className="text-ink-400">·</span>
          People Risk Radar / Prioritas Risiko · Data per 31 Mei 2026 (YTD)
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
