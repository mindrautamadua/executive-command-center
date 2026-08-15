"use client";

import { Rocket } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function OpexHeader() {
  return (
    <ModuleHeader
      icon={<Rocket size={19} strokeWidth={1.9} />}
      title="Program Operational Excellence"
      subtitle={<>Portofolio Inisiatif, Dampak EBITDA &amp; Maturitas OPEX PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Workstream" value="Semua Workstream (5)" width="190px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
