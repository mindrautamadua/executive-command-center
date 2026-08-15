import { STEMPEL_DATA } from "@/lib/group-baseline";

/**
 * Stempel waktu data yang dipakai seluruh modul.
 *
 * Menampilkan tiga hal terpisah karena ketiganya menjawab pertanyaan berbeda:
 * periode bisnis yang diwakili angka, tanggal potong data, dan waktu sistem
 * terakhir menarik data. Kalimat tunggal semacam "terakhir diperbarui 14 Agu"
 * menyesatkan — pembaca menyangka angkanya berlaku sampai Agustus padahal
 * datanya berhenti di Mei.
 */
export function DataStamp({
  className = "",
  size = 8.5,
  /** Sembunyikan periode saat ruang sempit; snapshot & refresh tetap tampil. */
  ringkas = false,
}: {
  className?: string;
  size?: number;
  ringkas?: boolean;
}) {
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-ink-500 ${className}`}
      style={{ fontSize: size }}
    >
      {!ringkas && (
        <>
          <span>
            Periode data: <span className="font-bold text-ink-700">{STEMPEL_DATA.periode}</span>
          </span>
          <span className="text-ink-300">•</span>
        </>
      )}
      <span>
        Snapshot: <span className="font-bold text-ink-700">{STEMPEL_DATA.snapshot}</span>
      </span>
      <span className="text-ink-300">•</span>
      <span>
        Refresh sistem: <span className="font-bold text-ink-700">{STEMPEL_DATA.refresh}</span>
      </span>
    </span>
  );
}
