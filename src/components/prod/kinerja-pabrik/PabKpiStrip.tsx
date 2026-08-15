import { pabKpi } from "@/lib/pabrik-data";
import { ProdKpiCards } from "../ProdKpiCards";

export function PabKpiStrip() {
  return <ProdKpiCards items={pabKpi} cols="grid-cols-5" />;
}
