import { kpsInsights } from "@/lib/kps-data";
import { KeuInsight } from "../KeuInsight";

export function KpsInsight() {
  return <KeuInsight items={kpsInsights} />;
}
