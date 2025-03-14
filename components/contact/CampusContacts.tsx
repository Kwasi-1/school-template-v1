"use client";

const CampusContacts = () => {
  // Campus data
  const campuses = [
    {
      city: "London",
      address:
        "University of London, 15 Talbot Square, Tyburnia, London W2 1TT, UK",
      phone: "+44 20 4154 2555",
      email: "Unipix.info@edu",
      image: "/london.webp", // Replace with actual image path
    },
    {
      city: "New York",
      address: "80 Washington Square E, New York, NY 10003, USA",
      phone: "+44 20 4154 200",
      email: "supports.info@edu",
      image: "/newyork.webp", // Replace with actual image path
    },
    {
      city: "Boston",
      address:
        "Center for Computing & Data Sciences, 665 Commonwealth Ave, Boston, MA 02215, USA",
      phone: "+44 20 4154 2541",
      email: "example.info@edu",
      image: "/Boston.webp", // Replace with actual image path
    },
  ];

  return (
    <section className="pb-[100px] container mx-auto px-4 md:px-8">
      <div className="max-w-[85%] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-[50px]">
          Other Campus Contacts
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campuses.map((campus, index) => (
            <div key={index} className="relative overflow-hidden text-white">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${campus.image})`,
                }}
              />
              {/* Dark Overlay */}
              {/* <div className="absolute inset-0 bg-black/10" /> */}

              {/* Content */}
              <div className="relative text-left text-[20px] p-6 md:p-8 lg:p-[50px] lg:pb-[40px] h-full flex flex-col gap-4 justify-start leading-[28.8px] font-semibold">
                <h3 className="text-[40px] font-semibold font-headerFont">
                  {campus.city}
                </h3>
                <p className=" my-2">{campus.address}</p>
                <p className=" mt-2">{campus.phone}</p>
                <p className="">{campus.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusContacts;
