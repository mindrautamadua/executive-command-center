"use client";

import { Building2 } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KorporasiHeader() {
  return (
    <ModuleHeader
      icon={<Building2 size={19} strokeWidth={1.9} />}
      title={<>Korporasi &amp; Anak Usaha</>}
      subtitle={<>Struktur Kepemilikan, Aksi Korporasi &amp; Tata Kelola Entitas PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Seluruh Subholding" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
