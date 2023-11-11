/* eslint-disable */
const user = JSON.parse(localStorage.getItem('userInfo'));

const onCouponCreate = (couponTitle, couponDescription, couponVendor, couponValidity,
  couponValue, couponPrice, sold, couponType, couponCategory, couponListingDate,
  couponLocation, userId, categoryId, couponImage) => {
  const data = {
    couponName: couponTitle,
    couponDesc: couponDescription,
    couponBrand: couponVendor,
    expiryDate: couponValidity,
    couponValue: couponValue,
    couponSellingPrice: couponPrice,
    sold: sold,
    online: couponType,
    couponCategory: couponCategory,
    couponListingDate: couponListingDate,
    couponLocation: couponLocation,
    userid: userId,
    categoryID: categoryId,
    couponImage: couponImage,
  };
  return fetch(process.env.REACT_APP_END_POINT + '/api/coupon/create-coupons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}` },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((res) => console.log(res));
};

export { onCouponCreate, };
