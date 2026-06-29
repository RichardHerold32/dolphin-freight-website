import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  FileListIcon,
  GlobalIcon,
  TruckIcon,
  CheckboxCircleFillIcon,
  ArrowRightIcon
} from "../components/Icons";

const SERVICES_LIST = [
  {
    title: "Clearing & Forwarding",
    slug: "Clearing & Forwarding",
    desc: "As one of the leading Customs Clearing Agents in South South Africa, we specialize in customs clearance for import consignments across international ports and cargo/vehicle clearance cross-border. With extensive regulations knowledge and a commitment to on-time delivery, we ensure a smooth, hassle-free clearance process.",
    img: "/Dolhpin_Feight_IMG/ocean_freight.webp",
    features: [
      "Import customs clearance coordination",
      "Cross-border cargo & vehicle clearance",
      "Expert knowledge of customs regulations",
      "Seamless navigation through customs procedures"
    ],
    icon: FileListIcon
  },
  {
    title: "Freight & Logistics Services",
    slug: "Freight & Logistics",
    desc: "We lead the way as your premier choice for Clearing and Forwarding. With a wealth of experience and unparalleled expertise, we ensure smooth navigation through customs and logistics channels, guaranteeing the seamless movement of your cargo across borders.",
    img: "/Dolhpin_Feight_IMG/air_freight.webp",
    features: [
      "Clearing & Forwarding & Transporters",
      "Cross-Border cargo handling",
      "Car-Carriers & Abnormal loads",
      "Hazardous cargo logistics"
    ],
    icon: GlobalIcon
  },
  {
    title: "Transport & Auto Logistics",
    slug: "Transport & Auto Logistics",
    desc: "Your preferred service provider for Car Carrier Transport, offering ease, experience, and expertise in vehicle transportation. With a fleet of car carriers, we uphold the highest standards of safety and security, ensuring your vehicles are handled with protection.",
    img: "/Dolhpin_Feight_IMG/road_transport.webp",
    features: [
      "Specialized car carrier transport",
      "Dedicated auto logistics fleet",
      "Maximum vehicle safety & security",
      "Timely delivery & professional care"
    ],
    icon: TruckIcon
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Dolphin Freight";
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[45vh] overflow-hidden flex items-center">
        <img
          src="/Dolhpin_Feight_IMG/services_hero.webp"
          alt="Freight Services"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4 animate-fade-up">
              Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl animate-fade-up">
              Our Freight Services
            </h1>
            <p className="text-gray-200 max-w-xl text-lg drop-shadow animate-fade-up-delay">
              Comprehensive, secure, and reliable supply chain logistics designed to fit your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumbs />

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-20">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              End-to-end freight forwarding services tailored to meet the demands of modern supply chains.
            </p>
          </div>

          {/* Services Stack (Alternating Layout) */}
          <div className="space-y-24">
            {SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 0;
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.slug}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md group">
                      <img
                        src={service.img}
                        alt={service.title}
                        width={800}
                        height={533}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <ServiceIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {service.desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start">
                          <span className="text-emerald-600 text-base leading-none">
                            <CheckboxCircleFillIcon className="w-5 h-5 text-emerald-600" />
                          </span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        to={`/booking?service=${encodeURIComponent(service.slug)}`}
                        className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-md shadow-orange-600/10 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
                      >
                        Book This Service
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-blue-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl font-bold">Require a Custom Freight Quote?</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Whether it's a single container, an urgent air parcel, or continuous overland freight, our coordinators will find the best rate.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3.5 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
          >
            Get Started Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
