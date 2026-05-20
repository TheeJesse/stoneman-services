import type { Metadata } from "next";
import content from "../../content/pages/contact.json";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Estimate from Stoneman Services",
  description:
    "Contact Stoneman Services for a free on-site estimate in Middle Tennessee. Call Ron at (615) 403-8347 or Matt at (615) 479-6691, or fill out our online job request form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300 text-base">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
              Get In Touch
            </h2>
            <div className="space-y-6">
              {content.contacts.map((contact) => (
                <div key={contact.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{contact.name}</p>
                  <a
                    href={`tel:${contact.phone.replace(/-/g, "")}`}
                    className="text-2xl font-bold hover:underline"
                    style={{ color: "#1B4332" }}
                  >
                    ({contact.phone})
                  </a>
                  <p className="text-gray-500 text-sm mt-1">{contact.note}</p>
                </div>
              ))}

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                <p className="font-semibold" style={{ color: "#1B4332" }}>{content.hours_label}</p>
                <p className="text-gray-600">{content.hours_detail}</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Location</p>
                <p className="font-semibold" style={{ color: "#1B4332" }}>{content.location_city}</p>
                <p className="text-gray-600 text-sm mt-1">{content.location_note}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
              {content.form_heading}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm mb-5">
                {content.form_intro}
              </p>

              <iframe
                src={content.form_url}
                className="w-full rounded-lg border-0"
                style={{ minHeight: "600px" }}
                title="Request a Free Estimate"
              />

              <p className="text-center text-xs text-gray-400">
                Or call us directly — we&apos;re friendly and happy to answer questions!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Us a Review */}
      <section className="py-14 px-4 bg-white" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1B4332" }}>
            Love Our Work? Leave Us a Review!
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Scan the QR code below or click the link to leave us a Google review. It only takes a minute and means the world to our small business!
          </p>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/review-qr.png"
              alt="Scan to leave a Google review for Stoneman Services"
              className="w-48 h-48 rounded-xl shadow-md bg-white p-2"
            />
            <a
              href="https://g.page/r/CYRqrRw2FilAEBI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              ⭐ Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Service Area mention */}
      <section className="py-10 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            {content.service_area_note}{" "}
            <a href="/areas-we-serve" className="font-semibold underline" style={{ color: "#1B4332" }}>
              See full service area →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
