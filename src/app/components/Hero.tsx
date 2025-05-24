"use client";
export default function Hero() {
  return (
    <section className="relative bg-indigo-600 text-white py-24 px-6 md:px-20 rounded-b-3xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6">
            Explore the World with Us
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Discover your next adventure and book amazing trips with ease.
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/hero-travel.png"
            alt="Travel Illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
