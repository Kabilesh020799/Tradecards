/* eslint-disable import/no-extraneous-dependencies */
import { Button, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { onCouponCreate } from './apiUtils';
import { useNavigate } from 'react-router-dom';
import InputHolder from '../login/components/input';

function CouponCreate (props) {
  const [couponTitle, setCouponTitle,] = useState(null);
  const [couponDescription, setCouponDescription,] = useState(null);
  const [couponVendor, setCouponVendor,] = useState(null);
  const [couponCategory, setCouponCategory,] = useState(0);
  const [couponValue, setCouponValue,] = useState(null);
  const [couponPrice, setCouponPrice,] = useState(null);
  const [couponValidity, setCouponValidity,] = useState(null);
  const [couponLocation, setCouponLocation,] = useState(null);
  const [couponListingDate, setCouponListingDate,] = useState(null);
  const [couponImage, setCouponImage,] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    setCouponListingDate(formattedDate);
  }, []);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setCouponImage(file);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        setCouponImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    onCouponCreate();
  };

  const onNavigate = () => {
    navigate('/home');
  };

  return (
    <div className='createCoupon-wrapper'>
      {/* <img
        className='login-image'
        src='/img/logo.png'
      /> */}
     <div className='createCoupon'>
      {
        <div className='createCoupon-heading'>Post a coupon!</div>
      }

      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Name:</label>
        <InputHolder
          value={couponTitle}
          onChange={setCouponTitle}
          placeholder="Coupon Name"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Description:</label>
        <InputHolder
          value={couponDescription}
          onChange={setCouponDescription}
          placeholder="Description"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Vendor:</label>
        <InputHolder
          value={couponVendor}
          onChange={setCouponVendor}
          placeholder="Vendor"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Category</label>
        <Select
          id='couponCategorySelect'
          labelId='couponCategorySelectLabel'
          value={couponCategory}
          onChange={e => setCouponCategory(e.target.value)}
          label="Category"
        >
            <MenuItem value={0}>
              <em>Select category</em>
            </MenuItem>
            <MenuItem value={1}>Restaurant coupon</MenuItem>
            <MenuItem value={2}>Grocery coupon</MenuItem>
            <MenuItem value={3}>Electronics coupon</MenuItem>
            <MenuItem value={4}>Clothing coupon</MenuItem>
            <MenuItem value={5}>Beauty and personal care coupon</MenuItem>
            <MenuItem value={6}>Other coupons</MenuItem>
        </Select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Price:</label>
        <InputHolder
          value={couponValue}
          onChange={setCouponValue}
          placeholder="Original Value"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Price:</label>
        <InputHolder
          value={couponPrice}
          onChange={setCouponPrice}
          placeholder="Selling price"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Expiry Date:</label>
        <InputHolder
          value={couponValidity}
          onChange={setCouponValidity}
          type="date"
          placeholder="Validity"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Location:</label>
        <InputHolder
          value={couponLocation}
          onChange={setCouponLocation}
          placeholder="Location"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Listing date:</label>
        <InputHolder
          value={couponListingDate}
          onChange={setCouponListingDate}
          readOnly={true}
          placeholder="Lisiting date"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Upload photo!</label>
        <InputHolder
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          placeholder="Image"
          style={{ margin: '10px 0', }}
        />
        {/* Display the selected image if available */}
        {couponImage && (
            <img
              src={URL.createObjectURL(couponImage)}
              alt="Selected"
              style={{ maxWidth: '100px', marginTop: '10px', }}
            />
        )}
        </div>
        <Button
          variant="contained"
          onClick={onSubmit}
          className='createCoupon-submit'
        >
          Submit
        </Button>
        <div
          onClick={() => onNavigate()}
          className='createCoupon-switch'
        >
          {`${'Go back to Home'}`}
        </div>
     </div>
    </div>
  );
}

export default CouponCreate;
