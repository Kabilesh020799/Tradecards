import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCouponDetail } from './apiUtils';

const CouponDetail = () => {
  const { couponId, } = useParams();

  const [couponInfo, setCouponInfo,] = useState(null);

  useEffect(() => {
    getCouponDetail(couponId)
      .then((res) => setCouponInfo(res));
  }, []);

  console.log(couponInfo);
  return (
    <div className='coupon-detail'>
      <img />
    </div>
  );
};

export default CouponDetail;
