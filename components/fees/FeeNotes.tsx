"use client";

import { Icon } from "@iconify/react";
import { feesContent } from "@/content/fees";

const FeeNotes = () => {
  const { notes } = feesContent;

  return (
    <section className="bg-dark py-12 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon
                icon="mdi:information-outline"
                className="w-5 h-5 text-white"
              />
            </div>
            <div>
              <h3 className="text-white font-medium mb-3">Important Notes</h3>
              <ul className="space-y-2">
                {notes.map((note, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <Icon
                      icon="mdi:chevron-right"
                      className="w-4 h-4 mt-0.5 text-primary"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeNotes;
