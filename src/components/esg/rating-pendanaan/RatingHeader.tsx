"use client";

import { Award } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RatingHeader() {
  return (
    <ModuleHeader
      icon={<Award size={19} strokeWidth={1.9} />}
      title={<>Governance, Rating &amp; Sustainable Finance</>}
      subtitle={<>Skor GCG, Rating ESG Multi-Agensi, SLL &amp; Pipeline Pendanaan Hijau</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Agensi Rating" value="Seluruh Agensi" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
