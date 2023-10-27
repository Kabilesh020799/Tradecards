import React from 'react';
import NavBar from '../../components/nav-bar';
import Slideshow from '../../components/banner/banner';
import CouponListing from '../../components/coupon-listing';

const Home = (props) => {
  const slides = [
    {
      image: 'https://seasidefm.com/wp-content/uploads/2023/10/fall-Dance-4.png',
      caption: 'Slide 1',
    },
    {
      image: 'https://discoverhalifaxns.com/wp-content/uploads/2023/08/88123_Event_Image_fe0e4e08-76a3-46a0-9063-5a3a84e0aee6.jpg',
      caption: 'Slide 2',
    },
  ];
  return (
    <div>
      <NavBar />
      <Slideshow
        slides={slides}
        interval={3000}
      />
      <div className='coupon-listing'>
        <CouponListing />
      </div>
    </div>
  );
};

export default Home;
