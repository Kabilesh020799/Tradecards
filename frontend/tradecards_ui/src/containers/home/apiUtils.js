import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));

const getAllCoupons = () => {
  return fetch(process.env.REACT_APP_END_POINT + '/api/coupons', {
    method: 'GET',
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json());
};

export { getAllCoupons, };
