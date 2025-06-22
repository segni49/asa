import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* 🌅 Hero Section */}
      <div className="bg-cover bg-center bg-[url('/assets/hero2.png')] text-white py-40 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Ethiopia like never before</h1>
        <p className="text-lg md:text-xl mb-8">Plan, Book, and Explore unforgettable journeys.</p>
        <div className="space-x-4">
          <Link
            to="/plan"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded"
          >
            Start Planning
          </Link>
          <Link
            to="/book"
            className="bg-white hover:bg-gray-100 text-yellow-600 font-semibold py-3 px-6 rounded"
          >
            Browse Tours
          </Link>
        </div>
      </div>

      {/* ⚙️ How It Works */}
      <div className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8 text-gray-700">
          <div>
            <div className="text-4xl mb-2">🧭</div>
            <h4 className="font-bold mb-1">Plan</h4>
            <p>Enter your style, days, and budget to build a custom trip.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📦</div>
            <h4 className="font-bold mb-1">Book</h4>
            <p>Choose from handpicked tours and book instantly.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🗺️</div>
            <h4 className="font-bold mb-1">Explore</h4>
            <p>Read real stories and share your own adventures.</p>
          </div>
        </div>
      </div>

      {/* 🌟 Featured Tours */}
      <div className="bg-white py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Featured Experiences</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
    "name": "Wenchi Crater Lake",
    "image": "/assets/wenchi.jpg",
    "desc": "Volcanic lake with boat rides, hot springs, and monastery island.",
    "price": '170'
  },
  {
    "name": "Bale Mountains National Park",
    "image": "/assets/bale-mountains.jpg",
    "desc": "Afro-alpine park with wolves, moorlands, and cloud forests.",
    "price": '150'
  },
  {
    "name": "Aba Jifar Palace, Jimma",
    "image": "/assets/abajifar.jpg",
    "desc": "Historic wooden palace of King Aba Jifar II near Jimma.",
    "price": '235'
  },
          ].map((tour, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{tour.name}</h3>
                <p className="text-sm text-gray-600">{tour.desc}</p>
                <p className="mt-2 text-yellow-600 font-semibold">${tour.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/book"
            className="text-yellow-600 hover:underline font-medium"
          >
            View all tours →
          </Link>
        </div>
      </div>

      {/* 💬 Testimonials */}
      <div className="bg-yellow-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Traveler Reviews</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="italic text-gray-700">
            “Okoo helped me plan the perfect family trip across Ethiopia. Totally magical.” — Helina
          </blockquote>
          <blockquote className="italic text-gray-700">
            “We saw places we never knew existed. Can’t wait to book again.” — Dawit & Tesfaye
          </blockquote>
        </div>
      </div>

      {/* 🧭 Final Call-to-Action */}
      <div className="bg-yellow-500 py-12 text-center text-black px-6">
        <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
        <Link
          to="/plan"
          className="bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800"
        >
          Build Your Plan Now
        </Link>
      </div>
    </section>
  );
};

export default Home;