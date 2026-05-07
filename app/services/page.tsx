import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

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
    description:
      "Professional cleaning, staining, and sealing for privacy fences, picket fences, and farm fences.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deck & Pergola Care",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Deck and Pergola Staining and Sealing",
    areaServed: "Middle Tennessee",
    description:
      "Expert cleaning, staining, sealing, and care for decks, pergolas, and other outdoor wood structures.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Driveway Cleaning & Sealing",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Driveway Services",
    areaServed: "Middle Tennessee",
    description:
      "Cleaning, staining, sealing, and minor crack repair for aggregate and blacktop driveways.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pressure Washing",
    provider: { "@type": "LocalBusiness", name: "Stoneman Services" },
    serviceType: "Pressure Washing",
    areaServed: "Middle Tennessee",
    description:
      "Professional pressure washing for fences, decks, driveways, and exterior surfaces.",
  },
];

const woodServices = [
  {
    name: "Fence Staining & Sealing",
    desc: "We clean, brighten, and apply high-quality stain and sealer to privacy fences, picket fences, and farm fences. This protects the wood and gives it a fresh, even finish.",
    img: "/images/hero-fence-cedar.jpg",
  },
  {
    name: "Deck & Pergola Care",
    desc: "Full cleaning, staining, and sealing for decks, pergolas, arbors, and other outdoor wood structures. We make your outdoor living spaces look beautiful and stay protected.",
    img: "/images/hero-deck-1.jpg",
  },
  {
    name: "New Build Stain Finishes",
    desc: "Perfect first-time staining for newly installed fences, decks, and wood structures. We help you choose the right color and finish for long-lasting beauty.",
    img: "/images/hero-fence-deck-combo.jpg",
  },
  {
    name: "Maintenance Coats & Cleaning",
    desc: "Regular maintenance keeps your wood in top condition. We provide yearly or bi-yearly cleaning and fresh maintenance coats to extend the life of your fence or deck.",
    img: "/images/action-staining-railing.jpg",
  },
  {
    name: "Full Restorations & Minor Repairs",
    desc: "We restore older or weathered wood structures. This includes deep cleaning, minor board replacement, tightening hardware, and complete refinishing so your fence or deck looks like new again.",
    img: "/images/before-after-deck-1.jpg",
  },
];

const driveServices = [
  {
    name: "Driveway Cleaning & Brightening",
    desc: "We thoroughly clean aggregate and blacktop driveways to remove dirt, stains, mildew, and tire marks for a fresh appearance.",
  },
  {
    name: "Aggregate Driveway Staining & Sealing",
    desc: "Professional staining and sealing that protects your gravel-style driveway from water damage, UV fading, and wear.",
  },
  {
    name: "Blacktop / Asphalt Driveway Sealing",
    desc: "High-quality sealing that extends the life of your asphalt driveway and gives it a clean, dark finish.",
  },
  {
    name: "Driveway Crack Repair & Patching",
    desc: "We fill minor cracks and patch small damaged areas to prevent bigger problems and keep your driveway looking smooth and well-maintained.",
  },
];

const process = [
  {
    n: "1",
    title: "Free On-Site Estimate",
    body: "We visit your property, inspect the fence/driveway, and give you clear recommendations and pricing.",
  },
  {
    n: "2",
    title: "Thorough Cleaning",
    body: "We remove dirt, mildew, and old finishes so new stain or sealer bonds properly.",
  },
  {
    n: "3",
    title: "Repairs (if needed)",
    body: "Minor fixes are completed before finishing.",
  },
  {
    n: "4",
    title: "Professional Application",
    body: "We apply premium products using the best methods for even coverage and deep protection.",
  },
  {
    n: "5",
    title: "Final Walkthrough",
    body: "We clean up the site and make sure you're 100% happy with the results.",
  },
];

export default function ServicesPage() {
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
            Our Services – Professional Fence, Deck &amp; Driveway Care in Middle Tennessee
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-7">
            We provide expert cleaning, staining, sealing, and restoration services for wood structures and driveways across Nashville, Franklin, Brentwood, Murfreesboro, and all of Middle Tennessee.
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Our work is built for our local climate — protecting against heavy rain, high humidity, and strong sun so your property looks great and lasts longer.
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
            {woodServices.map((svc, i) => (
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
            {driveServices.map((svc) => (
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
            Our 5-Step Process
          </h2>
          <div className="space-y-6">
            {process.map((step) => (
              <div key={step.n} className="flex gap-5 items-start bg-white rounded-xl p-5 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {step.n}
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
            {[
              "Tailored for Middle Tennessee weather",
              "Experienced crew and quality materials",
              "Clear communication and no surprises",
              "Satisfaction guaranteed",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span style={{ color: "#1B4332" }}>✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner heading="Ready to protect and improve your property?" />

      {/* FAQ link */}
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
