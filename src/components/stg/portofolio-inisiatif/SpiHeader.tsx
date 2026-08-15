"use client";

import { FolderKanban } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SpiHeader() {
  return (
    <ModuleHeader
      icon={<FolderKanban size={19} strokeWidth={1.9} />}
      title="Portofolio Inisiatif"
      subtitle={<>Register &amp; Kesehatan Eksekusi 28 Inisiatif Strategis RJPP</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Tema" value="Semua Tema RJPP" width="180px" />
          <SelectBox label="Owner" value="PTPN Group" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
