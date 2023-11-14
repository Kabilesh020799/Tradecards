import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));
// const REACT_APP_END_POINT = 'http://localhost:8080';
const REACT_APP_END_POINT_PROD = 'http://localhost:8080';

const getCouponDetail = (id) => {
  return fetch(REACT_APP_END_POINT_PROD + '/api/coupon/get-coupon/' + id, { headers: { Authorization: `Bearer ${user.token}`, }, })
    .then((res) => res.json());
};

const getUserDetail = (id) => {
  return fetch(REACT_APP_END_POINT_PROD + `/api/users/details/${id}`,
    { headers: { Authorization: `Bearer ${user.token}`, }, })
    .then((res) => res.json());
};

export { getCouponDetail, getUserDetail, };
