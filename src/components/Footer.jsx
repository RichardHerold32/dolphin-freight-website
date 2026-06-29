import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/">
            <img
              src="/logos/footer.webp"
              alt="Dolphin Freight"
              width={120}
              height={80}
              loading="lazy"
              decoding="async"
              className="h-20 mb-3"
            />
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-700">
              Dolphin Freight provides reliable air, sea, and road logistics
              solutions, connecting businesses to global markets with clarity
              and confidence.
            </p>
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
            <p>Clearing & Forwarding</p>
            <p>Freight & Logistics</p>
            <p>Transport & Auto Logistics</p>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <p>
              Pelican House,<br />
              51 Shepstone Street,<br />
              Durban, 4001
            </p>
            <p>Email: info@dolphinfreight.co.za</p>
            <p>Tel: 031 942 5872</p>
            <p>Cell: 073 705 0062</p>
          </FooterSection>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col items-center justify-center">

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center">
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
        <p className="text-gray-900 font-semibold mb-4">
          {title}
        </p>
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
