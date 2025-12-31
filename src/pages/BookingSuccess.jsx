import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 max-w-lg text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-green-600 text-white text-2xl">
          ✓
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Booking Request Submitted
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for choosing Dolphin Freight.  
          Our logistics team has received your request and will contact you shortly with the next steps.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 border border-gray-900 rounded-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            View Services
          </Link>
        </div>

      </div>
    </section>
  );
}
