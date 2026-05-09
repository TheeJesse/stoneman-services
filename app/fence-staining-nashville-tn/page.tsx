import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Fence Staining & Deck Sealing in Nashville, TN – Stoneman Services",
  description:
    "Professional fence staining, deck sealing, and driveway services in Nashville, TN. Father-and-son team since 2019. Free estimates — call (615) 403-8347.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fence Staining & Deck Sealing in Nashville, TN",
  provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
  serviceType: "Fence Staining and Deck Sealing",
  areaServed: "Nashville, TN",
  description:
    "Professional fence staining, deck sealing, wood restoration, and driveway services in Nashville, Tennessee.",
};

const services = [
  { title: "Fence Staining & Sealing", desc: "Privacy fences, picket fences, farm fences — cleaned, prepped, stained, and sealed for lasting beauty." },
  { title: "Deck & Pergola Care", desc: "Full deck restoration including cleaning, sanding, staining, and sealing. Pergola staining available too." },
  { title: "Driveway Sealing & Repair", desc: "Concrete cleaning, sealing, and minor crack repair to extend the life of your driveway." },
  { title: "Wood Restoration", desc: "Bring weathered wood back to life with professional cleaning, brightening, and protective finishes." },
];

export default function NashvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Professional Fence Staining &amp; Deck Sealing in Nashville, TN
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Trusted by Nashville homeowners since 2019. Father-and-son team, premium products, satisfaction guaranteed.
          </p>
        </div>
      </section>

      {/* Services with Photos */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Our Services in Nashville
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1B4332" }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/hero-fence-1.jpg" alt="Fence staining project in Nashville, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/hero-deck-1.jpg" alt="Deck sealing project in Nashville, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/before-after-fence-1.jpg" alt="Outdoor wood restoration in Nashville, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Fence &amp; Deck Services Near You in Nashville
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">Stoneman Services provides professional fence staining, deck sealing, and driveway services throughout Nashville and surrounding neighborhoods. Our father-and-son team understands Nashville’s humid summers and heavy rains — we use premium low-VOC products to protect your wood and hardscapes for years.</p>
          <p className="text-gray-600 leading-relaxed">
            Whether you need a fresh stain on a new fence or a full deck restoration, Stoneman Services delivers quality results throughout Nashville and the surrounding area. Contact us today for a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1B4332" }}>
            Why Nashville Homeowners Choose Stoneman Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"👨‍👦"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>Father &amp; Son Team</h3>
              <p className="text-gray-600 text-sm">Family-owned and operated. Ron and Matt handle every job personally.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📅"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>Since 2019</h3>
              <p className="text-gray-600 text-sm">Years of experience serving Middle Tennessee with honest, reliable work.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"✅"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">We stand behind every project. Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading={"Ready to transform your Nashville property? Get a free estimate today."} />
    </>
  );
}
