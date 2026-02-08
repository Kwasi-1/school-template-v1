"use client";

import { contactContent } from "@/content/contact";
import { Icon } from "@iconify/react";
import Link from "next/link";

const CampusContacts = () => {
  const { campuses } = contactContent;
  const hasMultipleCampuses = campuses.length > 1;

  // Single campus - show embedded map
  if (!hasMultipleCampuses && campuses.length === 1) {
    const campus = campuses[0];

    return (
      <section className="pb-[100px] container-lg mx-auto px-4 md:px-8">
        <div className="max-w-full xl:w-[85%] mx-auto">
          <h2 className="text-3xl md:text-5xl text-text-primary mb-[50px] text-center">
            Our Campus Location
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Embed */}
            <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              {campus.embedUrl ? (
                <iframe
                  src={campus.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${campus.name}`}
                ></iframe>
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map not available</p>
                </div>
              )}
            </div>

            {/* Campus Info */}
            <div className="flex flex-col justify-center p-6 lg:p-10 bg-secondary rounded-lg">
              <h3 className="text-3xl md:text-4xl text-text-primary mb-6">
                {campus.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:map-marker"
                    className="text-primary text-2xl mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-text-primary">Address</p>
                    <p className="text-text-secondary">{campus.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:phone"
                    className="text-primary text-2xl mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-text-primary">Phone</p>
                    <p className="text-text-secondary">{campus.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:email"
                    className="text-primary text-2xl mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <p className="text-text-secondary">{campus.email}</p>
                  </div>
                </div>
              </div>

              {campus.mapUrl && (
                <Link
                  href={campus.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition duration-300 w-fit"
                >
                  <Icon icon="mdi:directions" className="text-xl" />
                  Get Directions
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Multiple campuses - show clickable cards
  return (
    <section className="pb-[100px] container-lg mx-auto px-4 md:px-8">
      <div className="max-w-full xl:w-[85%] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-text-primary mb-[50px]">
          Other Campus Contacts
        </h2>

        {/* Campus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campuses.map((campus, index) => (
            <Link
              key={index}
              href={campus.mapUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-white group cursor-pointer block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${campus.image})`,
                }}
              />

              {/* Overlay for better text readability */}
              {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" /> */}

              {/* Content */}
              <div className="relative text-left text-[20px] p-6 md:p-8 lg:p-[50px] lg:pb-[40px] h-full min-h-[350px] flex flex-col gap-4 justify-start leading-[28.8px]">
                {/* <div> */}
                  <h3 className="text-[40px] mb-4">{campus.name}</h3>
                  <p className="my-2">{campus.address}</p>
                  <p className="mt-2">{campus.phone}</p>
                  <p>{campus.email}</p>
                {/* </div> */}

                {/* Map Icon Indicator */}
                {/* <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                  <Icon icon="mdi:map-marker" className="text-2xl" />
                  <span className="text-base">View on Map</span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="text-xl transform group-hover:translate-x-1 transition-transform"
                  />
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusContacts;
