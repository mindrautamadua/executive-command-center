"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

/** Header standar untuk seluruh halaman detail kartu Kinerja Karyawan. */
export function KinerjaDetailHeader({
  icon,
  title,
  subtitle,
  stat,
  breadcrumb,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** Angka utama di secondary bar, mis. "68.142 karyawan dinilai". */
  stat: string;
  /** Bagian setelah "Kinerja Karyawan /" pada breadcrumb. */
  breadcrumb: string;
}) {
  return (
    <ModuleHeader
      icon={icon}
      title={title}
      subtitle={subtitle}
      titleExtra={
        <Link
          href="/kinerja-karyawan"
          className="flex items-center gap-1 rounded-lg border border-[#e3e9ef] px-2 py-[3px] text-[9px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa]"
        >
          <ChevronLeft size={11} />
          Kinerja Karyawan
        </Link>
      }
      controls={
        <>
          <SelectBox label="Periode Penilaian" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">{stat}</span>
          <span className="text-ink-400">·</span>
          Kinerja Karyawan / {breadcrumb} · Sumber: Performance Management System &amp; HRIS konsolidasi · Data per 31 Mei 2026
        </span>
      }
      actions={<ExportButton />}
    />
  );
}
