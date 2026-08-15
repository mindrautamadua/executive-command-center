"use client";

import { Ship } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function BuyerHeader() {
  return (
    <ModuleHeader
      icon={<Ship size={19} strokeWidth={1.9} />}
      title={<>Ekspor, Domestik &amp; Buyer</>}
      subtitle={<>Komposisi Pasar, Konsentrasi Buyer &amp; Regulasi PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Pasar" value="Semua Pasar" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
