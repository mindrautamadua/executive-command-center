"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

/** Header standar untuk halaman detail kartu People Risk Radar. */
export function PrrDetailHeader({
  icon,
  title,
  subtitle,
  stat,
  breadcrumb,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** Angka utama di secondary bar, mis. "Overall risk score 68". */
  stat: string;
  /** Bagian setelah "People Risk Radar /" pada breadcrumb. */
  breadcrumb: string;
}) {
  return (
    <ModuleHeader
      icon={icon}
      title={title}
      subtitle={subtitle}
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
          <span className="font-bold text-ink-900">{stat}</span>
          <span className="text-ink-400">·</span>
          People Risk Radar / {breadcrumb} · Sumber: People Risk Register &amp; HRIS konsolidasi · Data per 31 Mei 2026
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
