export default function Services() {
  return (
    <section className="pt-40 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Our Core Freight Services
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            End-to-end freight forwarding solutions designed for reliability, speed, and global reach.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100">
            <img src="/icons/air.svg" alt="Air Freight" className="w-14 mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue">Air Freight</h3>
            <p className="text-gray-600 mt-2">
              Fastest global delivery for time-critical shipments, backed by top-tier airline partners.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100">
            <img src="/icons/ship.svg" alt="Ocean Freight" className="w-14 mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue">Ocean Freight</h3>
            <p className="text-gray-600 mt-2">
              Cost-efficient bulk shipping with full-container (FCL) and less-than-container (LCL) options.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100">
            <img src="/icons/truck.svg" alt="Road Transport" className="w-14 mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue">Road Transport</h3>
            <p className="text-gray-600 mt-2">
              Reliable domestic & cross-border trucking solutions with real-time GPS visibility.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100">
            <img src="/icons/warehouse.svg" alt="Warehousing" className="w-14 mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue">Warehousing</h3>
            <p className="text-gray-600 mt-2">
              Secure storage, consolidation, inventory control, and last-mile distribution services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
