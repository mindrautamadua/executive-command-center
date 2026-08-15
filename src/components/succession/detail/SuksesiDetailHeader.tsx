"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

/** Header standar untuk seluruh halaman detail kartu Succession Planning. */
export function SuksesiDetailHeader({
  icon,
  title,
  subtitle,
  stat,
  breadcrumb,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** Angka utama di secondary bar, mis. "212 posisi kritis". */
  stat: string;
  /** Bagian setelah "Succession Planning /" pada breadcrumb. */
  breadcrumb: string;
}) {
  return (
    <ModuleHeader
      icon={icon}
      title={title}
      subtitle={subtitle}
      titleExtra={
        <Link
          href="/succession-planning"
          className="flex items-center gap-1 rounded-lg border border-[#e3e9ef] px-2 py-[3px] text-[9px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa]"
        >
          <ChevronLeft size={11} />
          Succession Planning
        </Link>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="152px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">{stat}</span>
          <span className="text-ink-400">·</span>
          Succession Planning / {breadcrumb} · Sumber: Succession &amp; Talent Management System · Data per 31 Mei 2026
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
