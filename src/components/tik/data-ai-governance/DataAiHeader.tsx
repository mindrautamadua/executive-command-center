"use client";

import { Database } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function DataAiHeader() {
  return (
    <ModuleHeader
      icon={<Database size={19} strokeWidth={1.9} />}
      title="Data & AI Governance"
      subtitle={<>Kualitas Data 12 Domain, Portofolio AI &amp; Guardrail Tata Kelola PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Domain Data" value="Seluruh Domain" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
