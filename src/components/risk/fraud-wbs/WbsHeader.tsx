"use client";

import { Megaphone } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function WbsHeader() {
  return (
    <ModuleHeader
      icon={<Megaphone size={19} strokeWidth={1.9} />}
      title="Whistleblowing & Fraud"
      subtitle={<>Kanal Pelaporan, Investigasi &amp; Penanganan Fraud Enterprise</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Scope" value="Enterprise (Grup)" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
