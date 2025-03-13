"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const events = [
  {
    image: "/event-image-1.webp", // Replace with actual image URLs
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
    <section className="relative py-16 px-6 md:px-20 bg-gray-100 ">
      <div className="w-[90%] mx-auto container">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-bold">UPCOMING EVENT</h2>
          <a
            href="#"
            className="text-[#800020] font-medium underline flex items-center gap-1 hover:text-[#66001a] transition"
          >
            View All <Icon icon="mdi:arrow-right" />
          </a>
        </div>

        {/* Event Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-[10px] overflow-hidden border border-[#c2c2c2]"
            >
              <div className="p-6 ">
                <Image
                  src={event.image}
                  alt="Event"
                  className="w-full h-60 object-cover rounded-[10px]"
                  width={400}
                  height={400}
                />

                <div className="pt-6">
                  {/* Date & Location */}
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:calendar-month-outline" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon icon="mdi:map-marker-outline" /> {event.location}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="mt-4 text-xl font-semibold leading-tight">
                    {event.title}
                  </h3>

                  {/* Read More Button */}
                  <button className="group mt-4 w-10 h-10 flex items-center justify-center border hover:border-[#890c25] border-black/80 rounded-full hover:text-white hover:bg-[#890c25] transition duration-300">
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
