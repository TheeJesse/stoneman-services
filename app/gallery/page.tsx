import type { Metadata } from "next";
import Image from "next/image";
import content from "../../content/pages/gallery.json";
import CTABanner from "../components/CTABanner";

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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{content.hero.heading}</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          {content.hero.subheading}
        </p>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {content.items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-500 text-lg mb-2">Photos coming soon!</p>
            <p className="text-gray-400 text-sm">Check back after our next project.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.items.map((item, i) => {
              if (item.type === "before-after" && "before_image" in item && "after_image" in item) {
                const ba = item as { type: string; title: string; before_image: string; after_image: string };
                return (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <div className="absolute top-2 left-2 z-10 text-xs font-bold text-white px-2 py-1 rounded" style={{ backgroundColor: "#555" }}>
                          BEFORE
                        </div>
                        <Image
                          src={ba.before_image}
                          alt={`Before: ${ba.title}`}
                          width={600}
                          height={400}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute top-2 left-2 z-10 text-xs font-bold text-white px-2 py-1 rounded" style={{ backgroundColor: "#1B4332" }}>
                          AFTER
                        </div>
                        <Image
                          src={ba.after_image}
                          alt={`After: ${ba.title}`}
                          width={600}
                          height={400}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                    </div>
                    {ba.title && (
                      <div className="px-4 py-3 text-sm font-medium text-gray-700">{ba.title}</div>
                    )}
                  </div>
                );
              }

              // Single photo
              const single = item as { type: string; title: string; image: string };
              return (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <Image
                    src={single.image}
                    alt={single.title || "Project photo"}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                  {single.title && (
                    <div className="px-4 py-3 text-sm font-medium text-gray-700">{single.title}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16">
          <CTABanner heading={content.cta_banner_heading} />
        </div>
      </div>
    </div>
  );
}
