import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/about.json";

export const metadata: Metadata = {
  title: "About Us – Father & Son Team Serving Middle Tennessee",
  description:
    "Learn about Ron and Matt Stoneman — a father-and-son team delivering professional fence staining, deck sealing, and driveway services across Middle Tennessee since 2019.",
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
  openingHours: "Mo-Su 08:00-18:00",
  priceRange: "$$",
  image: "https://stonemanservicestn.com/logo.jpg",
  foundingDate: "2019",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300 text-lg">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <Image
              src={content.team_image}
              alt={content.team_image_alt}
              width={400}
              height={400}
              className="rounded-xl shadow-lg max-w-sm mx-auto w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
              {content.story_heading}
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              {content.story_paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            {content.why_families_heading}
          </h2>
          <ul className="space-y-4">
            {content.why_families.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="text-xl mt-0.5" style={{ color: "#1B4332" }}>✅</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="py-14 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {content.closing_text}
          </p>
          <p className="font-semibold text-lg mb-8" style={{ color: "#1B4332" }}>
            {content.closing_cta}
          </p>
        </div>
      </section>

      <CTABanner heading={content.cta_banner_heading} />
    </>
  );
}
