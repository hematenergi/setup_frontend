"use client";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">TravelUI</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-indigo-600 cursor-pointer">Home</li>
        <li className="hover:text-indigo-600 cursor-pointer">Services</li>
        <li className="hover:text-indigo-600 cursor-pointer">Destinations</li>
        <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
