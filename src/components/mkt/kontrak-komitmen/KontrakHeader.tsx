"use client";

import { FileSignature } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KontrakHeader() {
  return (
    <ModuleHeader
      icon={<FileSignature size={19} strokeWidth={1.9} />}
      title={<>Kontrak &amp; Komitmen Penjualan</>}
      subtitle={<>Forward Coverage, Tender KPBN &amp; Eksposur Counterparty PTPN Group</>}
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
