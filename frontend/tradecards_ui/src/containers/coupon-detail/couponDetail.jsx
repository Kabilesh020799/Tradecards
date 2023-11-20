import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCouponDetail, getUserDetail } from './apiUtils';
import { convertBase64toImage } from '../../common-utils';
import './style.scss';
import NavBar from '../../components/nav-bar';
import { Button } from '@mui/material';
import ReviewStars from '../../components/review-stars';
import ChatModal from './chat-modal';

const CouponDetail = () => {
  const { couponId, } = useParams();

  const [couponInfo, setCouponInfo,] = useState(null);
  const [user, setUser,] = useState({});
  const [isChatOpened, setIsChatOpened,] = useState(false);

  useEffect(() => {
    getCouponDetail(couponId)
      .then((res) => {
        setCouponInfo(res);
        return getUserDetail(res?.userid);
      })
      .then((res) => setUser(res));
  }, []);

  const getAverageReview = (reviews) => {
    return reviews?.reduce((sum, review) => sum + review?.rating, 0) / reviews?.length;
  };

  const convertDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='coupon-detail'>
      <NavBar />
      <div
        className='coupon-detail-image-container'
        style={
        { background: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%), url(${convertBase64toImage(couponInfo?.couponImage)})`, }
      }>
        <img
          src={convertBase64toImage(couponInfo?.couponImage)}
          className='coupon-detail-image'
        />
        <div className='d-flex'>
          <div>
            <div className='coupon-detail-image-container-name'>
              {couponInfo?.couponName}
            </div>
            <div className='coupon-detail-image-container-brand'>
              {couponInfo?.couponBrand}
            </div>
          </div>
          <div>
            <div className='coupon-detail-image-container-price'>
              <span style={{ fontWeight: 'bold', fontSize: '24px', }}>Original Price- </span>
              $ {couponInfo?.couponValue}
            </div>
            <div className='coupon-detail-image-container-price'>
              <span style={{ fontWeight: 'bold', fontSize: '24px', }}>Selling Price- </span>
              $ {couponInfo?.couponSellingPrice}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', }}>Willing to buy?</div>
            <Button
              variant='contained'
              className='coupon-detail-image-container-btn'
              onClick={() => setIsChatOpened(true)}
            >
              Have a chat with seller
            </Button>
          </div>
        </div>
      </div>
      <div className='coupon-detail-info'>
        <div className='coupon-detail-info-desc-heading'>
          About the Coupon
        </div>
        <div className='coupon-detail-info-desc'>
          {couponInfo?.couponDesc}
        </div>
        <div className='coupon-detail-info-seller'>
          <div style={{ fontWeight: 'bold', }}>Seller Information</div>
          <div className='coupon-detail-info-seller-name'>
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
            <span className='coupon-detail-info-seller-name-star'>
              {user?.receivedReviews ? <ReviewStars review={getAverageReview(user?.receivedReviews)}/> : null}
            </span>
          </div>
          <div style={{ fontWeight: 'bold', }}>Popular Reviews</div>
          <div className='reviews'>
            {user?.receivedReviews?.map((review) => (
              <div
                key={review?.reviewId}
                className='review'
              >
                <div className='review-content'>{review?.content}</div>
                <ReviewStars review={review?.rating}/>
                <div className='review-date'>{convertDate(review?.reviewDate)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatModal
        isOpen={isChatOpened}
        onClose={() => setIsChatOpened(false)}
        receiver={user}
      />
    </div>
  );
};

export default CouponDetail;
