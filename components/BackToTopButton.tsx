import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

function BackToTopButton() {
  return (
    <div>
      {/* Floating Scroll-Up Button */}
      <Link
        href="#herosection"
        className="fixed bottom-6 right-6 bg-[#800020] text-white hover:text-white p-4 rounded-full shadow-xl hover:bg-[#66001a] transition"
      >
        <Icon icon="iconoir:fast-arrow-up" className="text-xl font-thin" />
      </Link>
    </div>
  );
}
export default BackToTopButton;
