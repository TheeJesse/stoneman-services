import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4332" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Stoneman Services</h3>
            <p className="text-sm text-gray-300 mb-4">
              Professional fence staining, deck sealing, and driveway care across Middle Tennessee. Family owned since 2019.
            </p>
            <p className="text-sm text-gray-400">Hermitage, TN 37076</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3 text-yellow-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="font-semibold mb-3 text-yellow-200">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-5">
              <li>
                <a href="tel:6154038347" className="hover:text-white transition-colors">
                  📞 Ron: <strong>(615) 403-8347</strong>
                </a>
              </li>
              <li>
                <a href="tel:6154796691" className="hover:text-white transition-colors">
                  📞 Matt: <strong>(615) 479-6691</strong>
                </a>
              </li>
              <li className="text-gray-400">Mon–Sun: 8:00 AM – 6:00 PM</li>
            </ul>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 rounded-full font-semibold text-white text-sm"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              Get Free Estimate →
            </a>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Stoneman Services. All rights reserved. | Hermitage, TN | Serving all of Middle Tennessee</p>
        </div>
      </div>
    </footer>
  );
}
