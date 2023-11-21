import React, { useState, useEffect } from 'react';
import './style.scss';
import NavBar from '../../components/nav-bar';
import { getStorage } from '../../common-utils';
import TabItem from './component/tab';
import CouponListingByUser from '../../components/coupon-listing-by-user/couponListingByUser';
import { getCouponsByUser } from '../home/apiUtils';

const UserProfile = () => {
  const user = JSON.parse(getStorage('userInfo'));
  const userid = user.userId;
  const [couponsData, setCouponsData,] = useState([]);

  useEffect(() => {
    getCouponsByUser({ userid, })
      .then((res) => setCouponsData(res));
    console.log(couponsData);
    console.log(userid);
  }, []);

  return (
    <div className='user-profile'>
      <NavBar />
      <div className='user-profile-detail'>
        <span className='user-profile-detail-name'>Hi, {user?.firstName}</span>
      </div>
      <div className='user-profile-account'>
        <div className='user-profile-account-head'>Account Details</div>
        <div className='user-profile-account-subhead'>
          <span className='user-profile-account-subhead-title'>Email address</span>
          <span className='user-profile-account-subhead-value'>{user?.email}</span>
        </div>
        <div className='user-profile-account-subhead'>
          <span className='user-profile-account-subhead-title'>Password</span>
          <span className='user-profile-account-subhead-value'>*******</span>
        </div>
      </div>
      <div className='user-profile-coupons'>
        <TabItem />
      </div>
      <div className='coupon-listing'
        style={{ paddingBottom: '40px', }}>
        <CouponListingByUser
          couponLists={couponsData}
        />
      </div>
    </div>
  );
};

export default UserProfile;
