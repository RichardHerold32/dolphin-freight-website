export default function WhatsAppButton() {
  const phoneNumber = "27737050062"; // international format, no +
  const message =
    "Hello Dolphin Freight, I would like to enquire about your freight services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
        transition
      "
    >
      {/* WhatsApp Icon (SVG, no library needed) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.002 3C9.384 3 4 8.383 4 15.002c0 2.646.865 5.085 2.325 7.05L4 29l7.153-2.272a11.94 11.94 0 0 0 4.849 1.03c6.617 0 12-5.383 12-12.002C28.002 8.383 22.62 3 16.002 3zm0 21.82a9.77 9.77 0 0 1-4.673-1.187l-.334-.178-4.246 1.35 1.37-4.14-.217-.345a9.74 9.74 0 0 1-1.48-5.32c0-5.37 4.37-9.74 9.58-9.74 5.21 0 9.58 4.37 9.58 9.74 0 5.37-4.37 9.74-9.58 9.74zm5.37-7.16c-.29-.15-1.71-.85-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.45-1.75-1.62-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.1-.23-.55-.46-.48-.64-.49-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.26.26-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.15.2 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.17-.55-.32z" />
      </svg>
    </a>
  );
}
