import React, { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar';
import Slideshow from '../../components/banner/banner';
import CouponListing from '../../components/coupon-listing';
import { getAllCoupons } from './apiUtils';

const Home = (props) => {
  const [couponsData, setCouponsData,] = useState([]);

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

  useEffect(() => {
    getAllCoupons()
      .then((res) => setCouponsData(res));
  }, []);
  console.log(couponsData);
  return (
    <div>
      <NavBar />
      <Slideshow
        slides={slides}
        interval={3000}
      />
      <div className='coupon-listing'>
        <CouponListing
          couponLists={couponsData}
          isMoreCouponsAvailable={true}
        />
      </div>
    </div>
  );
};

export default Home;
