import React from 'react';
import Extra from '../Extra/Extra';
import Adv from './Advertisement/Adv';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <Adv></Adv>
   <Categories></Categories>
   <Extra></Extra>
  </div>
 );
};

export default Home;