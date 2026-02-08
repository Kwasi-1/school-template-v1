"use client";

import BoardingHero from "@/components/boarding/BoardingHero";
import BoardingOverview from "@/components/boarding/BoardingOverview";
import BoardingGallery from "@/components/boarding/BoardingGallery";
import BoardingVideo from "@/components/boarding/BoardingVideo";
import BoardingFeatures from "@/components/boarding/BoardingFeatures";

export default function BoardingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <BoardingHero /> */}

      {/* Overview */}
      <BoardingOverview />

      {/* Gallery */}
      <BoardingGallery />

      {/* Video Section */}
      <BoardingVideo />

      {/* Features & Brochure */}
      <BoardingFeatures />
    </div>
  );
}
