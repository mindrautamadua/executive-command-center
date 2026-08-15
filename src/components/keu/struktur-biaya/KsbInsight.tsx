import { ksbInsights } from "@/lib/ksb-data";
import { KeuInsight } from "../KeuInsight";

export function KsbInsight() {
  return <KeuInsight items={ksbInsights} />;
}
