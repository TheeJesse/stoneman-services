import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

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

const whyFamilies = [
  "We treat every property like it's our own",
  "Clear communication with no ego or surprises",
  "Professional training and proven methods built for Middle Tennessee weather",
  "Strong focus on quality, satisfaction, and fair pricing",
  "A true family business — we genuinely enjoy working together and building lasting customer relationships",
];

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
            Stoneman Services — A Father &amp; Son Team Serving Middle Tennessee
          </h1>
          <p className="text-gray-300 text-lg">
            Honest work. Quality results. Since 2019.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <Image
              src="/images/before-after-fence-team.jpg"
              alt="Ron and Matt Stoneman — Stoneman Services"
              width={400}
              height={400}
              className="rounded-xl shadow-lg max-w-sm mx-auto w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Our Story</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                We are Ron and Matt Stoneman, a father-and-son team who own and operate Stoneman Services. Since 2019 we have been helping homeowners in Nashville, Franklin, Brentwood, Murfreesboro, and surrounding areas protect and beautify their fences, decks, pergolas, and driveways.
              </p>
              <p>
                Ron started the company with a simple goal: deliver honest, high-quality wood care the way he cares for his own property. With decades of entrepreneurial experience and a lifelong love for the outdoors, Ron brings strong craftsmanship and integrity to every job. He is inspired by his 30-year friendship with the owner of MidCenter Fence Company — a relationship built on family values, hard work, and doing things the right way. Many of our fence and deck projects still come through trusted referrals from that friendship.
              </p>
              <p>
                Matt joined as a full partner after years of working alongside his dad. He learned the value of hard work early — starting his own lawn care business at age 13 — and continues to run specialized landscaping services. Matt's passion for gardening, environmental responsibility, and healthy living led him naturally to wood care. By protecting existing wood with low-VOC products, we help reduce the need for new lumber. It's a win for our customers and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Why Families Choose Us
          </h2>
          <ul className="space-y-4">
            {whyFamilies.map((item) => (
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
            From the first estimate to the final walkthrough, our goal is simple: do excellent work, earn your trust, and leave you smiling. We love what we do, and it shows in the results.
          </p>
          <p className="font-semibold text-lg mb-8" style={{ color: "#1B4332" }}>
            Ready to give your fence or driveway the care it deserves?
          </p>
        </div>
      </section>

      <CTABanner heading="Contact us today for a free estimate." />
    </>
  );
}
