import React from 'react';
import { navBarContents } from './constants';

const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      {
        navBarContents.map((navBarContent) => (
          <div key={navBarContent.value}>
            {navBarContent.label}
          </div>
        ))
      }
    </div>
  );
};

export default NavBar;
