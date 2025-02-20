import React from 'react';
import Banner from './Banner.jsx';
import HomeCategory from './HomeCategory.jsx';
import CategoryShowcase from './CategoryShowcase.jsx';
import Register from './Register.jsx';
import LocationSprade from './LocationSprade.jsx';

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowcase/>
        <Register/>
        <LocationSprade/>
    </div>
  )
}

export default Home