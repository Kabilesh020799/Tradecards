import React, { useEffect, useState } from 'react';
import './style.scss';
import NavBar from '../../components/nav-bar';
import { getStorage } from '../../common-utils';
import TabItem from './component/tab';
import { TextField } from '@mui/material';
import { editUser } from './apiUtils';

const UserProfile = () => {
  const user = JSON.parse(getStorage('userInfo'));

  const [isEditField, setIsEditField,] = useState('');
  const [email, setEmail,] = useState('');
  const [password, setPassword,] = useState('');

  useEffect(() => {
    setEmail(user?.email);
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
          <div className='user-profile-account-subhead-container'>
            <span className='user-profile-account-subhead-title'>Email address</span>
            {isEditField !== 'email'
              ? <span className='user-profile-account-subhead-value'>{user?.email}</span>
              : <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') editUser({ email, }); }}
                />}
          </div>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: 'hsl(318, 22%, 27%)', cursor: 'pointer', }}
            onClick={() => setIsEditField('email')}
          ></i>
        </div>
        <div className='user-profile-account-subhead'>
          <div className='user-profile-account-subhead-container'>
            <span className='user-profile-account-subhead-title'>Password</span>
            {isEditField !== 'pass'
              ? <span className='user-profile-account-subhead-value'>*******</span>
              : <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') editUser({ password, }); }}
                />}
          </div>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: 'hsl(318, 22%, 27%)', cursor: 'pointer', }}
            onClick={() => setIsEditField('pass')}
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
