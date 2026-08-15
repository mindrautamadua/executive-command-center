"use client";

import Link from "next/link";
import { ChevronLeft, LineChart } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function HeadcountTrendHeader() {
  return (
    <ModuleHeader
      icon={<LineChart size={19} strokeWidth={1.9} />}
      title="Headcount Trend — Detail"
      subtitle="Pembacaan lengkap pergerakan headcount 36 bulan: pertumbuhan, komposisi, arus masuk-keluar, dan proyeksi"
      titleExtra={
        <Link
          href="/workforce-analytics"
          className="flex items-center gap-1 rounded-lg border border-[#e3e9ef] px-2 py-[3px] text-[9px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa]"
        >
          <ChevronLeft size={11} />
          Workforce Analytics
        </Link>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Jun 2023 – Mei 2026" width="180px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">70.142 pekerja</span>
          <span className="text-ink-400">·</span>
          Workforce Analytics / Headcount Trend · Sumber: HRIS konsolidasi · Data per 31 Mei 2026
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
