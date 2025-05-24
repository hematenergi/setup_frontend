"use client";
const featuredDestinations = [
  { city: "Paris", image: "/paris.jpg" },
  { city: "Bali", image: "/bali.jpg" },
  { city: "New York", image: "/ny.jpg" },
];

export default function Featured() {
  return (
    <section className="py-16 px-6 md:px-20">
      <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Featured Destinations
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredDestinations.map(({ city, image }) => (
          <div
            key={city}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition"
          >
            <img src={image} alt={city} className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h4 className="font-semibold text-xl">{city}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
