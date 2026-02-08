"use client";

import { Icon } from "@iconify/react";
import { FeeLevel } from "@/content/fees";

interface FeeCardProps {
  level: FeeLevel;
  isActive: boolean;
  onClick: () => void;
}

const FeeCard = ({ level, isActive, onClick }: FeeCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-[#800020] text-white shadow-lg scale-105"
          : "bg-white border border-gray-100 hover:shadow-md hover:border-[#800020]/20"
      }`}
    >
      {/* Header */}
      <div className="mb-4">
        <h3
          className={`text-xl font-semibold ${isActive ? "text-white" : "text-black"}`}
        >
          {level.name}
        </h3>
        <p
          className={`text-sm mt-1 ${isActive ? "text-white/80" : "text-[#737477]"}`}
        >
          {level.description}
        </p>
      </div>

      {/* Total */}
      {level.totalPerTerm && (
        <div
          className={`border-t ${isActive ? "border-white/20" : "border-gray-100"} pt-4 mt-4`}
        >
          <p
            className={`text-sm ${isActive ? "text-white/70" : "text-[#737477]"}`}
          >
            Starting from
          </p>
          <p
            className={`text-2xl md:text-3xl font-semibold ${isActive ? "text-white" : "text-[#800020]"}`}
          >
            {level.totalPerTerm}
            <span
              className={`text-sm font-normal ml-1 ${isActive ? "text-white/70" : "text-[#737477]"}`}
            >
              /term
            </span>
          </p>
        </div>
      )}

      {/* Arrow */}
      <div className="flex justify-end mt-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isActive ? "bg-white/20" : "bg-[#800020]/10"
          }`}
        >
          <Icon
            icon="mdi:arrow-right"
            className={`w-5 h-5 ${isActive ? "text-white" : "text-[#800020]"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
