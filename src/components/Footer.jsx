import React from 'react';
import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';
import logo from '../assets/logo-white.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Download Our App</h3>
          <p className="text-sm mb-4">Download App for Android and iOS mobile phone.</p>
          <div className="flex space-x-4">
            <img src={playStore} alt="Play Store" className="w-32" />
            <img src={appStore} alt="App Store" className="w-32" />
          </div>
        </div>

        <div>
          <img src={logo} alt="Logo" className="w-28 mb-3" />
          <p className="text-sm">
            Our purpose is to sustainably make the pleasure and benefits of sports accessible to many.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Coupons</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog Post</a></li>
            <li><a href="#" className="hover:text-gray-300">Return Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Join Affiliate</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 mt-12" />
      <p className="text-center text-sm text-gray-400 mt-4">
        &copy; 2025 | Bhakti Purnale
      </p>
    </footer>
  );
};

export default Footer;
