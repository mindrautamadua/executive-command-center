"use client";

import { ShieldAlert } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SiberHeader() {
  return (
    <ModuleHeader
      icon={<ShieldAlert size={19} strokeWidth={1.9} />}
      title="Keamanan Siber & Pelindungan Data"
      subtitle={<>Postur Siber, Kerentanan &amp; Kesiapan UU PDP PTPN Group</>}
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
