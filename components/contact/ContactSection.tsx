"use client";

const ContactSection = () => {
  return (
    <section className="py-[100px] px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">
          General Contact Information
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center">
            <img
              src="/location-icon.svg" // Replace with your actual location icon
              alt="Location"
              className="w-12 h-12 mb-4"
            />
            <p className="text-lg text-black font-medium">
              400 Broome St, New York, <br />
              NY 10013, USA
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center">
            <img
              src="/phone-icon.svg" // Replace with your actual phone icon
              alt="Phone"
              className="w-12 h-12 mb-4"
            />
            <p className="text-lg text-black font-medium">+44 20 4154 2541</p>
            <p className="text-lg text-black font-medium">+44 20 4154 2542</p>
          </div>

          {/* Opening Hours */}
          <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center">
            <img
              src="/clock-icon.svg" // Replace with your actual clock icon
              alt="Clock"
              className="w-12 h-12 mb-4"
            />
            <p className="text-lg text-black font-medium">
              Mon-Fri: 9 AM – 6 PM
            </p>
            <p className="text-lg text-black font-medium">
              Saturday: 9 AM – 4 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
