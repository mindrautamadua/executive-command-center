"use client";

import Link from "next/link";
import { ChevronLeft, Contact } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { direktoriRingkasan } from "@/lib/direktori-karyawan";
import { terakhirDiperbarui } from "@/lib/profil-data";

export function DirektoriHeader() {
  return (
    <ModuleHeader
      icon={<Contact size={19} strokeWidth={1.9} />}
      title="Direktori Karyawan"
      subtitle="Cari karyawan berdasarkan nama, NIK, jabatan, unit, atau lokasi kerja — lalu buka profil lengkapnya"
      titleExtra={
        <Link
          href="/sdm-talenta"
          className="flex items-center gap-1 rounded-lg border border-[#e3e9ef] px-2 py-[3px] text-[9px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa]"
        >
          <ChevronLeft size={11} />
          SDM &amp; Talenta
        </Link>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Agustus 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      secondaryLeft={
        <span className="flex items-center gap-2 text-[9.5px] text-ink-500">
          <span className="font-bold text-ink-900">{direktoriRingkasan.total} Karyawan</span>
          <span className="text-ink-400">·</span>
          <span className="font-semibold text-ptpn-green">
            {direktoriRingkasan.risingStar} Rising Star
          </span>
          <span className="text-ink-400">·</span>
          SDM &amp; Talenta / Direktori Karyawan · Data per {terakhirDiperbarui}
        </span>
      }
      actions={<ExportButton label="Export Daftar" />}
    />
  );
}
