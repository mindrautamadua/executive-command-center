"use client";

import { LineChart } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function HargaHeader() {
  return (
    <ModuleHeader
      icon={<LineChart size={19} strokeWidth={1.9} />}
      title={<>Harga Pasar &amp; Outlook</>}
      subtitle={<>Harga Komoditas, Price Drivers &amp; Outlook Konsensus PTPN Group</>}
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
