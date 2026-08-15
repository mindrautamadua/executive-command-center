"use client";

import { HeartHandshake } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SosialHeader() {
  return (
    <ModuleHeader
      icon={<HeartHandshake size={19} strokeWidth={1.9} />}
      title={<>Sosial &amp; Plasma</>}
      subtitle={<>Kesejahteraan Petani Plasma, TJSL, HAM &amp; Hubungan Komunitas</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="Seluruh Regional" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
