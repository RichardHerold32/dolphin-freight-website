import Breadcrumbs from "../components/Breadcrumbs";
export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/about-hero.webp"
          alt="About Dolphin Freight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Dolphin Freight
            </h1>
            <p className="text-gray-200 max-w-xl">
                Trusted Freight Partner Since 2020
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumbs />

      {/* ABOUT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* Company Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Dolphin Freight is a Durban-based logistics company established in
              2020, providing dependable freight forwarding and cargo movement
              solutions. We focus on building long-term partnerships through
              reliable operations, clear communication, and customer-focused
              service.
            </p>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Durban, South Africa</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  Unit 22, Micro Park,<br />
                  26 Crassula Road,<br />
                  Cornubia Industrial,<br />
                  Durban
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Year Established
                </h3>
                <p className="text-gray-600">2020</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Enterprise Size</h3>
                <p className="text-gray-600">Less than 10 employees</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@dolphinfreight.co.za"
                    className="hover:underline"
                  >
                    info@dolphinfreight.co.za
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Contact Numbers</h3>
                <p className="text-gray-600">
                  Tel: 031 015 5616<br />
                  Cell: 073 705 0062
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
