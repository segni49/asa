import React, { useState } from 'react';
import TourCard from '../components/TourCard';
import BookingModal from '../components/BookingModal';
const tours = [
  {
    "name": "Wenchi Crater Lake",
    "image": "/assets/wenchi.jpg",
    "description": "Volcanic lake with boat rides, hot springs, and monastery island.",
    "price": '170'
  },
  {
    "name": "Bale Mountains National Park",
    "image": "/assets/bale-mountains.jpg",
    "description": "Afro-alpine park with wolves, moorlands, and cloud forests.",
    "price": '150'
  },
  {
    "name": "Aba Jifar Palace, Jimma",
    "image": "/assets/abajifar.jpg",
    "description": "Historic wooden palace of King Aba Jifar II near Jimma.",
    "price": '235'
  },
  {
    "name": "Sof Omar Cave",
    "image": "/assets/sofumer.jpg",
    "description": "Africa's longest cave system carved by the Web River.",
    "price": '109'
  },
  {
    "name": "Lake Langano",
    "image": "/assets/langano2.jpg",
    "description": "Brown-sand beach lake ideal for swimming and birdwatching.",
    "price": '500'
  },
  {
    "name": "Harar Jugol (Old City)",
    "image": "/assets/harar.jpg",
    "description": "UNESCO walled city with 82 mosques and vibrant alleyways.",
    "price": '300'
  },
  {
    "name": "Illubabor Highlands",
    "image": "/assets/illu.jpg",
    "description": "Lush coffee region with forests, rivers, and cultural heritage.",
    "price": '450'
  },
  {
    "name": "Borena National Park",
    "image": "/assets/borena.jpg",
    "description": "Savannah park with zebras, birds, and Borana cultural sites.",
    "price": '215'
  },
  {
    "name": "Awash National Park",
    "image": "/assets/awash.jpg",
    "description": "Hot springs, waterfalls, and wildlife in acacia savannahs.",
    "price": '290'
  }
];

const BookPage: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const handleBook = (name: string) => {
    setSelectedTour(name);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Available Tours</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {tours.map((tour, idx) => (
          <TourCard
            key={idx}
            name={tour.name}
            image={tour.image}
            description={tour.description}
            price={tour.price}
            onBook={() => handleBook(tour.name)}
          />
        ))}
      </div>

      {selectedTour && (
        <BookingModal
          isOpen={!!selectedTour}
          onClose={handleCloseModal}
          selectedTour={selectedTour}
        />
      )}
    </section>
  );
};

export default BookPage;