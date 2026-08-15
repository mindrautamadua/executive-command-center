import { opexKpi } from "@/lib/biaya-opex-data";
import { ProdKpiCards } from "../ProdKpiCards";

export function OpexKpiStrip() {
  return <ProdKpiCards items={opexKpi} cols="grid-cols-4" />;
}
