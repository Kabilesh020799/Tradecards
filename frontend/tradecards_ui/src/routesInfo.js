import React from 'react';
import Login from './containers/login';

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
    component: <div></div>,
  },
  {
    id: 'home',
    route: 'home',
    component: <div></div>
  },
];

export default routes;
