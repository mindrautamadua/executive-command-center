"use client";

import { Gavel } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function ProsesHeader() {
  return (
    <ModuleHeader
      icon={<Gavel size={19} strokeWidth={1.9} />}
      title="Proses & Tender"
      subtitle={<>Siklus Pengadaan, Pipeline Tender &amp; Adopsi e-Procurement</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Unit" value="Seluruh Subholding" width="190px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
