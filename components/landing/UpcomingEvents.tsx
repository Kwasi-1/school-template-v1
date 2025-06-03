"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const events = [
  {
    image: "/event-image-1.webp",
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Cultural Exchange: Building Global Connections Through",
  },
  {
    image: "/event-image-2.webp",
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Literary Voices: Celebrating Diverse Narratives in",
  },
  {
    image: "/event-image-3.webp",
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Bridging Cultures: Global Perspectives in Contemporary",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 2xl:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            UPCOMING EVENT
          </h2>
          <a
            href="#"
            className="text-[#800020] font-medium underline flex items-center gap-1 hover:text-[#66001a] transition"
          >
            View All <Icon icon="mdi:arrow-right" />
          </a>
        </div>

        {/* Event Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-[10px] overflow-hidden border border-[#c2c2c2] group"
            >
              <div className="p-5">
                <div className="relative w-full h-56 sm:h-60 lg:h-64 overflow-hidden rounded-lg">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="pt-6">
                  {/* Date & Location */}
                  <div className="flex flex-col md:flex-row flex-wrap md:items-center text-[#110c2d] gap-3">
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:calendar-month-outline" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:map-marker-outline" />
                      <span className="border-b border-dotted border-current pb-0.5">
                        {event.location}
                      </span>
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="pb-4 pt-5 text-lg sm:text-xl lg:text-2xl leading-snug">
                    {event.title}
                  </h3>

                  {/* Read More Button */}
                  <button className="group mt-4 w-12 h-12 flex items-center justify-center border border-black/80 hover:border-[#890c25] rounded-full hover:text-white hover:bg-[#890c25] transition duration-300">
                    <Icon
                      icon="mdi:arrow-right"
                      className="-rotate-30 group-hover:rotate-0 text-base"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
