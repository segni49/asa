import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTour: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedTour }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startingPoint: '',
    paymentMethod: 'Credit Card',
    creditNumber: '',
    destination: selectedTour,
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Booking failed:', err);
    }
  };

  const requiresCredit = formData.paymentMethod !== 'Cash on Arrival';

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Book Tour</h2>

        {isSuccess ? (
          <div className="text-green-600 font-semibold text-center py-10">
            Booking Successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="startingPoint"
              value={formData.startingPoint}
              onChange={handleChange}
              placeholder="Starting point"
              required
              className="w-full p-2 border rounded"
            />

            <label htmlFor="paymentMethod-select" className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="paymentMethod-select"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Cash on Arrival">Cash on Arrival</option>
            </select>

            {requiresCredit && (
              <input
                type="text"
                name="creditNumber"
                value={formData.creditNumber}
                onChange={handleChange}
                placeholder={
                  formData.paymentMethod === 'Mobile Money'
                    ? 'Mobile transaction code'
                    : 'Card or account number'
                }
                required
                className="w-full p-2 border rounded"
              />
            )}

            <label htmlFor="destination-select" className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <select
              id="destination-select"
              name="destination"
              value={formData.destination}
              disabled
              className="w-full p-2 border rounded bg-gray-100 text-gray-600"
            >
              <option>{selectedTour}</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
            >
              Confirm Booking
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="text-sm text-gray-500 mt-4 underline w-full text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;