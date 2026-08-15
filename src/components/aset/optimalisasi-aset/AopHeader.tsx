"use client";

import { Recycle } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AopHeader() {
  return (
    <ModuleHeader
      icon={<Recycle size={19} strokeWidth={1.9} />}
      title="Optimalisasi Aset"
      subtitle={<>Monetisasi Aset Idle, Kemitraan &amp; Divestasi Aset Non-Inti</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Kelompok Aset" value="Idle & Non-Inti (Grup)" width="195px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
