"use client";

import { ShieldCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PrrHeader() {
  return (
    <ModuleHeader
      icon={<ShieldCheck size={19} strokeWidth={1.9} />}
      title="People Risk Radar"
      subtitle="Memantau dan mengidentifikasi risiko manusia yang dapat memengaruhi kinerja dan keberlanjutan bisnis"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
