import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));
// const REACT_APP_END_POINT = 'http://localhost:8080';
const REACT_APP_END_POINT_PROD = 'http://localhost:8080';

const getAllCoupons = () => {
  return fetch(REACT_APP_END_POINT_PROD + '/api/coupons', {
    method: 'GET',
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json());
};

const getCouponsByCategory = ({ categoryId, }) => {
  return fetch(REACT_APP_END_POINT_PROD + '/api/coupons', {
    method: 'GET',
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json())
    .then((res) => {
      if (categoryId) {
        return res.filter((resItem) => resItem.categoryID === Number(categoryId));
      } else {
        return res;
      }
    });
};

const getCouponsByUser = ({ userid, }) => {
  return fetch(REACT_APP_END_POINT_PROD + '/api/coupons', {
    method: 'GET',
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json())
    .then((res) => {
      if (userid) {
        return res.filter((resItem) => resItem.userid === Number(userid));
      } else {
        return res;
      }
    });
};

export {
  getAllCoupons,
  getCouponsByCategory,
  getCouponsByUser,
};
