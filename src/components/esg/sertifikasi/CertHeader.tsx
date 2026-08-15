"use client";

import { BadgeCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function CertHeader() {
  return (
    <ModuleHeader
      icon={<BadgeCheck size={19} strokeWidth={1.9} />}
      title="Sertifikasi Berkelanjutan"
      subtitle={<>Cakupan, Pipeline &amp; Nilai Sertifikasi ISPO/RSPO/ISCC PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Skema" value="Semua Skema" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
