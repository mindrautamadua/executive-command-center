import { dekInsights } from "@/lib/dek-data";
import { DekInsightGrid } from "../DekInsightGrid";

export function DekInsight() {
  return <DekInsightGrid items={dekInsights} cols="grid-cols-4" />;
}
