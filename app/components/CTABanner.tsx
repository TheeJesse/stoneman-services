export default function CTABanner({ heading = "Ready to protect and improve your property?" }: { heading?: string }) {
  return (
    <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
      <p className="text-gray-300 mb-7 max-w-xl mx-auto text-sm md:text-base">
        Call us or fill out our quick form — we'll schedule a free on-site estimate, usually within a day or two.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8B5E3C" }}
        >
          Get a Free Estimate →
        </a>
        <a
          href="tel:6154038347"
          className="px-7 py-3 rounded-full font-semibold border-2 border-white text-white text-sm hover:bg-white hover:text-green-900 transition-colors"
        >
          📞 Call Ron: (615) 403-8347
        </a>
      </div>
    </section>
  );
}
