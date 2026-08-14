import Image from "next/image";

/** Rasio lebar/tinggi berkas logo PTPN III (2959 x 1146). */
const ASPECT = 2959 / 1146;

/**
 * Logo Holding Perkebunan Nusantara (PTPN III).
 *
 * `size` adalah tinggi mark dalam piksel; lebarnya mengikuti rasio asli.
 */
export function PtpnLogo({ size = 22 }: { size?: number }) {
  const width = Math.round(size * ASPECT);

  return (
    <Image
      src="/logo-ptpn3-mark.png"
      alt="Logo PTPN III - Holding Perkebunan Nusantara"
      width={width}
      height={size}
      priority
      style={{ width, height: size }}
    />
  );
}
