"use client";

import Link from "next/link";
import { ChevronLeft, ListChecks } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { allRisks } from "@/lib/prr-registry";

export function AllRisksHeader() {
  return (
    <ModuleHeader
      icon={<ListChecks size={19} strokeWidth={1.9} />}
      title="All Risks"
      subtitle="Registri lengkap risiko people & organisasi — inherent vs residual, owner, dan status mitigasi"
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
          <span className="font-bold text-ink-900">Total {allRisks.length} Risks</span>
          <span className="text-ink-400">·</span>
          Risk &amp; Compliance / All Risks · Data per 31 Mei 2026 (YTD)
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
