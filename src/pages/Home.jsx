export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/cargo_aerial.jpg"
        alt="Cargo Ship"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[50%_45%]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

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
          Dolphin Freight delivers seamless air, sea, and road logistics
          with real-time visibility and world-class tracking support.
        </p>
      </div>

      {/* Floating Flexport-Style Box */}
      <div className="absolute left-1/2 bottom-[-70px] transform -translate-x-1/2 w-[90%] md:w-[70%]">
        <div className="bg-white shadow-xl p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6">
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-brand-blue">
              Start Your Shipment
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Fast, reliable, and globally connected freight solutions.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/booking"
              className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-dark transition"
            >
              Book Now
            </a>

            <a
              href="/tracking"
              className="px-6 py-3 border border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition"
            >
              Track Shipment
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
