import React from 'react';
import './style.scss';
import NavBar from '../../components/nav-bar';
import { getStorage } from '../../common-utils';
import TabItem from './component/tab';

const UserProfile = () => {
  const user = JSON.parse(getStorage('userInfo'));
  return (
    <div className='user-profile'>
      <NavBar />
      <div className='user-profile-detail'>
        <span className='user-profile-detail-name'>Hi, {user?.firstName}</span>
      </div>
      <div className='user-profile-account'>
        <div className='user-profile-account-head'>Account Details</div>
        <div className='user-profile-account-subhead'>
          <div className='user-profile-account-subhead-container'>
            <span className='user-profile-account-subhead-title'>Email address</span>
            <span className='user-profile-account-subhead-value'>{user?.email}</span>
          </div>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: 'hsl(318, 22%, 27%)', cursor: 'pointer', }}
          ></i>
        </div>
        <div className='user-profile-account-subhead'>
          <div className='user-profile-account-subhead-container'>
            <span className='user-profile-account-subhead-title'>Password</span>
            <span className='user-profile-account-subhead-value'>*******</span>
          </div>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: 'hsl(318, 22%, 27%)', cursor: 'pointer', }}
          ></i>
        </div>
      </div>
      <div className='user-profile-coupons'>
        <TabItem />
      </div>
    </div>
  );
};

export default UserProfile;
