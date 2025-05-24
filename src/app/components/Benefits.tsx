const benefits = [
  "Easy booking process",
  "24/7 customer support",
  "Affordable prices",
  "Trusted by thousands of travelers",
];

export default function Benefits() {
  return (
    <section className="py-16 px-6 md:px-20 bg-indigo-100 rounded-lg mx-6 md:mx-20">
      <h3 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Why Choose Us
      </h3>
      <ul className="max-w-3xl mx-auto space-y-4 text-indigo-800 text-lg list-disc list-inside">
        {benefits.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
