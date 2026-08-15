"use client";

import { Wallet } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function BelanjaHeader() {
  return (
    <ModuleHeader
      icon={<Wallet size={19} strokeWidth={1.9} />}
      title="Belanja & Nilai TI"
      subtitle={<>Struktur Belanja Rp 0,92 T, Benchmark &amp; Realisasi Nilai Investasi Digital</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Basis Anggaran" value="RKAP FY 2026" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
