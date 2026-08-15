"use client";

import { ChevronDown } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function OrgHeader() {
  return (
    <ModuleHeader
      title="Organisasi & Jabatan"
      subtitle="Dashboard Struktur Organisasi dan Manajemen Jabatan"
      controls={
        <>
          <SelectBox label="Struktur" value="Holding & Anak Perusahaan" width="230px" />
          <SelectBox label="Periode" value="Mei 2026" width="160px" />

          <button className="flex w-[140px] items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-3 py-2 text-[11px] font-medium text-ink-700 shadow-card">
            PTPN Group
            <ChevronDown size={13} className="text-ink-400" />
          </button>
        </>
      }
    />
  );
}
