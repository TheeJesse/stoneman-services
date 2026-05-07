import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "./components/CTABanner";

export const metadata: Metadata = {
  title: "Stoneman Services | Professional Fence Staining & Deck Sealing in Middle Tennessee",
  description:
    "Your GO-TO professional staining and sealing company in Middle TN. Fences, decks, driveways — we protect and restore your property with expert care.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stoneman Services",
  description:
    "Professional fence staining, deck sealing, driveway cleaning, pressure washing, and wood restoration services in Middle Tennessee.",
  url: "https://stonemanservicestn.com",
  telephone: "615-403-8347",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hermitage",
    addressRegion: "TN",
    postalCode: "37076",
    addressCountry: "US",
  },
  areaServed: [
    "Nashville",
    "Franklin",
    "Brentwood",
    "Murfreesboro",
    "Hendersonville",
    "Mount Juliet",
    "Gallatin",
    "Lebanon",
    "Smyrna",
    "Spring Hill",
    "Middle Tennessee",
  ],
  openingHours: "Mo-Su 08:00-18:00",
  priceRange: "$$",
  image: "https://stonemanservicestn.com/logo.jpg",
  foundingDate: "2019",
};

const services = [
  {
    icon: "🌲",
    name: "Fence & Wood Structure Care",
    description:
      "Professional cleaning, staining, sealing, and restoration for fences, decks, pergolas, and more.",
  },
  {
    icon: "✨",
    name: "New Builds Staining",
    description:
      "Beautiful first-time finish coats to keep your new wood protected from day one.",
  },
  {
    icon: "🛣️",
    name: "Driveway Cleaning & Sealing",
    description:
      "Thorough cleaning, staining, and sealing for aggregate and blacktop driveways.",
  },
  {
    icon: "🔧",
    name: "Driveway Repair",
    description:
      "Minor crack filling, patching, and surface repairs for longer-lasting driveways.",
  },
  {
    icon: "🔄",
    name: "Full Restorations",
    description:
      "Complete refresh including cleaning, repairs, and protection for tired wood and hardscapes.",
  },
  {
    icon: "📅",
    name: "Maintenance Plans",
    description:
      "Scheduled cleanings and touch-ups to protect your investment year after year.",
  },
];

const whyUs = [
  {
    title: "We Care Like It's Our Own",
    body: "We treat your fence and property with the same pride we'd give our own home.",
  },
  {
    title: "Expert Local Knowledge",
    body: "We understand Middle Tennessee's tough weather and use proven methods for lasting results.",
  },
  {
    title: "Professional Craftsmanship",
    body: "Specialized training, best practices, and quality products mean a clean, even finish every time.",
  },
  {
    title: "No-Nonsense Service",
    body: "Straightforward communication, no ego, and full attention to detail.",
  },
  {
    title: "We Stand Behind Our Work",
    body: "Zero insurance claims, 100% satisfaction guarantee, and we never leave a customer unhappy.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "#a47551" }}>
              Middle Tennessee's Wood Care Pros
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Your GO-TO Professional Staining &amp; Sealing Company in Middle TN
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              From fences and decks to driveways — we protect and restore your property with professional care that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#8B5E3C" }}
              >
                Get a Free Estimate →
              </a>
              <a
                href="tel:6154038347"
                className="px-8 py-4 rounded-full font-bold border-2 border-white text-white text-base hover:bg-white hover:text-green-900 transition-colors"
              >
                📞 (615) 403-8347
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <Image
              src="/images/hero-fence-1.jpg"
              alt="Beautifully stained privacy fence in Nashville, TN"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1B4332" }}>
              Professional Wood Care &amp; Exterior Services in Middle Tennessee
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From fences and decks to driveways — we protect and restore your property with professional care.
            </p>
          </div>

          {/* Top CTA */}
          <div className="text-center mb-10">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              Get a Free Estimate →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="rounded-xl p-5 bg-white shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1B4332" }}>
                  {svc.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{svc.description}</p>
                <Link
                  href="/services"
                  className="mt-4 text-sm font-semibold hover:underline"
                  style={{ color: "#8B5E3C" }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Before/After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div>
              <Image
                src="/images/before-after-fence-1.jpg"
                alt="Fence staining before and after comparison"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              <p className="text-center text-sm text-gray-500">Fence Staining — Before &amp; After</p>
            </div>
            <div>
              <Image
                src="/images/hero-driveway.jpg"
                alt="Driveway sealing before and after"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              <p className="text-center text-sm text-gray-500">Driveway Sealing — Before &amp; After</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              Request Your Free Estimate →
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#1B4332" }}>
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1B4332" }}>
            A Father &amp; Son Team You Can Trust
          </h2>
          <p className="text-gray-600 text-base mb-6">
            We are Ron and Matt Stoneman. Since 2019, we've been protecting and beautifying fences, decks, pergolas, and driveways across Middle Tennessee — with the same care and pride we'd bring to our own property.
          </p>
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-full font-semibold text-white"
            style={{ backgroundColor: "#1B4332" }}
          >
            Our Story →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
