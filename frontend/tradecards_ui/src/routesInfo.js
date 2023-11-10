import React from 'react';
import Login from './containers/login';
import ForgetPassword from './containers/forgetPassword';
import Home from './containers/home';
import CouponGrid from './containers/coupon-grid/';
import CouponDetail from './containers/coupon-detail';

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
  {
    id: 'coupon-details',
    route: 'coupon-detail/:couponId',
    component: <CouponDetail />,
  },
];

export default routes;
