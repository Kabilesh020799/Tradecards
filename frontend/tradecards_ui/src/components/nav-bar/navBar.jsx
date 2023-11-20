import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LocationToggle from './components/location-toggle';
import SearchBar from '../search-bar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AvatarItem from './components/avatar/avatar';
import { getCategories } from './apiUtils';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const NavBar = (props) => {
  const { className, } = props;

  const [location, setLocation,] = useState('');
  const [categories, setCategories,] = useState([]);

  const navigate = useNavigate();

  const onLocationChange = (loc) => {
    setLocation(loc);
  };

  const onLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  const onClickProfile = () => {
    navigate('/user-profile');
  };

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res));
  }, []);

  return (
    <div className={`${className} nav-bar`}>
      <div className='nav-bar-components'>
        <div className='nav-bar-labels'>
        <img
          className='nav-bar-img'
          src='/img/logo.png'
          onClick={() => navigate('/home')}
        />
          <SearchBar onSearch={null}/>
        </div>
        <div className='nav-bar-components-right'>
          <Button
            variant='contained'
            className='nav-bar-components-right-add-coupon'
          >
            Add a Coupon
          </Button>
          <LocationToggle
            location={location}
            onLocationChange={onLocationChange}
          />
          <AvatarItem
            onSignout={onLogout}
            className="nav-bar-components-right-avatar"
            onClickProfile={onClickProfile}
          />
        </div>
      </div>
      <div className='nav-bar-sub-contents'>
        {
          categories.map((category) => (
            <div
              key={category?.categoryID}
              className='nav-bar-sub-contents-label'
              onClick={() => navigate(`/coupon-listing?category=${category?.categoryID}`)}
            >
              {category?.categoryName}
            </div>
          ))
        }
      </div>
    </div>
  );
};

NavBar.propTypes = { className: PropTypes.string, };
NavBar.defaultProps = { className: '', };

export default NavBar;
