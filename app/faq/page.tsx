import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/faq.json";

export const metadata: Metadata = {
  title: "FAQ – Fence Staining & Deck Sealing Questions Answered",
  description:
    "Answers to common questions about fence staining, deck sealing, driveway services, timing, pricing, and more from Stoneman Services in Middle Tennessee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.categories.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          {content.categories.map((cat) => (
            <div key={cat.title}>
              <h2
                className="text-xl font-bold mb-6 pb-2 border-b-2"
                style={{ color: "#1B4332", borderColor: "#8B5E3C" }}
              >
                {cat.title}
              </h2>
              <div className="space-y-5">
                {cat.questions.map((item) => (
                  <div key={item.q} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-base mb-2" style={{ color: "#1B4332" }}>
                      Q: {item.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner heading={content.cta_banner_heading} />
    </>
  );
}
