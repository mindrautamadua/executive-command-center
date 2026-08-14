import { MotionEnhancer } from "@/components/MotionEnhancer";

// Template re-mount tiap navigasi, memberi transisi masuk untuk semua halaman.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="anim-page h-full">
      <MotionEnhancer />
      {children}
    </div>
  );
}
