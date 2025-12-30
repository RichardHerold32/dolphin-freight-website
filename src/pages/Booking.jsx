import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    serviceType: "",
    cargoType: "",
    weight: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Booking Request:", form);
    alert("Your booking request has been submitted.");
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img
          src="/booking-hero.webp"
          alt="Book Shipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Shipment
            </h1>
            <p className="text-gray-200 max-w-xl">
              Share your shipment details and our logistics experts will take
              care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumbs />

      {/* BOOKING FORM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-8">
              Shipment Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              {/* Route */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={form.origin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>

              {/* Service Type & Cargo Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Type of Freight Service
                  </label>
                  <select
                    name="serviceType"
                    required
                    value={form.serviceType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Select service</option>
                    <option>Air Freight</option>
                    <option>Ocean Freight (FCL)</option>
                    <option>Ocean Freight (LCL)</option>
                    <option>Road Transport</option>
                    <option>Warehousing & Distribution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Cargo Type
                  </label>
                  <select
                    name="cargoType"
                    value={form.cargoType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Select cargo type</option>
                    <option>General Cargo</option>
                    <option>Perishable</option>
                    <option>Hazardous</option>
                    <option>Oversized</option>
                  </select>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Estimated Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="
                    px-8 py-3
                    border border-gray-900
                    rounded-lg
                    font-semibold
                    text-gray-900
                    transition
                    hover:bg-gray-900
                    hover:text-white
                    active:scale-[0.97]
                  "
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
