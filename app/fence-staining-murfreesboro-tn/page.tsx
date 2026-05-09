import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Fence Staining & Deck Sealing in Murfreesboro, TN – Stoneman Services",
  description:
    "Professional fence staining, deck sealing, and driveway services in Murfreesboro, TN. Father-and-son team since 2019. Free estimates — call (615) 403-8347.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fence Staining & Deck Sealing in Murfreesboro, TN",
  provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
  serviceType: "Fence Staining and Deck Sealing",
  areaServed: "Murfreesboro, TN",
  description:
    "Professional fence staining, deck sealing, wood restoration, and driveway services in Murfreesboro, Tennessee.",
};

const services = [
  { title: "Fence Staining & Sealing", desc: "Privacy fences, picket fences, farm fences — cleaned, prepped, stained, and sealed for lasting beauty." },
  { title: "Deck & Pergola Care", desc: "Full deck restoration including cleaning, sanding, staining, and sealing. Pergola staining available too." },
  { title: "Driveway Sealing & Repair", desc: "Concrete cleaning, sealing, and minor crack repair to extend the life of your driveway." },
  { title: "Wood Restoration", desc: "Bring weathered wood back to life with professional cleaning, brightening, and protective finishes." },
];

export default function MurfreesboroPage() {
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
            Professional Fence Staining &amp; Deck Sealing in Murfreesboro, TN
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Trusted by Murfreesboro homeowners since 2019. Father-and-son team, premium products, satisfaction guaranteed.
          </p>
        </div>
      </section>

      {/* Services with Photos */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Our Services in Murfreesboro
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
              <Image src="/images/hero-fence-black.jpg" alt="Fence staining project in Murfreesboro, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/hero-fence-cedar.jpg" alt="Deck sealing project in Murfreesboro, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/hero-patio-pergola.jpg" alt="Outdoor wood restoration in Murfreesboro, TN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Fence &amp; Deck Services Near You in Murfreesboro
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">Stoneman Services offers full fence staining, deck refinishing, and driveway repair services in Murfreesboro and Rutherford County. From new builds to restorations, our experienced team delivers quality work that homeowners trust.</p>
          <p className="text-gray-600 leading-relaxed">
            Whether you need a fresh stain on a new fence or a full deck restoration, Stoneman Services delivers quality results throughout Murfreesboro and the surrounding area. Contact us today for a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1B4332" }}>
            Why Murfreesboro Homeowners Choose Stoneman Services
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
      <CTABanner heading={"Ready to transform your Murfreesboro property? Get a free estimate today."} />
    </>
  );
}
