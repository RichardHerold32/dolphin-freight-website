import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import FormField from "../components/FormField";
import {
  CheckboxCircleIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  NavigationIcon,
  ErrorWarningIcon
} from "../components/Icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    document.title = "Contact Us | Dolphin Freight";
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!EMAIL_RE.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);
    setSubmitError(null);

    try {
      // Simulate network request delay for production demonstration to client
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setForm(INITIAL_STATE);
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center">
        <img
          src="/Dolhpin_Feight_IMG/contact_hero.webp"
          alt="Contact Dolphin Freight"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4 animate-fade-up">
              Connect With Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl animate-fade-up">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-xl text-sm sm:text-base drop-shadow animate-fade-up-delay">
              Get in touch with our team for freight bookings, rates assistance, and tracking updates.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumbs />

      {/* CONTACT DETAILS & FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: Contact details & Form (Col-span 7) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Heading */}
              <div>
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                  Have questions about our freight solutions? Complete the contact form below and a representative will follow up.
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
                {success && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-xl flex items-center gap-3">
                    <CheckboxCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Message Sent Successfully!</p>
                      <p className="text-xs text-emerald-700 mt-0.5">Thank you for writing. Our logistics team will review and reply shortly.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3">
                    <ErrorWarningIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Submission Failed</p>
                      <p className="text-xs text-red-700 mt-0.5">{submitError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="e.g. Warehousing options / Rate Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Write your details, cargo descriptions, or general inquiries here..."
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all ${
                        errors.message
                          ? "border-red-400 focus:ring-red-100 focus:border-red-500"
                          : "border-gray-200 focus:ring-blue-100 focus:border-blue-600"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 text-white font-bold rounded-xl shadow-md hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading && (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT: Info Cards & Google Map (Col-span 5) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Info Grid */}
              <div className="grid gap-6">
                
                {/* Location */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex gap-4 items-start hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Office Address</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      Pelican House,<br />
                      51 Shepstone Street,<br />
                      Durban, 4001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex gap-4 items-start hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <MailIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Email Us</h3>
                    <a
                      href="mailto:info@dolphinfreight.co.za"
                      className="text-blue-600 text-sm mt-1 block hover:underline"
                    >
                      info@dolphinfreight.co.za
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex gap-4 items-start hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Call Support</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Tel: 031 942 5872<br />
                      Cell: 073 705 0062
                    </p>
                  </div>
                </div>

              </div>

              {/* Map Card */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-150">
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider flex items-center gap-2">
                    <NavigationIcon className="w-4 h-4 text-blue-600" />
                    Find Us On Map
                  </h3>
                </div>
                <div className="w-full h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1042818579754!2d31.034189075337654!3d-29.861266275016362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a8518cf67421%3A0x909a0bc4437938e7!2sPelican%20Freight%20International%20CC!5e0!3m2!1sen!2sin!4v1766947476144!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dolphin Freight Location"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
