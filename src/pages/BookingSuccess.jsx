import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white border border-gray-200 rounded-xl p-10 max-w-lg text-center shadow-sm">
        <h1 className="text-3xl font-bold mb-4">
          Booking Request Sent ✅
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for contacting Dolphin Freight. Our team will review your
          shipment details and get back to you shortly.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
