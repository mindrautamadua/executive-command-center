"use client";

import { PieChart } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function BelanjaHeader() {
  return (
    <ModuleHeader
      icon={<PieChart size={19} strokeWidth={1.9} />}
      title="Analitik Belanja"
      subtitle={<>Struktur, Konsentrasi &amp; Kanal Belanja Pengadaan PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Kategori" value="Seluruh Kategori" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
