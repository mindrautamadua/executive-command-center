import { ArrowRight } from "lucide-react";

/** Kepala seksi + tautan aksi di kanan, dipakai semua kartu HC ECC. */
export function SectionHead({
  title,
  action,
  className = "",
}: {
  title: string;
  /** Label tautan kanan; kosongkan untuk tanpa tautan. */
  action?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <h3 className="text-[10px] font-extrabold uppercase tracking-[0.05em] text-ink-900">
        {title}
      </h3>
      {action && (
        <button className="flex shrink-0 cursor-pointer items-center gap-1 text-[9.5px] font-semibold text-ptpn-green hover:underline">
          {action} <ArrowRight size={11} />
        </button>
      )}
    </div>
  );
}
