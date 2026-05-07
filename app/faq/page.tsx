import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "FAQ – Fence Staining & Deck Sealing Questions Answered",
  description:
    "Answers to common questions about fence staining, deck sealing, driveway services, timing, pricing, and more from Stoneman Services in Middle Tennessee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you provide for fences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We professionally clean, brighten, stain, and seal wooden fences. This includes privacy fences, picket fences, and farm-style fences across Middle Tennessee.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire professionals instead of doing it myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our experienced crew handles all the hard work — thorough cleaning, proper prep, and even application. You get better, longer-lasting results without the mess, time, or guesswork.",
      },
    },
    {
      "@type": "Question",
      name: "How does Tennessee weather affect my fence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our hot, humid summers, heavy rains, and strong sun cause fading, mildew, cracking, and rot. Professional staining and sealing adds strong protection against moisture and UV damage.",
      },
    },
    {
      "@type": "Question",
      name: "What is your step-by-step process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a free on-site visit, clean the fence to remove dirt and mildew, let it dry, then apply premium stain and sealer for deep protection. We manage everything from start to finish, including cleanup.",
      },
    },
    {
      "@type": "Question",
      name: "Do you always clean the fence first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cleaning is a key part of our service. We use professional methods to remove buildup so the stain penetrates better and lasts longer.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to stain my fence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring and fall work great in Middle Tennessee. We can also schedule in milder winter or summer days as long as the weather is dry. We'll check the forecast for you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the job usually take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most homes take 1–3 days. We give you a clear timeline after your free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How soon after a new fence is built should I call you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For pressure-treated wood, wait a few weeks to a couple of months so the wood can dry. We'll inspect it and give you the best recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of stain and sealer do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We choose high-quality oil-based stains made for Southern climates. They penetrate deep, fight mildew, and protect against our local sun and rain.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pick the color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We bring color samples to your home so you can see what looks best with your house and yard.",
      },
    },
    {
      "@type": "Question",
      name: "How long will the results last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Middle Tennessee conditions, you can expect 3–5 years of strong protection with our professional application. We recommend checking it every few years.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We back our work with a clear warranty on labor and materials. Details are provided in your written estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on your fence's length, height, and condition. We offer free on-site estimates with honest, competitive pricing — no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We proudly serve Nashville, Franklin, Brentwood, Murfreesboro, Spring Hill, Columbia, and all of Middle Tennessee.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep it simple. Payment terms are explained upfront, with the balance due after you're happy with the finished job.",
      },
    },
    {
      "@type": "Question",
      name: "How do I care for my fence afterward?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gentle cleaning once or twice a year is usually enough. We can also offer maintenance visits to keep it looking great.",
      },
    },
    {
      "@type": "Question",
      name: "Will you protect my plants and yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use drop cloths and careful methods to protect your landscaping, lawn, and neighboring properties.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix fence problems too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle minor repairs like replacing boards or tightening posts as part of a full restoration.",
      },
    },
    {
      "@type": "Question",
      name: "What if it rains during the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We only apply stain on good drying days. If weather delays us, we'll reschedule quickly to protect the quality of the work.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call or fill out our short form online. We'll schedule a convenient time to visit your fence, answer questions, and give you a clear quote — usually within a day or two.",
      },
    },
  ],
};

const categories = [
  {
    title: "Our Fence Staining & Sealing Services",
    questions: [
      {
        q: "What services do you provide for fences?",
        a: "We professionally clean, brighten, stain, and seal wooden fences. This includes privacy fences, picket fences, and farm-style fences across Middle Tennessee.",
      },
      {
        q: "Why hire professionals instead of doing it myself?",
        a: "Our experienced crew handles all the hard work — thorough cleaning, proper prep, and even application. You get better, longer-lasting results without the mess, time, or guesswork.",
      },
      {
        q: "How does Tennessee weather affect my fence?",
        a: "Our hot, humid summers, heavy rains, and strong sun cause fading, mildew, cracking, and rot. Professional staining and sealing adds strong protection against moisture and UV damage.",
      },
      {
        q: "What is your step-by-step process?",
        a: "We start with a free on-site visit, clean the fence to remove dirt and mildew, let it dry, then apply premium stain and sealer for deep protection. We manage everything from start to finish, including cleanup.",
      },
      {
        q: "Do you always clean the fence first?",
        a: "Yes. Cleaning is a key part of our service. We use professional methods to remove buildup so the stain penetrates better and lasts longer.",
      },
    ],
  },
  {
    title: "Timing & Scheduling",
    questions: [
      {
        q: "When is the best time to stain my fence?",
        a: "Spring and fall work great in Middle Tennessee. We can also schedule in milder winter or summer days as long as the weather is dry. We'll check the forecast for you.",
      },
      {
        q: "How long does the job usually take?",
        a: "Most homes take 1–3 days. We give you a clear timeline after your free estimate.",
      },
      {
        q: "How soon after a new fence is built should I call you?",
        a: "For pressure-treated wood, wait a few weeks to a couple of months so the wood can dry. We'll inspect it and give you the best recommendation.",
      },
    ],
  },
  {
    title: "Products, Look & Protection",
    questions: [
      {
        q: "What kind of stain and sealer do you use?",
        a: "We choose high-quality oil-based stains made for Southern climates. They penetrate deep, fight mildew, and protect against our local sun and rain.",
      },
      {
        q: "Can I pick the color?",
        a: "Absolutely. We bring color samples to your home so you can see what looks best with your house and yard.",
      },
      {
        q: "How long will the results last?",
        a: "In Middle Tennessee conditions, you can expect 3–5 years of strong protection with our professional application. We recommend checking it every few years.",
      },
      {
        q: "Do you offer a warranty?",
        a: "Yes. We back our work with a clear warranty on labor and materials. Details are provided in your written estimate.",
      },
    ],
  },
  {
    title: "Pricing & Getting Started",
    questions: [
      {
        q: "How much does it cost?",
        a: "Pricing depends on your fence's length, height, and condition. We offer free on-site estimates with honest, competitive pricing — no hidden fees.",
      },
      {
        q: "What areas do you serve?",
        a: "We proudly serve Nashville, Franklin, Brentwood, Murfreesboro, Spring Hill, Columbia, and all of Middle Tennessee.",
      },
      {
        q: "Do I need to pay a deposit?",
        a: "We keep it simple. Payment terms are explained upfront, with the balance due after you're happy with the finished job.",
      },
    ],
  },
  {
    title: "After the Job & Extra Help",
    questions: [
      {
        q: "How do I care for my fence afterward?",
        a: "Gentle cleaning once or twice a year is usually enough. We can also offer maintenance visits to keep it looking great.",
      },
      {
        q: "Will you protect my plants and yard?",
        a: "We use drop cloths and careful methods to protect your landscaping, lawn, and neighboring properties.",
      },
      {
        q: "Can you fix fence problems too?",
        a: "Yes. We handle minor repairs like replacing boards or tightening posts as part of a full restoration.",
      },
      {
        q: "What if it rains during the project?",
        a: "We only apply stain on good drying days. If weather delays us, we'll reschedule quickly to protect the quality of the work.",
      },
      {
        q: "How do I get a free estimate?",
        a: "Call or fill out our short form online. We'll schedule a convenient time to visit your fence, answer questions, and give you a clear quote — usually within a day or two.",
      },
    ],
  },
];

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
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300">
            Everything you need to know about our fence staining, deck sealing, and driveway services in Middle Tennessee.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b-2" style={{ color: "#1B4332", borderColor: "#8B5E3C" }}>
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

      <CTABanner heading="Still have questions? We'd love to help." />
    </>
  );
}
