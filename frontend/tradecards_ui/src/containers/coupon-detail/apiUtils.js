const getCouponDetail = (id) => {
  return fetch(process.env.REACT_APP_END_POINT + '/api/coupon/get-coupon/' + id)
    .then((res) => res.json());
};

export { getCouponDetail, };
