"use client";

import { ClipboardCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function BudayaHeader() {
  return (
    <ModuleHeader
      icon={<ClipboardCheck size={19} strokeWidth={1.9} />}
      title="Budaya & Kepatuhan K3"
      subtitle={<>Sertifikasi SMK3, Audit, Pelatihan &amp; Surveilans Kesehatan Kerja</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="7 Regional (Konsolidasi)" width="200px" />
          <SelectBox label="Jenis Unit" value="Seluruh Jenis Unit" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
