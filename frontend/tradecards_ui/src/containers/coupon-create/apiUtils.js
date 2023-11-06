const baseUrl = 'http://localhost:8080/';

const onCouponCreate = (couponTitle, couponDescription, couponVendor, couponValidity,
  couponValue, couponPrice, couponCategory, couponListingDate,
  couponLocation, couponImage) => {
  const data = {
    couponTitle,
    couponDescription,
    couponVendor,
    couponValidity,
    couponValue,
    couponPrice,
    couponCategory,
    couponListingDate,
    couponLocation,
    couponImage,
  };
  fetch(baseUrl + 'api/create-coupons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
  ;
};

export { onCouponCreate, };
