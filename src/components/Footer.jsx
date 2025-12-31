import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/">
            <img
              src="/logos/footer.png"
              alt="Dolphin Freight"
              className="h-30 mb-4"
            />
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-700">
              Dolphin Freight provides reliable air, sea, and road logistics
              solutions, connecting businesses to global markets with clarity
              and confidence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:text-gray-900 hover:border-gray-400 transition"
              >
                <i className="ri-linkedin-fill text-lg" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:text-gray-900 hover:border-gray-400 transition"
              >
                <i className="ri-facebook-fill text-lg" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-gray-300 text-gray-600
                           hover:text-gray-900 hover:border-gray-400 transition"
              >
                <i className="ri-twitter-fill text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/booking">Booking</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Services">
            <p>Air Freight</p>
            <p>Ocean Freight</p>
            <p>Road Transport</p>
            <p>Warehousing & Distribution</p>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <p>
              Unit 22, Micro Park,<br />
              26 Crassula Road,<br />
              Cornubia Industrial, Durban
            </p>
            <p>Email: info@dolphinfreight.co.za</p>
            <p>Tel: 031 015 5616</p>
            <p>Cell: 073 705 0062</p>
          </FooterSection>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Legal */}
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              Cookies
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Dolphin Freight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterSection({ title, children }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <h4 className="text-gray-900 font-semibold mb-4">
          {title}
        </h4>
        <div className="space-y-3 text-sm text-gray-700">
          {children}
        </div>
      </div>

      {/* Mobile Collapsible */}
      <details className="md:hidden border-b border-gray-300 py-4">
        <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900">
          {title}
          <span className="text-gray-500">+</span>
        </summary>

        <div className="mt-4 space-y-3 text-sm text-gray-700">
          {children}
        </div>
      </details>
    </>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="block hover:text-gray-900 transition">
      {children}
    </Link>
  );
}
