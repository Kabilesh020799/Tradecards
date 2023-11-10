import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));

const getCouponDetail = (id) => {
  return fetch(process.env.REACT_APP_END_POINT + '/api/coupon/get-coupon/' + id, { headers: { Authorization: `Bearer ${user.token}`, }, })
    .then((res) => res.json());
};

export { getCouponDetail, };
