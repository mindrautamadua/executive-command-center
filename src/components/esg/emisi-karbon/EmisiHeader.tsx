"use client";

import { CloudFog } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function EmisiHeader() {
  return (
    <ModuleHeader
      icon={<CloudFog size={19} strokeWidth={1.9} />}
      title="Emisi & Jejak Karbon"
      subtitle={<>Inventarisasi GRK Scope 1-2-3 &amp; Intensitas Emisi PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Scope" value="Scope 1 + 2" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
