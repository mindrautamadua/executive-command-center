"use client";

import { Factory } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AfsHeader() {
  return (
    <ModuleHeader
      icon={<Factory size={19} strokeWidth={1.9} />}
      title="Fasilitas Produksi"
      subtitle={<>Kapasitas, Kondisi &amp; Utilisasi Pabrik PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Pabrik" value="Semua Jenis" width="170px" />
          <SelectBox label="Regional" value="Semua Regional" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
