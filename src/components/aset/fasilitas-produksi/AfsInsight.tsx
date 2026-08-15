import { afsInsights } from "@/lib/afs-data";
import { AsetInsightGrid } from "../AsetInsightGrid";

export function AfsInsight() {
  return <AsetInsightGrid items={afsInsights} cols="grid-cols-5" />;
}
