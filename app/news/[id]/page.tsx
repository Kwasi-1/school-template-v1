"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { newsContent, NewsItem } from "@/content/news";
import NewsCard from "@/components/news/NewsCard";
import { useMemo } from "react";

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // Find the news item
  const item = useMemo(() => {
    return newsContent.items.find((item) => item.id === id);
  }, [id]);

  // Get related items (same category, excluding current)
  const relatedItems = useMemo(() => {
    if (!item) return [];
    return newsContent.items
      .filter((i) => i.category === item.category && i.id !== item.id)
      .slice(0, 3);
  }, [item]);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative max-w-full rounded-2xl overflow-hidden mx-4 mt-4">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/7] lg:aspect-[21/6]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-lg mx-auto section-padding">
            <div className="max-w-full xl:max-w-[85%] mx-auto py-6 sm:py-10 md:py-16">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-white/70 text-sm mb-4 md:mb-6">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
                <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                <Link href="/news" className="hover:text-white transition">
                  News & Events
                </Link>
                <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                <span className="text-white">
                  {item.type === "event" ? "Event" : "News"}
                </span>
              </nav>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="px-2 md:px-3 py-1 bg-primary text-white text-[10px] md:text-xs font-medium rounded-full">
                  {item.type === "event" ? "Event" : "News"}
                </span>
                <span className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight max-w-4xl">
                {item.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-6 text-white/80">
                <span className="flex items-center gap-2 text-xs md:text-sm">
                  <Icon icon="mdi:calendar-month-outline" className="w-4 h-4" />
                  {item.date}
                </span>
                {item.location && (
                  <span className="flex items-center gap-2 text-xs md:text-sm">
                    <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                    {item.location}
                  </span>
                )}
                {item.author && (
                  <span className="flex items-center gap-2 text-xs md:text-sm">
                    <Icon icon="mdi:account-outline" className="w-4 h-4" />
                    By {item.author}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-lg mx-auto section-padding py-12 md:py-20">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                {/* Placeholder content - can be replaced with actual content field */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </article>

              {/* Share Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-text-primary font-medium">
                    Share this:
                  </span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-primary hover:border-primary hover:text-white transition">
                      <Icon icon="mdi:facebook" className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-primary hover:border-primary hover:text-white transition">
                      <Icon icon="mdi:twitter" className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-primary hover:border-primary hover:text-white transition">
                      <Icon icon="mdi:linkedin" className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-primary hover:border-primary hover:text-white transition">
                      <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Event Details (for events only) */}
              {item.type === "event" && (
                <div className="bg-secondary rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Event Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="mdi:calendar-month-outline"
                        className="w-5 h-5 text-primary mt-0.5"
                      />
                      <div>
                        <p className="text-sm text-text-secondary">Date</p>
                        <p className="text-text-primary font-medium">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    {item.location && (
                      <div className="flex items-start gap-3">
                        <Icon
                          icon="mdi:map-marker-outline"
                          className="w-5 h-5 text-primary mt-0.5"
                        />
                        <div>
                          <p className="text-sm text-text-secondary">
                            Location
                          </p>
                          <p className="text-text-primary font-medium">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Back to News */}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
              >
                <Icon icon="mdi:arrow-left" className="w-4 h-4" />
                Back to News & Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedItems.length > 0 && (
        <section className="bg-secondary py-16 md:py-24 px-4">
          <div className="container-lg mx-auto">
            <div className="max-w-full xl:max-w-[85%] mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Related Posts
                </h2>
                <Link
                  href="/news"
                  className="text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  View All <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedItems.map((relatedItem) => (
                  <NewsCard key={relatedItem.id} item={relatedItem} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
