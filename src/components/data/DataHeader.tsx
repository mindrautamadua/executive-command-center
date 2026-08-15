"use client";

import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function DataHeader() {
  return (
    <ModuleHeader
      title="Data & Analytics"
      subtitle="Trust · Quality · Governance · Intelligence"
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="Sumber Data" value="Semua Sumber" width="158px" />
        </>
      }
      secondaryLeft={
        <span>
          Data as-of: 30 Jun 2026 · Terakhir diperbarui: 14 Agu 2026 · 22:14 WIB
        </span>
      }
    />
  );
}
