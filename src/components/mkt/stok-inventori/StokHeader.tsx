"use client";

import { Warehouse } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function StokHeader() {
  return (
    <ModuleHeader
      icon={<Warehouse size={19} strokeWidth={1.9} />}
      title={<>Stok &amp; Posisi Inventori</>}
      subtitle={<>Posisi Stok Komoditas, Aging &amp; Dampak Modal Kerja PTPN Group</>}
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
