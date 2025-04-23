import React from 'react';
import shopImage from '../assets/shop.png.img.jpg';

const Home = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              New Suryabhan Electricals & General Store, Gangakhed
            </h1>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Why you can shop from here...
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              So this is a wholesale shop. <br />
              You can get everything at a reasonable price. It has been selling products for 50 years with trust.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Shop with New Suryabhan Electricals & General Store &rarr;
            </a>
          </div>
          <div>
            <img
              src={shopImage}
              alt="Shop"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
``
