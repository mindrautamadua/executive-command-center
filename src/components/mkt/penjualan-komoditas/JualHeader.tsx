"use client";

import { BarChart3 } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function JualHeader() {
  return (
    <ModuleHeader
      icon={<BarChart3 size={19} strokeWidth={1.9} />}
      title={<>Volume &amp; Nilai Penjualan</>}
      subtitle={<>Realisasi Penjualan Komoditas vs RKAP PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komoditas" value="Semua Komoditas" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
