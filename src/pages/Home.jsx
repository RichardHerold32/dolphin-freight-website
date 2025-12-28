export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="cargo_vertical.webp"
          alt="Cargo Ship"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[50%_45%]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* TEXT BLOCK */}
        <div
          className="
            relative max-w-7xl mx-auto h-full px-6
            flex flex-col justify-center
            items-start text-left
            md:items-end md:text-right
            pt-28 md:pt-0
          "
        >
          {/* Heading */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-6xl
              font-bold text-white
              leading-snug md:leading-tight
              drop-shadow-xl
              max-w-sm sm:max-w-md md:max-w-3xl
              animate-fade-up
            "
          >
            Move Cargo Anywhere.
            <span className="block mt-2 md:mt-0">
              Global Freight, Simplified.
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-base sm:text-lg md:text-xl
              text-gray-200
              max-w-xs sm:max-w-sm md:max-w-xl
              mt-5
              leading-relaxed
              drop-shadow
              animate-fade-up-delay
            "
          >
            Dolphin Freight delivers seamless air, sea, and road logistics with
            real-time visibility and world-class tracking support.
          </p>

          {/* Hero CTA – transparent */}
          <div className="mt-10 w-full flex justify-start md:justify-end">
            <a
              href="/booking"
              className="
                inline-flex items-center
                px-7 py-3
                text-white
                font-semibold
                rounded-lg
                border border-white/70
                bg-transparent
                backdrop-blur-sm
                transition-all duration-300 ease-out
                hover:bg-white/10
                hover:border-white
                hover:-translate-y-0.5
                active:scale-[0.97]
              "
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A simple, transparent process to move your cargo safely and efficiently.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === 1
                    ? "Request a Quote"
                    : step === 2
                    ? "We Plan the Shipment"
                    : "Track & Deliver"}
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  {step === 1
                    ? "Share your shipment details including origin, destination, and cargo type."
                    : step === 2
                    ? "Our logistics experts choose the best routes, carriers, and schedules."
                    : "Track your shipment in real time until it reaches its destination."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Dolphin Freight
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Trusted logistics expertise focused on reliability, transparency,
              and global reach.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {["Global Network", "End-to-End Visibility", "Dedicated Support"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600">
                    Experienced logistics professionals handling every shipment
                    with care and accountability.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Freight Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Flexible freight solutions designed to move cargo efficiently across the globe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Air Freight", "/icons/air.svg"],
              ["Ocean Freight", "/icons/ship.svg"],
              ["Road Transport", "/icons/truck.svg"],
              ["Warehousing", "/icons/warehouse.svg"],
            ].map(([title, icon]) => (
              <div
                key={title}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <img src={icon} alt={title} className="w-12 mb-4" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Reliable logistics solutions tailored for your business.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/services"
              className="
                inline-flex items-center
                px-6 py-3
                border border-gray-900
                text-gray-900
                font-semibold
                rounded-lg
                hover:bg-gray-900
                hover:text-white
                transition
              "
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
