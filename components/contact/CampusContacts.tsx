"use client"

const CampusContacts = () => {
  // Campus data
  const campuses = [
    {
      city: "London",
      address:
        "University of London, 15 Talbot Square, Tyburnia, London W2 1TT, UK",
      phone: "+44 20 4154 2555",
      email: "Unipix.info@edu",
      image: "/london.jpg", // Replace with actual image path
    },
    {
      city: "New York",
      address: "80 Washington Square E, New York, NY 10003, USA",
      phone: "+44 20 4154 200",
      email: "supports.info@edu",
      image: "/newyork.jpg", // Replace with actual image path
    },
    {
      city: "Boston",
      address:
        "Center for Computing & Data Sciences, 665 Commonwealth Ave, Boston, MA 02215, USA",
      phone: "+44 20 4154 2541",
      email: "example.info@edu",
      image: "/boston.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-[100px] px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10">
          Other Campus Contacts
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden text-white"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${campus.image})`,
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-semibold">{campus.city}</h3>
                <p className="text-sm mt-2">{campus.address}</p>
                <p className="text-sm mt-2">{campus.phone}</p>
                <p className="text-sm mt-2">{campus.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusContacts;
