import { Link } from "react-router-dom";
import { CalendarTodoIcon } from "./Icons";

export default function BookNowWidget() {
  return (
    <Link
      to="/booking"
      aria-label="Book Now"
      className="
        group
        fixed right-0 top-1/2 -translate-y-1/2 z-40
        bg-orange-600 text-white font-bold
        py-4 px-3 rounded-l-xl
        shadow-2xl border-l border-y border-orange-500
        flex flex-col items-center gap-2
        transition-all duration-300 transform
        hover:-translate-x-1.5 hover:bg-orange-700
        active:scale-95
      "
    >
      <CalendarTodoIcon className="w-5 h-5 group-hover:animate-bounce" />
      <span className="text-xs uppercase tracking-wider font-extrabold [writing-mode:vertical-rl] select-none">
        Book Now
      </span>
    </Link>
  );
}
