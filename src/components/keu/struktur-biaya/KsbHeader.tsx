"use client";

import { Layers } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KsbHeader() {
  return (
    <ModuleHeader
      icon={<Layers size={19} strokeWidth={1.9} />}
      title="Struktur Biaya & HPP"
      subtitle={<>Komposisi HPP, Unit Cost &amp; Program Efisiensi PTPN Group</>}
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
