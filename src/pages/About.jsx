import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  CalendarIcon,
  MapPinIcon,
  TimeIcon,
  CompassIcon,
  EyeIcon,
  ShieldCheckIcon,
  PulseIcon,
  LightbulbIcon,
  UserHeartIcon
} from "../components/Icons";

const COMPANY_PROFILE = [
  { label: "Year Established", val: "2020", icon: CalendarIcon },
  { label: "Location Head Office", val: "Durban, South Africa", icon: MapPinIcon },
  { label: "Operating Hours", val: "Mon - Fri: 08:00 - 17:00", icon: TimeIcon }
];

const CORE_VALUES = [
  {
    title: "Integrity",
    desc: "Honest, direct, and completely transparent communication in every quote and shipment.",
    icon: ShieldCheckIcon,
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Reliability",
    desc: "Upholding shipping timetables, carrier guidelines, and securing cargo packaging.",
    icon: PulseIcon,
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "Innovation",
    desc: "Utilizing modern cargo tracking solutions to supply clients with real-time transit details.",
    icon: LightbulbIcon,
    color: "text-amber-600 bg-amber-50"
  },
  {
    title: "Client-Centricity",
    desc: "Adapting freight routing to optimize transport expenses and align with client timelines.",
    icon: UserHeartIcon,
    color: "text-emerald-600 bg-emerald-50"
  }
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Dolphin Freight";
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[45vh] overflow-hidden flex items-center">
        <img
          src="/Dolhpin_Feight_IMG/about_hero.webp"
          alt="About Dolphin Freight"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4 animate-fade-up">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl animate-fade-up">
              About Dolphin Freight
            </h1>
            <p className="text-gray-200 max-w-xl text-lg drop-shadow animate-fade-up-delay">
              Trusted Logistics Partner Connecting You to Global Trade Lanes Since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumbs />

      {/* ABOUT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Who We Are & Sidebar Details */}
          <div className="grid md:grid-cols-3 gap-16 mb-24">
            
            {/* Left Content Column */}
            <div className="md:col-span-2 space-y-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Dolphin Freight is a dynamic logistics solutions provider based in South Africa, offering a
                comprehensive range of services to meet the diverse needs of our clients. With a dedicated team
                of professionals and a robust infrastructure, we pride ourselves on delivering reliable, cost-effective,
                and trustworthy services that exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                At Dolphin Freight, we embrace a positive “can do” attitude and take ownership of every aspect of our
                operations, ensuring that each member of our team plays a vital role in achieving our mission and vision.
              </p>
            </div>

            {/* Right Details Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-sm h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Company Profile
              </h3>
              
              <div className="space-y-5">
                {COMPANY_PROFILE.map((item, idx) => {
                  const ProfileIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg flex-shrink-0">
                        <ProfileIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-gray-800 font-medium mt-0.5">{item.val}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="bg-blue-950 text-white rounded-2xl p-10 md:p-12 mb-24 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
              {[
                { label: "Years in Business", val: "5+" },
                { label: "Completed Shipments", val: "10K+" },
                { label: "Customs Clearances", val: "100%" },
                { label: "Durban Office Support", val: "24/7" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-extrabold text-blue-400">{item.val}</p>
                  <p className="text-xs md:text-sm text-gray-300 font-semibold uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Mission */}
            <div className="bg-blue-50/50 rounded-2xl border border-blue-100/60 p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <CompassIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our mission at Dolphin Freight is to strive for customer delight and win the confidence of all our potential clients through reliable, cost-effective, and trustworthy services. We are committed to exceeding our customers’ expectations and building long-term relationships based on trust and mutual respect.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50/50 rounded-2xl border border-purple-100/60 p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                At Dolphin Freight, we share a passion for excellence and a positive “can do” attitude that exceeds expectations. We rely on responsibility and proud ownership to achieve our vision of becoming the preferred Clearing & Forwarding, Transport, and Car Carrier services company in South Africa. By consistently delivering exceptional service and value to our clients, we aim to set new standards of excellence in the logistics industry.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Principles</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Core Values</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                How we operate and fulfill our commitments to partners and cargo safety.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {CORE_VALUES.map((val) => {
                const ValueIcon = val.icon;
                return (
                  <div key={val.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-md hover:bg-white hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${val.color}`}>
                      <ValueIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
