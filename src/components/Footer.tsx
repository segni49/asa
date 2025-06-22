import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">Okoo Tour Guide</h3>
          <p className="text-sm leading-relaxed">
            Your digital travel companion for discovering, planning, and sharing beautiful journeys across Ethiopia.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/plan" className="hover:text-yellow-400">Plan a Trip</Link></li>
            <li><Link to="/book" className="hover:text-yellow-400">Book a Tour</Link></li>
            <li><Link to="/explore" className="hover:text-yellow-400">Explore Stories</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Get in Touch</h4>
          <p className="text-sm">Jimma University, Ethiopia</p>
          <p className="text-sm mt-1">Email: <a href="mailto:info@okootour.com" className="hover:text-yellow-400">info@okootour.com</a></p>
          <p className="text-sm">Phone: +251 900 000 000</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Connect</h4>
          <div className="flex space-x-4 text-yellow-400 text-xl">
            <a href="#" title="Facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" title="Twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" title="Instagram" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Okoo Tour Guide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;