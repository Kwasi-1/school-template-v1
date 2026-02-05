"use client";

import { Icon } from "@iconify/react";
import SchoolLogo from "./SchoolLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  { icon: "ic:sharp-facebook", href: "#" },
  { icon: "mdi:instagram", href: "#" },
  { icon: "uil:linkedin", href: "#" },
  { icon: "iconoir:youtube-solid", href: "#" },
];

const campusLinks = [
  "academic",
  "athletics",
  "campus Life",
  "research",
  "academic Area",
];
const pageLinks = ["about", "tuition Fee", "alumni", "faculty Staff", "event"];

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <div className="bg-gray-100">
      {isLandingPage && (
        <div className="relative container-lg mx-auto px-4">
          <div
            className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 w-full lg:w-4/5 py-10 lg:py-16 px-6 md:px-10 rounded-lg mx-auto text-white mb-8 top-16 md:top-24"
            style={{
              backgroundImage: "url('footer_image.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug lg:leading-snug">
              Don’t Miss Awesome Story <br className="hidden md:block" /> From
              Our Alumni
            </h2>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-md">
              <div className="bg-transparent border border-white rounded-full px-4 py-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="bg-transparent text-white placeholder-white outline-none w-full"
                />
              </div>
              <button className="bg-white hover:bg-black text-red-800 hover:text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto">
                Subscribe
                <Icon icon="mdi:arrow-right" className="text-xl ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      <footer
        className={`bg-[#181818] text-[#737477] ${
          isLandingPage && "pt-[60px]"
        }`}
      >
        <div className="w-[90%] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 py-[100px]">
          {/* Logo and Info Section */}
          <div>
            <h2 className="text-2xl font-semibold underline text-white">
              <SchoolLogo />
            </h2>
            <p className="mt-4">
              We are passionate about education, dedicated to providing
              high-quality resources for learners of all backgrounds.
            </p>
            {isLandingPage ? (
              <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon icon="lsicon:location-outline" />
                  <span>Park, Melbourne, Australia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="material-symbols:call" />
                  <span>485-826-710</span>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3 text-white mt-8">
                {socialLinks.map(({ icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="border p-2 rounded-full hover:bg-[#800020] hover:border-[#800020] transition duration-300"
                  >
                    <Icon
                      icon={icon}
                      className="hover:text-primary cursor-pointer"
                      width="22"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Campus Section */}
          <FooterList title="Our Campus" links={campusLinks} />

          {/* Our Pages Section */}
          <FooterList title="Our Pages" links={pageLinks} />

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 underline text-white">
              Quick Links
            </h3>
            <div className="space-y-4">
              <FooterButton href="/admission" text="Apply Now" primary />
              <FooterButton href="/contact" text="Contact" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-stone-700/20 py-6">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
            <span className="text-white"> Unipix</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

// Reusable List Component
const FooterList = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 underline text-white">{title}</h3>
    <div className="flex flex-col space-y-2 capitalize">
      {links.map((link, idx) => (
        <Link href={link} key={idx}>
          {link}
        </Link>
      ))}
    </div>
  </div>
);

// Reusable Button Component
const FooterButton = ({
  href,
  text,
  primary,
}: {
  href: string;
  text: string;
  primary?: boolean;
}) => (
  <Link
    href={href}
    className={`w-full py-3 rounded-full text-center font-semibold transition duration-300 block ${
      primary
        ? "bg-[#800020] text-white hover:bg-[#66001a]"
        : "border border-white text-white hover:bg-[#800020] hover:border-[#800020]"
    }`}
  >
    {text}
  </Link>
);

export default Footer;
