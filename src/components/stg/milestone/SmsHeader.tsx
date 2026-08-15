"use client";

import { Milestone } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SmsHeader() {
  return (
    <ModuleHeader
      icon={<Milestone size={19} strokeWidth={1.9} />}
      title="Milestone Tracking"
      subtitle={<>Pemantauan 142 Milestone Program Transformasi 2026</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Program" value="Semua Program" width="180px" />
          <SelectBox label="Owner" value="PTPN Group" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
