import { afsKpi } from "@/lib/afs-data";
import { AsetKpiCards } from "../AsetKpiCards";

export function AfsKpiStrip() {
  return <AsetKpiCards items={afsKpi} cols="grid-cols-6" />;
}
