"use client";

import { ListChecks } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RegisterHeader() {
  return (
    <ModuleHeader
      icon={<ListChecks size={19} strokeWidth={1.9} />}
      title="Risk Register Korporat"
      subtitle={<>142 Risiko Terdaftar — Inherent, Residual, dan Pemilik Risiko</>}
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
