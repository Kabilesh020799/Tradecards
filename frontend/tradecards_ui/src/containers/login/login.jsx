/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onLogin, onSignup } from './apiUtils';
import { useNavigate } from 'react-router-dom';
import InputHolder from './components/input';

function Login (props) {
  const { isLogin, } = props;

  const [userName, setUserName,] = useState('');
  const [password, setPassword,] = useState('');
  const navigate = useNavigate();

  const onSubmit = () => {
    if (isLogin) {
      onLogin(userName, password);
    } else {
      onSignup(userName, password);
    }
  };

  const onNavigate = () => {
    if (isLogin) {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='login-wrapper'>
      <img
        src="https://media.istockphoto.com/id/1481883501/photo/percent-icon-price-tag-sticker-or-badge-sale-discount-and-promotion-design-element.webp?b=1&s=170667a&w=0&k=20&c=KtOvwZ0Ryk0Hzteu0qYjU4ofZWG0UaFLjJ4-_8l3f7o="
        alt="Coupon"
        className='login-image'
      />
     <div className='login'>
      {isLogin
        ? (
              <div className='login-heading'>Login In</div>
          )
        : (
              <div className='login-heading'>Sign up</div>
          )}
        <InputHolder
          value={userName}
          onChange={setUserName}
          label='User Name'
        />
        <InputHolder
          value={password}
          onChange={setPassword}
          type='password'
          label='Password'
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          className='login-submit'
        >
          Submit
        </Button>
        <div
          onClick={onNavigate}
          className='login-switch'
        >
          {`${isLogin ? 'Do you want to Signup' : 'Have an account? Login'}`}
        </div>
     </div>
    </div>
  );
}

Login.propTypes = { isLogin: PropTypes.bool, };

Login.defaultProps = { isLogin: false, };

export default Login;
