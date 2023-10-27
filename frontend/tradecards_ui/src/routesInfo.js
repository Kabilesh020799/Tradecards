import React from 'react';
import Login from './containers/login';
<<<<<<< HEAD
import ForgetPassword from './containers/forgetPassword';
=======
import Home from './containers/home';
import CouponGrid from './containers/coupon-grid/';
>>>>>>> dev

const routes = [
  {
    id: 'login',
    route: 'login',
    component: <Login isLogin={true} />,
  },
  {
    id: 'signup',
    route: 'signup',
    component: <Login />,
  },
  {
    id: 'forget-password',
    route: 'forget-password',
    component: <ForgetPassword />,
  },
  {
    id: 'home',
    route: 'home',
    component: <Home />,
  },
  {
    id: 'coupon-listing',
    route: 'coupon-listing',
    component: <CouponGrid />,
  },
];

export default routes;
