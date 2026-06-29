import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileListIcon,
  RouteIcon,
  CheckboxCircleIcon,
  GlobalIcon,
  EyeIcon,
  CustomerService2Icon,
  StarIcon,
  TruckIcon,
  ArrowRightIcon
} from "../components/Icons";

const STEPS = [
  {
    step: 1,
    title: "Request a Quote",
    desc: "Share your shipment details including origin, destination, and cargo type using our simple quote form.",
    icon: FileListIcon
  },
  {
    step: 2,
    title: "We Plan the Shipment",
    desc: "Our logistics experts select the best routes, carrier schedules, and customs clearance procedures.",
    icon: RouteIcon
  },
  {
    step: 3,
    title: "Track & Deliver",
    desc: "Monitor your cargo in real-time until it safely reaches its final destination with zero hassles.",
    icon: CheckboxCircleIcon
  }
];

const FEATURES = [
  {
    title: "Global Network",
    desc: "Connecting you to key global trade lanes with reliable partner carriers and seamless customs clearances worldwide.",
    icon: GlobalIcon,
    color: "text-blue-600 bg-blue-100/60"
  },
  {
    title: "End-to-End Visibility",
    desc: "Monitor your cargo's journey in real-time with continuous transit updates and clear tracking checkpoints.",
    icon: EyeIcon,
    color: "text-purple-600 bg-purple-100/60"
  },
  {
    title: "Dedicated Support",
    desc: "Get 24/7 assistance from our logistics specialists, ensuring prompt resolutions and highly responsive service.",
    icon: CustomerService2Icon,
    color: "text-emerald-600 bg-emerald-100/60"
  }
];

const STATS = [
  { label: "Years of Excellence", val: "5+" },
  { label: "Shipments Delivered", val: "10K+" },
  { label: "Delivery Success Rate", val: "99.4%" },
  { label: "Global Agents & Partners", val: "50+" }
];

const SERVICES_PREVIEW = [
  {
    title: "Clearing & Forwarding",
    icon: FileListIcon,
    desc: "Customs clearance for import consignments and vehicle/cargo clearance cross-border."
  },
  {
    title: "Freight & Logistics Services",
    icon: GlobalIcon,
    desc: "Premier forwarding, transporters, car-carriers, abnormal loads, and hazardous cargo logistics."
  },
  {
    title: "Transport & Auto Logistics",
    icon: TruckIcon,
    desc: "Vehicle transportation with a fleet of car carriers, safety standards, and timely deliveries."
  }
];

const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Operations Director, TechFlow Ltd",
    quote: "Dolphin Freight transformed our distribution. Their air freight services are exceptionally prompt, and the updates we receive keep us at ease.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Supply Chain Manager, Peak Retail",
    quote: "We use their ocean freight services for bulk imports. Their pricing is highly competitive, and their Durban team handles port clearance seamlessly.",
    rating: 5
  },
  {
    name: "Devon Govender",
    role: "CEO, SA Manufacturing CC",
    quote: "Excellent cross-border road logistics. We have been working with Dolphin Freight since 2021, and they have never missed a critical delivery window.",
    rating: 5
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "Dolphin Freight | Global Freight & Logistics Solutions";
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[calc(100vh-5.5rem)] overflow-hidden flex items-center">
        {/* Background Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 768px)"
            srcSet="/Dolhpin_Feight_IMG/homepage_hero_mobile.webp"
            type="image/webp"
          />
          <img
            src="/Dolhpin_Feight_IMG/homepage_hero.webp"
            alt="Cargo Ship"
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-[50%_45%]"
          />
        </picture>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        {/* TEXT BLOCK */}
        <div className="relative max-w-7xl mx-auto w-full px-6 py-12 md:py-16 lg:py-20 z-10">
          <div className="max-w-2xl">
            {/* Tagline */}
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4 animate-fade-up">
              Reliable Global Logistics
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl animate-fade-up">
              Move Cargo Anywhere.
              <span className="block mt-2 text-blue-400">
                Global Freight, Simplified.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 leading-relaxed drop-shadow animate-fade-up-delay">
              Dolphin Freight delivers seamless air, sea, and road logistics with
              real-time visibility, competitive rates, and world-class tracking support.
            </p>

            {/* Hero CTA */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4 animate-fade-up-delay">
              <Link
                to="/booking"
                className="inline-flex items-center px-7 py-3 text-white font-semibold rounded-lg bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Get a Quote
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-7 py-3 text-white font-semibold rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              How It Works
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              A simple, transparent process to move your cargo safely and efficiently.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white">
                  <div className="absolute -top-4 left-8 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Why Choose Dolphin Freight
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Trusted logistics expertise focused on reliability, transparency, and global reach.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((item) => {
              const FeatureIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                    <FeatureIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400">
                  {stat.val}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Freight Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Flexible freight solutions designed to move cargo efficiently across the globe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES_PREVIEW.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-blue-100"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <ServiceIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Hear from the businesses that rely on us to manage their supply chain operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">{t.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-blue-950 to-slate-950" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Move Your Cargo?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-base sm:text-lg">
            Reach out to our logistics experts today for custom freight routing options and pricing.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3.5 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRightIcon className="ml-2 w-5 h-5 text-blue-900" />
          </Link>
        </div>
      </section>
    </>
  );
}
