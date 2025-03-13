"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { School } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SchoolLogo from "./SchoolLogo";

const Footer = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <div className="bg-gray-100">
      {/* <div></div> */}

      {!isLandingPage ? (
        <></>
      ) : (
        <>
          <div className="relative container mx-auto">
            <div
              className="relative flex flex-col md:flex-row justify-between items-center bg-red800 md:w-11/12 lg:w-4/5 py-8 md:py-12 px-16 rounded-lg mx-4 md:mx-auto text-white mb-8 top-16 md:top-24"
              style={{
                backgroundImage: "url('footer_image.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
              }}
            >
              {/* Heading Section */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-left">
                Don’t Miss Awesome Story <br /> From Our Alumni
              </h2>

              {/* Subscription Form */}
              <div className="flex items-center ">
                <div className="bg-transparent border border-white rounded-full px-4 py-4 mt-4 md:mt-0">
                  <input
                    type="email"
                    placeholder="Enter Your mail"
                    className="bg-transparent text-white placeholder-white outline-none px-2 w-48 md:w-60"
                  />
                </div>
                <button className="bg-white  hover:bg-black text-red-800 hover:text-white font-semibold px-7 py-4 rounded-full ml-2 flex items-center transition duration-300">
                  Subscribe
                  <Icon icon="mdi:arrow-right" className="text-xl ml-2" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <footer
        className={`bg-[#181818] text-[#737477] ${
          isLandingPage && "pt-[60px]"
        }`}
      >
        <div className="w-[90%] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8 px-6 md:px-20 py-[100px]">
          {/* Left Section: Logo and Info */}
          <div>
            <h2 className="text-2xl font-semibold underline text-white">
              {/* <Image
                src="/school_logo.svg"
                width={300}
                height={300}
                alt="school logo"
              /> */}

              <SchoolLogo />
            </h2>
            <p className=" mt-4">
              We are passionate about education, dedicated to providing
              high-quality resources for learners of all backgrounds.
            </p>
            <div className="mt-4 space-y-2 ">
              <p>📍 Park, Melbourne, Australia</p>
              <p>📞 485-826-710</p>
            </div>
          </div>

          {/* Our Campus */}
          <div>
            <h3 className="text-lg font-semibold mb-3 underline text-white">
              Our Campus
            </h3>
            <ul className="space-y-2 ">
              <li>Academic</li>
              <li>Athletics</li>
              <li>Campus Life</li>
              <li>Research</li>
              <li>Academic Area</li>
            </ul>
          </div>

          {/* Our Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-3 underline text-white">
              Our Pages
            </h3>
            <ul className="space-y-2 ">
              <li>About</li>
              <li>Tuition Fee</li>
              <li>Alumni</li>
              <li>Faculty Staff</li>
              <li>Event</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-3 underline text-white">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex items-center space-x-3">
                <img
                  src="/post1.jpg"
                  alt="Post 1"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm">📅 August 6, 2024</p>
                  <p className="text-white">
                    Those Inequalities Are Inequalities That
                  </p>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex items-center space-x-3">
                <img
                  src="/post2.jpg"
                  alt="Post 2"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm">📅 July 4, 2024</p>
                  <p className="text-white">
                    After Decades Of Improvement, Cardiovascular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" text-center border-t border-stone-700/20 py-6">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
            <span className="text-white"> Unipix</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
