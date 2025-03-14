"use client";

const contactDetails = [
  {
    icon: "/location-icon.svg",
    alt: "Location",
    info: ["400 Broome St, New York,", "NY 10013, USA"],
  },
  {
    icon: "/phone-icon.svg",
    alt: "Phone",
    info: ["+44 20 4154 2541", "+44 20 4154 2542"],
  },
  {
    icon: "/clock-icon.svg",
    alt: "Clock",
    info: ["Mon-Fri: 9 AM – 6 PM", "Saturday: 9 AM – 4 PM"],
  },
];

const ContactCard = ({
  icon,
  alt,
  info,
}: {
  icon: string;
  alt: string;
  info: string[];
}) => (
  <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center">
    <img src={icon} alt={alt} className="w-12 h-12 mb-4" />
    {info.map((line, index) => (
      <p key={index} className="text-lg text-black font-medium">
        {line}
      </p>
    ))}
  </div>
);

const ContactSection = () => {
  return (
    <section className="py-[100px] px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">
          General Contact Information
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((contact) => (
            <ContactCard key={contact.alt} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
