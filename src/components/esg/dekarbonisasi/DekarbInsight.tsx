import { dekarbInsights } from "@/lib/esg-data";
import { EsgInsightGrid } from "../EsgInsightGrid";

export function DekarbInsight() {
  return <EsgInsightGrid items={dekarbInsights} cols="grid-cols-2" />;
}
