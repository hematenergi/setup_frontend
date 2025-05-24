"use client";
export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-indigo-600 text-white rounded-lg mx-6 md:mx-20">
      <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
      <form className="max-w-3xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-md text-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-md text-gray-800"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 rounded-md text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
