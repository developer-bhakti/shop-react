import React from 'react';
import tablefan from '../assets/tablefan.png';
import anchorfan from '../assets/anchor.fan-removebg-preview.png';
import coolerfan from '../assets/cooler motar.webp';

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="category-item">
            <img src={tablefan} alt="Table Fan" className="w-full h-auto border-2 rounded-2xl" />
          </div>
          <div className="category-item">
            <img src={anchorfan} alt="Anchor Fan" className="w-full h-auto border-2 rounded-2xl" />
          </div>
          <div className="category-item">
            <img src={coolerfan} alt="Cooler Motor" className="w-full h-auto border-2 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
