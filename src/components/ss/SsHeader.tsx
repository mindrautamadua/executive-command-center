"use client";

import { GitBranch } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SsHeader() {
  return (
    <ModuleHeader
      icon={<GitBranch size={19} strokeWidth={1.9} />}
      title="Strategic Scenario Simulator"
      subtitle="Modelkan pilihan strategi, dampak workforce, hasil finansial, dan risiko strategis sebelum keputusan diambil."
      controls={
        <>
          <SelectBox label="Periode" value="2026 - 2028" width="150px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
