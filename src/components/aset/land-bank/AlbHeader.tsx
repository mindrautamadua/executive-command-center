"use client";

import { Map } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AlbHeader() {
  return (
    <ModuleHeader
      icon={<Map size={19} strokeWidth={1.9} />}
      title="Land Bank & HGU"
      subtitle={<>Penguasaan Lahan, Status Legal &amp; Perpanjangan HGU PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Status Legal" value="Semua Status" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
