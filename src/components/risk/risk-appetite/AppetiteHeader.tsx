"use client";

import { Gauge } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AppetiteHeader() {
  return (
    <ModuleHeader
      icon={<Gauge size={19} strokeWidth={1.9} />}
      title={<>Risk Appetite &amp; Limit</>}
      subtitle={<>28 Limit Kuantitatif, Utilisasi, dan Jalur Eskalasi Komite Risiko</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="160px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Kategori Risiko" value="Semua Kategori" width="165px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
