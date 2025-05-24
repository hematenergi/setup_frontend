// pages/index.tsx
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Featured from "./components/Featured";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TravelMate – Your Trusted Travel Partner</title>
        <meta
          name="description"
          content="Book flights, hotels, and tours with ease using TravelMate. Affordable, reliable, and expertly planned travel solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-FE5BEFxRw1lYh+KnS5q+lK9+rPfHbGZBvkmAKY+oq7qEZKv8fQbdH4UbPs80ueg3"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="bg-white text-gray-800">
        <Hero />
        <Services />
        <Featured />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
