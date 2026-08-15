"use client";

import { Radar } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function MiHeader() {
  return (
    <ModuleHeader
      icon={<Radar size={19} strokeWidth={1.9} />}
      title="Market Intelligence"
      titleExtra={
        <span className="rounded bg-ptpn-greenLight px-1.5 py-[2px] text-[9px] font-bold text-ptpn-green">
          AI
        </span>
      }
      subtitle={<>Sinyal Pasar, Benchmark Kompetitor &amp; Policy Watch Komoditas</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komoditas" value="Semua Komoditas" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
