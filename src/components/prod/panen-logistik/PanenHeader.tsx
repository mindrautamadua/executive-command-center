"use client";

import { Truck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PanenHeader() {
  return (
    <ModuleHeader
      icon={<Truck size={19} strokeWidth={1.9} />}
      title="Panen & Logistik"
      subtitle={<>Restan TBS, Kualitas Panen, FFA vs OER &amp; Armada Angkut PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="Semua Regional (7)" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
