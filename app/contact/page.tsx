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
      <section className="py-16 px-4" style={{ backgroundColor: "#1B4332" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3">
            ⭐ Loved Our Work? Leave Us a Review!
          </h2>
          <p className="text-gray-300 text-center mb-10 text-sm md:text-base max-w-lg mx-auto">
            Your review helps our small business grow. Scan the QR code or tap the button below — it only takes a minute!
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            {/* QR Code */}
            <div className="flex-shrink-0">
              <a
                href="https://g.page/r/CYRqrRw2FiIAEBM/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/review-qr.png"
                  alt="Scan to leave a Google review for Stoneman Services"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-xl"
                />
              </a>
            </div>
            {/* Text + Button */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#1B4332" }}>
                  Scan with your phone camera
                </p>
                <p className="text-gray-500 text-sm">
                  Point your camera at the QR code to open the review page instantly.
                </p>
              </div>
              <div className="w-full border-t border-gray-200 my-2" />
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#1B4332" }}>
                  Or tap the link below
                </p>
                <a
                  href="https://g.page/r/CYRqrRw2FiIAEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full font-semibold text-white text-base transition-opacity hover:opacity-90 mt-2"
                  style={{ backgroundColor: "#8B5E3C" }}
                >
                  ⭐ Leave a Google Review
                </a>
              </div>
            </div>
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
