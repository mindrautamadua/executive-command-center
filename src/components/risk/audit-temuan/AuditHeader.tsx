"use client";

import { FileSearch } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AuditHeader() {
  return (
    <ModuleHeader
      icon={<FileSearch size={19} strokeWidth={1.9} />}
      title="Audit & Temuan"
      subtitle={<>Temuan BPK, SPI &amp; KAP — Status Tindak Lanjut PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Sumber Audit" value="Semua Sumber" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
