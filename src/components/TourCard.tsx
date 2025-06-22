import React from 'react';

interface TourCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
  onBook: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ name, image, description, price, onBook }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-yellow-600 font-semibold mt-2">Starting from ${price}</p>
        <button
          onClick={onBook}
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;