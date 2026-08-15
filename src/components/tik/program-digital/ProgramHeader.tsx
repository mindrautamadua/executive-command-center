"use client";

import { Rocket } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function ProgramHeader() {
  return (
    <ModuleHeader
      icon={<Rocket size={19} strokeWidth={1.9} />}
      title="Program & Delivery Digital"
      subtitle={<>Eksekusi ERP, Adopsi &amp; Realisasi Benefit Digital PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="PTPN Group (Konsolidasi)" width="200px" />
          <SelectBox label="Domain" value="Seluruh Domain TI" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
