import type { Metadata } from "next";

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
            Contact Us
          </h1>
          <p className="text-gray-300 text-base">
            Ready for your free estimate? Give us a call, send a text, or fill out our quick form below.
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
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Ron Stoneman</p>
                <a
                  href="tel:6154038347"
                  className="text-2xl font-bold hover:underline"
                  style={{ color: "#1B4332" }}
                >
                  (615) 403-8347
                </a>
                <p className="text-gray-500 text-sm mt-1">Call or text anytime</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Matt Stoneman</p>
                <a
                  href="tel:6154796691"
                  className="text-2xl font-bold hover:underline"
                  style={{ color: "#1B4332" }}
                >
                  (615) 479-6691
                </a>
                <p className="text-gray-500 text-sm mt-1">Call or text anytime</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                <p className="font-semibold" style={{ color: "#1B4332" }}>Monday – Sunday</p>
                <p className="text-gray-600">8:00 AM – 6:00 PM</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Location</p>
                <p className="font-semibold" style={{ color: "#1B4332" }}>Hermitage, TN 37076</p>
                <p className="text-gray-600 text-sm mt-1">Serving all of Middle Tennessee</p>
              </div>
            </div>
          </div>

          {/* Jobber Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
              Request a Free Estimate
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm mb-5">
                Fill out our quick job request form and we'll get back to you, usually within a day or two.
              </p>

              {/* Jobber embed placeholder — replace src with your Jobber form URL */}
              <div
                className="w-full rounded-lg flex items-center justify-center text-center p-8 mb-4"
                style={{ backgroundColor: "#F0EBE3", minHeight: "350px" }}
              >
                <div>
                  <div className="text-4xl mb-3">📋</div>
                  <p className="font-semibold mb-2" style={{ color: "#1B4332" }}>Job Request Form</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Replace this placeholder with your Jobber embedded form.
                  </p>
                  <a
                    href="https://getjobber.com/get-quote/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full font-semibold text-white text-sm"
                    style={{ backgroundColor: "#8B5E3C" }}
                  >
                    Open Job Request Form →
                  </a>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400">
                Or call us directly — we're friendly and happy to answer questions!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area mention */}
      <section className="py-10 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            We serve Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, Mount Juliet, and all of Middle Tennessee.{" "}
            <a href="/areas-we-serve" className="font-semibold underline" style={{ color: "#1B4332" }}>
              See full service area →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
