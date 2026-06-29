import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import FormField from "../components/FormField";
import SelectField from "../components/SelectField";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ErrorWarningIcon } from "../components/Icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  serviceType: "",
  cargoType: "",
  weight: "",
  message: "",
};

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(() => {
    const queryService = searchParams.get("service") || "";
    return { ...INITIAL_STATE, serviceType: queryService };
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    document.title = "Book a Shipment | Dolphin Freight";
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!EMAIL_RE.test(form.email)) newErrors.email = "Valid email address is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.serviceType) newErrors.serviceType = "Select a freight service";
    if (!form.origin.trim()) newErrors.origin = "Origin city/port is required";
    if (!form.destination.trim()) newErrors.destination = "Destination city/port is required";
    if (!form.weight || Number(form.weight) <= 0) newErrors.weight = "Enter a valid cargo weight";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      // Simulate network request delay for production demonstration to client
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // reset form
      setForm(INITIAL_STATE);
      setErrors({});

      // redirect to success page
      navigate("/booking-success");
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[18vh] overflow-hidden flex items-center">
        <img
          src="/Dolhpin_Feight_IMG/booking_hero.webp"
          alt="Book Shipment"
          width={1536}
          height={1024}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        <div className="relative max-w-7xl mx-auto w-full px-6 flex items-center z-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-xl animate-fade-up">
              Book Your Shipment
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* FORM */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6 md:p-8">
            
            {/* Visual Step Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">
                Shipment Information Form
              </h2>
              <span className="inline-flex gap-2 text-[10px] md:text-xs font-semibold text-gray-400">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-100">1. Contact Details</span>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded border border-purple-100">2. Route Info</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded border border-emerald-100">3. Cargo Details</span>
              </span>
            </div>

            {/* Submission Error Banner */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3">
                <ErrorWarningIcon className="w-6 h-6 flex-shrink-0 text-red-600" />
                <div>
                  <p className="font-bold">Submission Failed</p>
                  <p className="text-xs text-red-700 mt-0.5">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* SECTION 1: CONTACTS */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  1. Contact Information
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <FormField
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    variant="compact"
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    variant="compact"
                  />

                  <FormField
                    label="Phone Number"
                    name="phone"
                    placeholder="e.g. +27 73 705 0062"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    variant="compact"
                  />
                </div>
              </div>

              {/* SECTION 2: ROUTE */}
              <div className="pt-4 border-t border-gray-150 space-y-3">
                <h3 className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                  2. Route Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    label="Origin (City, Port, or Address)"
                    name="origin"
                    placeholder="e.g. Durban Port, South Africa"
                    value={form.origin}
                    onChange={handleChange}
                    error={errors.origin}
                    variant="compact"
                  />

                  <FormField
                    label="Destination (City, Port, or Address)"
                    name="destination"
                    placeholder="e.g. London Heathrow, UK"
                    value={form.destination}
                    onChange={handleChange}
                    error={errors.destination}
                    variant="compact"
                  />
                </div>
              </div>

              {/* SECTION 3: CARGO */}
              <div className="pt-4 border-t border-gray-150 space-y-3">
                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  3. Cargo specifications
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <SelectField
                    label="Type of Freight Service"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    error={errors.serviceType}
                    options={[
                      "Air Freight",
                      "Ocean Freight (FCL)",
                      "Ocean Freight (LCL)",
                      "Road Transport",
                      "Warehousing & Distribution",
                    ]}
                  />

                  <SelectField
                    label="Cargo Category"
                    name="cargoType"
                    value={form.cargoType}
                    onChange={handleChange}
                    options={[
                      "General Cargo",
                      "Perishable Goods",
                      "Hazardous Materials",
                      "Oversized Cargo",
                    ]}
                  />

                  <FormField
                    label="Estimated Weight (kg)"
                    name="weight"
                    type="number"
                    placeholder="e.g. 500"
                    value={form.weight}
                    onChange={handleChange}
                    error={errors.weight}
                    variant="compact"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="pt-4 border-t border-gray-150">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Additional Details & Handling Instructions
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Describe dimensions, deadlines, or specific requirements..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    w-full sm:w-auto px-8 py-3
                    bg-orange-600 text-white font-bold
                    rounded-xl shadow-lg shadow-orange-600/10
                    flex items-center justify-center gap-2
                    hover:bg-orange-700 hover:shadow-orange-600/20 hover:-translate-y-0.5
                    active:scale-[0.97] transition-all duration-300
                    ${loading ? "opacity-80 cursor-not-allowed" : ""}
                  `}
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? "Submitting Request..." : "Submit Booking Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
