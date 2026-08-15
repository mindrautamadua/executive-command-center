import { kasInsights } from "@/lib/kas-data";
import { KeuInsight } from "../KeuInsight";

export function KasInsight() {
  return <KeuInsight items={kasInsights} />;
}
