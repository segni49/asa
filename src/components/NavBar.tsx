import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Plan Trip', path: '/plan' },
    { name: 'Book Tours', path: '/book' },
    { name: 'Explore', path: '/explore' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-yellow-500">
          🌍 Okoo Tours
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-yellow-500 transition ${
                  isActive ? 'border-b-2 border-yellow-500' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-500 focus:outline-none"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-yellow-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;