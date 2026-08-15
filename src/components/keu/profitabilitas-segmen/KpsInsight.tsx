import { kpsInsights } from "@/lib/kps-data";
import { KeuInsight } from "../KeuInsight";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Insight naratif tingkat grup (membandingkan antar subholding sekaligus). */
export function KpsInsight() {
  return (
    <div className="flex flex-col gap-1.5">
      <ScopeNote className="self-start" />
      <KeuInsight items={kpsInsights} />
    </div>
  );
}
