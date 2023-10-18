import React, { useState } from 'react';
import { navBarContents, navBarSubContents } from './constants';
import PropTypes from 'prop-types';
import LocationToggle from './components/location-toggle';

const NavBar = (props) => {
  const { className, } = props;

  const [location, setLocation,] = useState('');

  const onLocationChange = (loc) => {
    setLocation(loc);
  };

  return (
    <div className={`${className} nav-bar`}>
      <div className='nav-bar-components'>
        <div className='nav-bar-labels'>
          {
            navBarContents.map((navBarContent) => (
              <div
                key={navBarContent.value}
                className='nav-bar-label'
              >
                {navBarContent.label}
              </div>
            ))
          }
        </div>
        <LocationToggle
          location={location}
          onLocationChange={onLocationChange}
        />
      </div>
      <div className='nav-bar-sub-contents'>
        {
          navBarSubContents.map((navBarSubContent) => (
            <div
              key={navBarSubContent.value}
              className='nav-bar-sub-contents-label'
              onClick={() => onLocationChange(navBarSubContent.value)}
            >
              {navBarSubContent.label}
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
