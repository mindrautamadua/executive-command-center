"use client";

import { TrendingUp } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function ApdHeader() {
  return (
    <ModuleHeader
      icon={<TrendingUp size={19} strokeWidth={1.9} />}
      title="Produktivitas Aset"
      subtitle={<>Yield, Rendemen &amp; Imbal Hasil Aset Produktif PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komoditas" value="Sawit & Gula" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
