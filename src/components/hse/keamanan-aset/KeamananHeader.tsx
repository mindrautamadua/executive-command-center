"use client";

import { ShieldHalf } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KeamananHeader() {
  return (
    <ModuleHeader
      icon={<ShieldHalf size={19} strokeWidth={1.9} />}
      title="Keamanan Aset & Kebun"
      subtitle={<>Pencurian TBS, Gangguan Keamanan &amp; Cakupan Pengamanan PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Cakupan" value="7 Regional (Grup)" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
