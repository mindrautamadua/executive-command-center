"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

/** Header standar untuk seluruh halaman detail kartu Workforce Analytics. */
export function DetailHeader({
  icon,
  title,
  subtitle,
  stat,
  breadcrumb,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** Angka utama di secondary bar, mis. "70.142 pekerja". */
  stat: string;
  /** Bagian setelah "Workforce Analytics /" pada breadcrumb. */
  breadcrumb: string;
}) {
  return (
    <ModuleHeader
      icon={icon}
      title={title}
      subtitle={subtitle}
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
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">{stat}</span>
          <span className="text-ink-400">·</span>
          Workforce Analytics / {breadcrumb} · Sumber: HRIS konsolidasi · Data per 31 Mei 2026
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
