"use client";

import { Sprout } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PkomHeader() {
  return (
    <ModuleHeader
      icon={<Sprout size={19} strokeWidth={1.9} />}
      title="Produksi per Komoditas"
      subtitle={<>Scoreboard Produksi Sawit, Gula, Karet &amp; Teh PTPN Group</>}
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
