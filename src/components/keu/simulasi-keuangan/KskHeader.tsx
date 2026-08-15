"use client";

import { Route } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KskHeader() {
  return (
    <ModuleHeader
      icon={<Route size={19} strokeWidth={1.9} />}
      title="Simulasi Keuangan"
      subtitle={<>Skenario, Sensitivitas &amp; Stress Test Proyeksi FY 2026</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Skenario" value="Base Case" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
