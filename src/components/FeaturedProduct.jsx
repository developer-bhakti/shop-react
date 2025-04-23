import React from 'react';
import item1 from '../assets/items-1.png';
import item2 from '../assets/items-2.png';
import item3 from '../assets/items-3.png';
import item4 from '../assets/items-4.png';
import item5 from '../assets/items-5.png';
import item6 from '../assets/items-6.png';
import item7 from '../assets/items-7.png';
import item8 from '../assets/items-8.png';
import item9 from '../assets/items-8.png';

const images = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <div>
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-contain border rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Mouse Corsair M65</h3>
                <h2 className="text-xl font-bold text-gray-800 mt-2">₹ 2000.00</h2>
                <a
                  href="#"
                  className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
