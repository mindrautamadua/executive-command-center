import { siberInsights } from "@/lib/tik-data";
import { TikInsightGrid } from "../TikInsightGrid";

export function SiberInsight() {
  return <TikInsightGrid items={siberInsights} cols="grid-cols-3" />;
}
