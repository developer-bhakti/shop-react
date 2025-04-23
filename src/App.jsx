import React from 'react'
import Header from './components/Header';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProduct';
// import Offer from './components/Offer';
import Footer from './components/Footer';
import Home from './components/Home';
import { Contact } from 'lucide-react';


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <FeaturedCategories/>
      <FeaturedProducts />
     <Contact />
      <Footer />
    </div>
  )
}

export default App;