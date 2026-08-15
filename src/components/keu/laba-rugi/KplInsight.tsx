import { kplInsights } from "@/lib/kpl-data";
import { KeuInsight } from "../KeuInsight";

export function KplInsight() {
  return <KeuInsight items={kplInsights} />;
}
