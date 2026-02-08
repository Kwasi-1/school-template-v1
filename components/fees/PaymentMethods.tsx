"use client";

import { Icon } from "@iconify/react";
import { feesContent } from "@/content/fees";

const PaymentMethods = () => {
  const { paymentMethods } = feesContent;

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-[#800020]">
              How To Pay
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Payment Methods
            </h2>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#800020]/20 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#800020]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#800020] transition-colors duration-300">
                  <Icon
                    icon={method.icon}
                    className="w-7 h-7 text-[#800020] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-black mb-2">
                  {method.name}
                </h3>
                <p className="text-[#737477] text-sm leading-relaxed mb-3">
                  {method.description}
                </p>
                {method.details && (
                  <p className="text-xs text-[#800020] bg-[#800020]/5 rounded-lg p-3">
                    {method.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
