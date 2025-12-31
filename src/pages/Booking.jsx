import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

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
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim())
      newErrors.phone = "Phone number is required";
    if (!form.serviceType)
      newErrors.serviceType = "Select a freight service";
    if (!form.origin.trim())
      newErrors.origin = "Origin is required";
    if (!form.destination.trim())
      newErrors.destination = "Destination is required";
    if (!form.weight || Number(form.weight) <= 0)
      newErrors.weight = "Enter a valid weight";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

async function handleSubmit(e) {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);

  try {
    const formData = new URLSearchParams(form);

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyTDsUIaLGVAvPsQGTzsnPa-cejDd617OZwST1egYeWpwiPQ2PhQFck95nvWlTEDA00/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Submission failed");

    // reset form (optional but clean)
    setForm(INITIAL_STATE);
    setErrors({});

    // ✅ redirect to success page
    navigate("/booking-success");

  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}


  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img
          src="/booking-hero.webp"
          alt="Book Shipment"
          loading="lazy"
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

      <Breadcrumbs />

      {/* FORM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-8">
              Shipment Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* Phone */}
              <FormField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              {/* Route */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Origin"
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  error={errors.origin}
                />

                <FormField
                  label="Destination"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  error={errors.destination}
                />
              </div>

              {/* Service & Cargo */}
              <div className="grid md:grid-cols-2 gap-6">
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
                  label="Cargo Type"
                  name="cargoType"
                  value={form.cargoType}
                  onChange={handleChange}
                  options={[
                    "General Cargo",
                    "Perishable",
                    "Hazardous",
                    "Oversized",
                  ]}
                />
              </div>

              {/* Weight */}
              <FormField
                label="Estimated Weight (kg)"
                name="weight"
                type="number"
                value={form.weight}
                onChange={handleChange}
                error={errors.weight}
              />

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
                  disabled={loading}
                  className={`
                    px-8 py-3
                    border border-gray-900
                    rounded-lg
                    font-semibold
                    flex items-center gap-2
                    transition
                    ${
                      loading
                        ? "bg-gray-900 text-white cursor-not-allowed"
                        : "text-gray-900 hover:bg-gray-900 hover:text-white"
                    }
                  `}
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? "Submitting..." : "Submit Booking Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Helpers ---------------- */

function FormField({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        {...props}
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-gray-900"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ label, options, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        {...props}
        className={`w-full border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-gray-900"
        }`}
      >
        <option value="">Select option</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
