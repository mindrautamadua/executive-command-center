import { ModuleLoadingSkeleton } from "@/components/shared/LoadingSkeleton";

// Skeleton shimmer saat navigasi ke halaman modul ini (termasuk sub-halaman).
export default function Loading() {
  return <ModuleLoadingSkeleton kpis={7} />;
}
