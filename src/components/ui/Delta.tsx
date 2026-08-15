import { Triangle } from "lucide-react";

export function Delta({
  value,
  trend,
  tone,
  className = "",
  size = 10,
}: {
  value: string;
  trend: "up" | "down";
  /**
   * Warna delta. Default mengikuti `trend` (naik = hijau, turun = merah).
   * Berguna untuk metrik yang justru bagus ketika turun, misalnya izin & sakit.
   */
  tone?: "good" | "bad";
  className?: string;
  size?: number;
}) {
  const up = trend === "up";
  const good = tone ? tone === "good" : up;
  return (
    <span
      className={`inline-flex items-center gap-[3px] whitespace-nowrap font-semibold ${
        good ? "delta-good" : "delta-bad"
      } ${className}`}
      style={{ fontSize: size }}
    >
      <Triangle
        size={size - 2}
        strokeWidth={0}
        fill="currentColor"
        className={up ? "" : "rotate-180"}
      />
      {value}
    </span>
  );
}
