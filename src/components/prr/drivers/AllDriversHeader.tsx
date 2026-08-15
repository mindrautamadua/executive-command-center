"use client";

import Link from "next/link";
import { ChevronLeft, GitBranch } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { allDrivers } from "@/lib/prr-drivers";

export function AllDriversHeader() {
  return (
    <ModuleHeader
      icon={<GitBranch size={19} strokeWidth={1.9} />}
      title="All Risk Drivers"
      subtitle="Registri lengkap faktor pendorong risiko people — kontribusi, tren, efektivitas kontrol, dan pemilik"
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
          <span className="font-bold text-ink-900">{allDrivers.length} Driver</span>
          <span className="text-ink-400">·</span>
          People Risk Radar / All Drivers · Data per 31 Mei 2026 (YTD)
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
