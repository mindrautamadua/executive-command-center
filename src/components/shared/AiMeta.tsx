/**
 * Metadata analitik untuk setiap insight/rekomendasi AI: jenis klaim,
 * keyakinan, dan bukti. Prinsipnya: korelasi, kausal, prediksi, dan
 * rekomendasi adalah klaim berbeda dan tidak boleh saling menyamar —
 * disiplin yang sama dengan disclaimer korelasional di HC alignment.
 */

export type AiClaimType = "Korelasi" | "Kausal" | "Prediksi" | "Rekomendasi";

export interface AiMetaInfo {
  jenis: AiClaimType;
  /** Keyakinan analis/model (0-100); tanpa angka = tidak diklaim. */
  confidencePct?: number;
  /** Sumber bukti utama, dipisah " · " bila lebih dari satu. */
  evidence?: string;
}

const JENIS_CLS: Record<AiClaimType, string> = {
  Korelasi: "bg-[#e8f1fd] text-[#2f6fe4]",
  Kausal: "bg-[#f1ecfe] text-[#8b5cf6]",
  Prediksi: "bg-[#fdf3e0] text-[#d98b06]",
  Rekomendasi: "bg-ptpn-greenLight text-ptpn-green",
};

export function AiMeta({ jenis, confidencePct, evidence }: AiMetaInfo) {
  return (
    <span className="mt-[4px] flex flex-wrap items-center gap-1.5">
      <span
        className={`rounded px-1 py-[1px] text-[7.5px] font-bold uppercase tracking-[0.04em] ${JENIS_CLS[jenis]}`}
      >
        {jenis}
      </span>
      {confidencePct !== undefined && (
        <span className="text-[8px] font-semibold text-ink-400">
          Keyakinan {confidencePct}%
        </span>
      )}
      {evidence && (
        <span className="min-w-0 truncate text-[8px] text-ink-400" title={evidence}>
          Bukti: {evidence}
        </span>
      )}
    </span>
  );
}
