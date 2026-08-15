"use client";

import { Database } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";
import { DataStamp } from "@/components/shared/DataStamp";
import { STEMPEL_DATA } from "@/lib/group-baseline";

export function DataHeader() {
  return (
    <ModuleHeader
      icon={<Database size={19} strokeWidth={1.9} />}
      title="Data & Analytics"
      subtitle="Trust · Quality · Governance · Intelligence"
      controls={
        <>
          <SelectBox label="Periode" value={STEMPEL_DATA.periode} width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="Sumber Data" value="Semua Sumber" width="158px" />
        </>
      }
      secondaryLeft={<DataStamp size={10} />}
    />
  );
}
