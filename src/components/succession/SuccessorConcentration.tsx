import { TriangleAlert } from "lucide-react";
import { successorConcentration } from "@/lib/succession-data";
import { PersonAvatar } from "../ui/PersonAvatar";

/**
 * Risiko konsentrasi suksesor: satu orang dinominasikan di banyak posisi
 * kritis = single-person dependency.
 */
export function SuccessorConcentration() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "1080ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy flex items-center gap-1.5">
          <TriangleAlert size={13} className="text-[#f59e0b]" />
          Successor Concentration
        </h3>
      </div>

      <div className="mt-1.5 rounded-lg bg-[#fdf3e0] px-2.5 py-1.5 text-[8.5px] font-medium leading-[1.4] text-[#a16207]">
        <span className="font-bold">{successorConcentration.multiRole} orang</span>{" "}
        dinominasikan pada ≥ 3 posisi kritis — dependensi satu orang.
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-around pt-1">
        {successorConcentration.top.map((t) => (
          <div key={t.nama} className="flex items-center gap-2.5">
            <PersonAvatar seed={t.seed} size={26} name={t.nama} className="ring-1 ring-[#eef2f6]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[9.5px] font-semibold text-ink-900">
                {t.nama}
              </div>
              <div className="truncate text-[8.5px] text-ink-500" title={t.posisi.join(", ")}>
                {t.posisi.join(" • ")}
              </div>
            </div>
            <span className="tone-amber ml-auto inline-flex shrink-0 items-center rounded px-1.5 py-[2px] text-[8.5px] font-bold leading-none">
              {t.posisiCount} posisi
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
