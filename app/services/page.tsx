import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/services.json";

export const metadata: Metadata = {
  title: "Our Services – Professional Fence, Deck & Driveway Care in Middle Tennessee",
  description:
    "Expert fence staining, deck sealing, driveway cleaning, wood restoration & more across Nashville, Franklin, Brentwood, Murfreesboro, and all of Middle Tennessee.",
};

const serviceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fence Staining & Sealing",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Fence Staining and Sealing",
    areaServed: "Middle Tennessee",
    description: "Professional cleaning, staining, and sealing for privacy fences, picket fences, and farm fences.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deck & Pergola Care",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Deck and Pergola Staining and Sealing",
    areaServed: "Middle Tennessee",
    description: "Expert cleaning, staining, sealing, and care for decks, pergolas, and other outdoor wood structures.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Driveway Cleaning & Sealing",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Driveway Services",
    areaServed: "Middle Tennessee",
    description: "Cleaning, staining, sealing, and minor crack repair for aggregate and blacktop driveways.",
  },
];

export default function ServicesPage() {
  const { hero, wood_services, driveway_services, process_steps, why_stand_out, cta_banner_heading } = content;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Banner */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
            {hero.heading}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-7">
            {hero.subheading}
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {hero.climate_note}
          </p>
        </div>
      </section>

      {/* Anchor nav */}
      <div style={{ backgroundColor: "#F0EBE3" }} className="sticky top-14 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-6 text-sm font-semibold overflow-x-auto">
          <a href="#wood-care" className="whitespace-nowrap hover:underline" style={{ color: "#1B4332" }}>Wood Care</a>
          <a href="#driveway" className="whitespace-nowrap hover:underline" style={{ color: "#1B4332" }}>Driveway Services</a>
          <a href="#process" className="whitespace-nowrap hover:underline" style={{ color: "#1B4332" }}>Our Process</a>
          <a href="#why" className="whitespace-nowrap hover:underline" style={{ color: "#1B4332" }}>Why We Stand Out</a>
        </div>
      </div>

      {/* WOOD CARE SERVICES */}
      <section id="wood-care" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1B4332" }}>
            🌲 Wood Care Services
          </h2>
          <div className="space-y-12">
            {wood_services.map((svc, i) => (
              <div
                key={svc.name}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <Image
                    src={svc.img}
                    alt={svc.name}
                    width={600}
                    height={340}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>{svc.name}</h3>
                  <p className="text-gray-600">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVEWAY SERVICES */}
      <section id="driveway" className="py-16 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1B4332" }}>
            🛣️ Driveway Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {driveway_services.map((svc) => (
              <div key={svc.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{svc.name}</h3>
                <p className="text-gray-600 text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Image
              src="/images/hero-driveway.jpg"
              alt="Driveway cleaning and sealing services"
              width={600}
              height={340}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
            Our {process_steps.length}-Step Process
          </h2>
          <div className="space-y-6">
            {process_steps.map((step, i) => (
              <div key={step.title} className="flex gap-5 items-start bg-white rounded-xl p-5 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1B4332" }}>{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STAND OUT */}
      <section id="why" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Why Our Services Stand Out
          </h2>
          <ul className="space-y-3">
            {why_stand_out.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span style={{ color: "#1B4332" }}>✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner heading={cta_banner_heading} />

      <div className="text-center py-8 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <p className="text-gray-600 text-sm">
          Have questions?{" "}
          <a href="/faq" className="font-semibold underline" style={{ color: "#1B4332" }}>
            See our full FAQ page →
          </a>
        </p>
      </div>
    </>
  );
}
