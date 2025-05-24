"use client";
const services = [
  {
    title: "Flight Booking",
    description: "Find and book the best flights worldwide.",
    icon: "✈️",
  },
  {
    title: "Hotel Reservations",
    description: "Comfortable and affordable hotels.",
    icon: "🏨",
  },
  {
    title: "Travel Insurance",
    description: "Travel with peace of mind.",
    icon: "🛡️",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="font-semibold text-xl mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
