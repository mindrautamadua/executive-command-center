"use client";

import { PieChart } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KpsHeader() {
  return (
    <ModuleHeader
      icon={<PieChart size={19} strokeWidth={1.9} />}
      title="Profitabilitas Segmen"
      subtitle={<>Profitabilitas Subholding, Regional &amp; Klaster PG PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Segmen" value="Semua Subholding" width="190px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
