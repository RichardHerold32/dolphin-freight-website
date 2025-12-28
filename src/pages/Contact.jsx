export default function Contact() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/contact-hero.webp"
          alt="Contact Dolphin Freight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-xl">
              Get in touch with our team for inquiries, quotes, or logistics support.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT: INFO */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                <strong>Location:</strong><br />
                Durban, South Africa
              </p>

              <p>
                <strong>Address:</strong><br />
                Unit 22, Micro Park,<br />
                26 Crassula Road,<br />
                Cornubia Industrial,<br />
                Durban
              </p>

              <p>
                <strong>Email:</strong><br />
                <a
                  href="mailto:info@dolphinfreight.co.za"
                  className="hover:underline"
                >
                  info@dolphinfreight.co.za
                </a>
              </p>

              <p>
                <strong>Telephone:</strong><br />
                031 015 5616
              </p>

              <p>
                <strong>Mobile:</strong><br />
                073 705 0062
              </p>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Our Location
            </h2>

            <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
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
      </section>
    </>
  );
}
