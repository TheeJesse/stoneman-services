import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery | Before & After Work",
  description:
    "See the real results — before and after photos of fence staining, deck sealing, driveway cleaning, and more from Stoneman Services in Middle Tennessee.",
};

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen">
      {/* Header */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-12 px-4 text-center">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#a47551" }}>
          Our Work
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Photo Gallery</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Real projects, real results. See the transformation for yourself.
        </p>
      </section>

      <GalleryClient />
    </div>
  );
}
