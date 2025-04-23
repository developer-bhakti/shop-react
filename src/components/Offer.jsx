import React from 'react';
// import exclusive from '../assets/exclusive.png';

const Offer = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="" alt="Exclusive Offer" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-xl text-gray-600 mb-4">Exclusively Available on Redstore</p>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Smart Band 4</h1>
            <small className="text-gray-600 mb-4 block">
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.
            </small>
            <a href="#" className="inline-block bg-blue-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Buy Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
