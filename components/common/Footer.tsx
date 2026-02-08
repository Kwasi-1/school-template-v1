"use client";

import { Icon } from "@iconify/react";
import SchoolLogo from "./SchoolLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { homeContent } from "@/content/home";

const socialLinks = [
  { icon: "ic:sharp-facebook", href: siteConfig.social.facebook },
  { icon: "mdi:instagram", href: siteConfig.social.instagram },
  { icon: "uil:linkedin", href: siteConfig.social.linkedin },
  { icon: "iconoir:youtube-solid", href: siteConfig.social.youtube },
];

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const { newsletter } = homeContent;

  return (
    <div className="bg-secondary">
      {isLandingPage && (
        <div className="relative container-lg mx-auto px-4">
          <div
            className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 w-full lg:w-4/5 py-10 lg:py-16 px-6 md:px-10 rounded-lg mx-auto text-white mb-8 top-16 md:top-24"
            style={{
              backgroundImage: `url('${newsletter.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug lg:leading-snug">
              {newsletter.title.split(" ").slice(0, 4).join(" ")}{" "}
              <br className="hidden md:block" />
              {newsletter.title.split(" ").slice(4).join(" ")}
            </h2>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-md">
              <div className="bg-transparent border border-white rounded-full px-4 py-3 w-full">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="bg-transparent text-white placeholder-white outline-none w-full"
                />
              </div>
              <button className="bg-white hover:bg-dark text-primary hover:text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto">
                {newsletter.buttonText}
                <Icon icon="mdi:arrow-right" className="text-xl ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      <footer
        className={`bg-footer text-footer-muted ${
          isLandingPage && "pt-[60px]"
        }`}
      >
        <div className="w-full lg:w-[90%] max-w-[90%] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20 py-[100px]">
          {/* Logo and Info Section */}
          <div>
            <h2 className="text-2xl font-semibold underline text-footer-foreground">
              <SchoolLogo />
            </h2>
            <p className="mt-4">{siteConfig.description}</p>
            {isLandingPage ? (
              <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon icon="lsicon:location-outline" />
                  <span>
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.country}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="material-symbols:call" />
                  <span>{siteConfig.contact.phone[0]}</span>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3 text-footer-foreground mt-8">
                {socialLinks.map(({ icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="border p-2 rounded-full hover:bg-primary hover:border-primary transition duration-300"
                  >
                    <Icon
                      icon={icon}
                      className="hover:text-primary-foreground cursor-pointer"
                      width="22"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Campus Section */}
          <FooterList
            title="Our Campus"
            links={siteConfig.footerLinks.campus}
          />

          {/* Our Pages Section */}
          <FooterList title="Our Pages" links={siteConfig.footerLinks.pages} />

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 underline text-footer-foreground">
              Quick Links
            </h3>
            <div className="space-y-4">
              <FooterButton href="/apply" text="Apply Now" primary />
              <FooterButton href="/contact" text="Contact" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-stone-700/20 py-6">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
            <span className="text-footer-foreground">
              {" "}
              {siteConfig.shortName}
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

// Reusable List Component
const FooterList = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 underline text-footer-foreground">
      {title}
    </h3>
    <div className="flex flex-col space-y-2 capitalize">
      {links.map((link, idx) => (
        <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} key={idx}>
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
        ? "bg-primary text-primary-foreground hover:bg-primary-hover"
        : "border border-footer-foreground text-footer-foreground hover:bg-primary hover:border-primary"
    }`}
  >
    {text}
  </Link>
);

export default Footer;
