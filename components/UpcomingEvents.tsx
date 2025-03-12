"use client";

import { Icon } from "@iconify/react";

const events = [
  {
    image: "/event1.jpg", // Replace with actual image URLs
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Cultural Exchange: Building Global Connections Through",
  },
  {
    image: "/event2.jpg",
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Literary Voices: Celebrating Diverse Narratives in",
  },
  {
    image: "/event3.jpg",
    date: "August 20, 2024",
    location: "Yarra Park, UK",
    title: "Bridging Cultures: Global Perspectives in Contemporary",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative py-16 px-6 md:px-20">
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
            className="bg-white rounded-xl overflow-hidden border"
          >
            <img
              src={event.image}
              alt="Event"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
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
              <button className="mt-4 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-200 transition">
                <Icon icon="mdi:arrow-right" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Scroll-Up Button */}
      <button className="fixed bottom-6 right-6 bg-[#800020] text-white p-4 rounded-full shadow-lg hover:bg-[#66001a] transition">
        <Icon icon="mdi:arrow-up" />
      </button>
    </section>
  );
}
