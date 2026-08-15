"use client";

import { ShieldAlert } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KrkHeader() {
  return (
    <ModuleHeader
      icon={<ShieldAlert size={19} strokeWidth={1.9} />}
      title="Risiko Keuangan"
      subtitle={<>Eksposur Komoditas, Kurs &amp; Suku Bunga PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Kategori Risiko" value="Semua Kategori" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
