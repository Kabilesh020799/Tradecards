const getAllCoupons = () => {
  return fetch(process.env.REACT_APP_END_POINT + '/api/coupons', { method: 'GET', })
    .then((res) => res.json());
};

export { getAllCoupons, };
