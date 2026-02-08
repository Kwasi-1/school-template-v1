"use client";

import { Icon } from "@iconify/react";
import { feesContent } from "@/content/fees";

const PaymentMethods = () => {
  const { paymentMethods } = feesContent;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              How To Pay
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 text-text-primary">
              Payment Methods
            </h2>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-transparent rounded-[10px] p-6 border border-gray-300 hover:border-primary/40 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-transparent rounded-[10px] flex items-center justify-center mb-5 group-hover:border-primary transition-colors duration-300">
                  <Icon icon={method.icon} className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {method.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {method.description}
                </p>
                {method.details && (
                  <p className="text-xs text-primary bg-transparent border border-primary/30 rounded-[10px] p-3">
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
