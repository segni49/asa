import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Okoo Tour Guide</h3>
          <p className="text-sm text-gray-400">
            A smart travel companion helping you plan, book, and share rich adventures across Ethiopia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/plan" className="hover:text-yellow-400">Plan</Link></li>
            <li><Link to="/book" className="hover:text-yellow-400">Book</Link></li>
            <li><Link to="/explore" className="hover:text-yellow-400">Explore</Link></li>
          </ul>
        </div>

        {/* Team or Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Made with ❤️ by</h4>
          <p className="text-sm text-gray-400">Codemate + Segni</p>
          <p className="text-sm text-gray-400">Jimma University Hackathon 2025</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Okoo Tour Guide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;