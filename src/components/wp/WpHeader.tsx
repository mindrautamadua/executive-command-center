"use client";

import { CalendarRange } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function WpHeader() {
  return (
    <ModuleHeader
      icon={<CalendarRange size={19} strokeWidth={1.9} />}
      title="Workforce Planning"
      subtitle="Merencanakan kebutuhan talenta yang tepat, di waktu yang tepat, dengan biaya optimal"
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
