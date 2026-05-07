import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Areas We Serve – Middle Tennessee Fence Staining & Deck Sealing",
  description:
    "Stoneman Services serves all of Middle Tennessee including Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville, Mount Juliet, Gallatin, Lebanon, Smyrna, Spring Hill, and 38+ cities.",
};

const cities = [
  "Alexandria", "Antioch", "Arrington", "Ashland City", "Belle Meade",
  "Berry Hill", "Brentwood", "Clarksville", "College Grove", "Columbia",
  "Cookeville", "Dickson", "Donelson", "Eagleville", "Fairview",
  "Franklin", "Gallatin", "Goodlettsville", "Green Hills", "Hendersonville",
  "Hermitage", "Inglewood", "La Vergne", "Lebanon", "Madison",
  "Mount Juliet", "Murfreesboro", "Nashville", "Nolensville", "Old Hickory",
  "Portland", "Smyrna", "Spring Hill", "Springfield", "Thompson's Station",
  "Watertown", "White House",
];

const locationParagraphs = [
  {
    city: "Nashville, TN",
    content:
      "Stoneman Services provides professional fence staining, deck sealing, and driveway services throughout Nashville and surrounding neighborhoods. Our father-and-son team understands Nashville's humid summers and heavy rains — we use premium low-VOC products to protect your wood and hardscapes for years.",
  },
  {
    city: "Franklin, TN",
    content:
      "Looking for expert fence staining or deck restoration in Franklin? Stoneman Services regularly serves Franklin homeowners with thorough cleaning, high-quality staining, and sealing that stands up to Williamson County's weather. Beautiful, long-lasting results with friendly, reliable service.",
  },
  {
    city: "Brentwood, TN",
    content:
      "Stoneman Services proudly serves Brentwood with professional fence staining, deck sealing, pergola care, and driveway cleaning. We help Brentwood families protect their outdoor spaces from Tennessee's sun, rain, and humidity.",
  },
  {
    city: "Murfreesboro, TN",
    content:
      "Stoneman Services offers full fence staining, deck refinishing, and driveway repair services in Murfreesboro and Rutherford County. From new builds to restorations, our experienced team delivers quality work that homeowners trust.",
  },
  {
    city: "Hendersonville, TN",
    content:
      "Hendersonville homeowners rely on Stoneman Services for expert fence staining, deck sealing, and wood restoration. We make the short drive from Hermitage to deliver clean, professional results that enhance your property's curb appeal and protection.",
  },
  {
    city: "Mount Juliet, TN",
    content:
      "We provide convenient fence staining, deck care, and driveway sealing right here in Mount Juliet. As a local father-and-son team, Stoneman Services is proud to serve our neighbors with honest work and lasting results.",
  },
  {
    city: "Gallatin & Lebanon, TN",
    content:
      "Stoneman Services serves Gallatin, Lebanon, and surrounding Sumner & Wilson Counties with professional fence staining, deck sealing, and full restorations. Our work is built to handle Middle Tennessee's challenging climate.",
  },
  {
    city: "Spring Hill & Columbia, TN",
    content:
      "Stoneman Services travels to Spring Hill, Columbia, and nearby communities for larger fence, deck, and driveway projects. High-quality cleaning, staining, sealing, and minor repairs — done right the first time.",
  },
  {
    city: "Smyrna & La Vergne, TN",
    content:
      "Local Smyrna and La Vergne residents choose Stoneman Services for reliable fence staining, deck maintenance, and driveway sealing. Fast response and quality craftsmanship you can count on.",
  },
];

export default function AreasWeServePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Areas We Serve
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Stoneman Services is based in Hermitage, TN and proudly serves communities throughout Middle Tennessee.
          </p>
        </div>
      </section>

      {/* City List */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#1B4332" }}>
            Cities &amp; Towns We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-white rounded-lg px-4 py-3 text-sm font-medium text-center shadow-sm border border-gray-100"
                style={{ color: "#1B4332" }}
              >
                📍 {city}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm italic mb-4">And many more surrounding communities!</p>
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-sm">
              Not sure if we serve your area?{" "}
              <a href="/contact" className="font-semibold underline" style={{ color: "#8B5E3C" }}>
                Contact us
              </a>{" "}
              with your address and we'll let you know right away!
            </p>
          </div>
        </div>
      </section>

      {/* Location Paragraphs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Serving Your Community
          </h2>
          <div className="space-y-8">
            {locationParagraphs.map((loc) => (
              <div key={loc.city} className="rounded-xl p-6 border border-gray-100 shadow-sm" style={{ backgroundColor: "#FAF7F2" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1B4332" }}>
                  {loc.city}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{loc.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Serving your neighborhood — get your free estimate today." />
    </>
  );
}
