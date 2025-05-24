"use client";
const testimonials = [
  {
    name: "Alice Johnson",
    quote:
      "The booking process was seamless and the customer support was amazing!",
  },
  {
    name: "Michael Smith",
    quote: "I found the best deals here and had a wonderful trip.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map(({ name, quote }) => (
          <div
            key={name}
            className="p-8 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="italic mb-4">&quot;{quote}&quot;</p>
            <p className="font-semibold text-indigo-700">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
