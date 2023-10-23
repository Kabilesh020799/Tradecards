import React from 'react';
import NavBar from '../../components/nav-bar';
import Slideshow from '../../components/banner/banner';

const Home = (props) => {
  const slides = [
    {
      image: 'https://via.placeholder.com/800x400',
      caption: 'Slide 1',
    },
    {
      image: 'https://via.placeholder.com/800x400',
      caption: 'Slide 2',
    },
    // Add more slides as needed
  ];
  return (
    <div>
      <NavBar />
      <Slideshow slides={slides}/>
    </div>
  );
};

export default Home;
