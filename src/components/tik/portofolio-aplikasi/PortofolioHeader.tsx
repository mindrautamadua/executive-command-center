"use client";

import { Server } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PortofolioHeader() {
  return (
    <ModuleHeader
      icon={<Server size={19} strokeWidth={1.9} />}
      title="Portofolio Aplikasi & Infrastruktur"
      subtitle={<>Lanskap 68 Aplikasi Inti, Jejak Infrastruktur &amp; Layanan TI PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Domain Bisnis" value="Seluruh Domain" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
