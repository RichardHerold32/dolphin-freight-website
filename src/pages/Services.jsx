export default function Services() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/services-hero.webp"
          alt="Freight Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Freight Services
            </h1>
            <p className="text-gray-200 max-w-xl">
              Comprehensive logistics solutions designed to move cargo
              efficiently, securely, and on schedule across global trade lanes.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="pt-24 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              End-to-end freight forwarding services tailored to meet the
              demands of modern supply chains.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-12 md:grid-cols-2">

            {/* Air Freight */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="/air-freight.webp"
                alt="Air Freight"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Air Freight
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When speed matters most, our air freight solutions deliver.
                  We partner with leading airlines to ensure priority handling,
                  fast transit times, and complete shipment visibility for
                  time-critical cargo.
                </p>
              </div>
            </div>

            {/* Ocean Freight */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="/sea-freight.webp"
                alt="Ocean Freight"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Ocean Freight
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cost-effective and reliable shipping solutions for both
                  full-container (FCL) and less-than-container (LCL) cargo.
                  We manage carrier selection, routing, and documentation
                  across global trade routes.
                </p>
              </div>
            </div>

            {/* Road Transport */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="/road-transport.webp"
                alt="Road Transport"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Road Transport
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From local distribution to cross-border trucking, our road
                  transport network ensures dependable cargo movement with
                  optimized routing, real-time tracking, and flexible
                  scheduling.
                </p>
              </div>
            </div>

            {/* Warehousing */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="/warehousing.webp"
                alt="Warehousing & Distribution"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Warehousing & Distribution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure storage, inventory control, consolidation, and
                  last-mile distribution services designed to streamline
                  logistics operations and reduce handling time across your
                  supply chain.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
