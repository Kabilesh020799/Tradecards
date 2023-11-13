import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));

const getAllCoupons = () => {
  return fetch(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_END_POINT_PROD : process.env.REACT_APP_END_POINT + '/api/coupons', {
    method: 'GET',
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json());
};

const getCouponsByCategory = ({ categoryId, }) => {
  return fetch(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_END_POINT_PROD : process.env.REACT_APP_END_POINT + '/api/coupons', {
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

export {
  getAllCoupons,
  getCouponsByCategory,
};
