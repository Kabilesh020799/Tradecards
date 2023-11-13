/* eslint-disable import/no-extraneous-dependencies */
import { Button, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { onCouponCreate } from './apiUtils';
import { useNavigate } from 'react-router-dom';
import InputHolder from '../login/components/input';

function CouponCreate (props) {
  const [couponTitle, setCouponTitle,] = useState('');
  const [couponDescription, setCouponDescription,] = useState('');
  const [couponVendor, setCouponVendor,] = useState('');
  const [couponCategorySelect, setCouponCategorySelect,] = useState([]);
  const [couponCategory, setCouponCategory,] = useState('Grocery');
  const [couponCategoryId, setCouponCategoryId,] = useState(null);
  const [couponValue, setCouponValue,] = useState('');
  const [couponPrice, setCouponPrice,] = useState('');
  const [couponValidity, setCouponValidity,] = useState('');
  const [couponLocation, setCouponLocation,] = useState('');
  const [couponListingDate, setCouponListingDate,] = useState('');
  const [couponImage, setCouponImage,] = useState('');
  const [couponType, setCouponType,] = useState(true);

  const couponValueNumber = Number(couponValue);
  const couponPriceNumber = Number(couponPrice);
  const couponCategoryIdNumber = Number(couponCategoryId);
  const sold = false;
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const userId = user.userId;

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    setCouponListingDate(formattedDate);
    const user2 = JSON.parse(localStorage.getItem('userInfo'));
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_END_POINT + '/api/categories', {
          headers: {
            Authorization: `Bearer ${user2.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCouponCategorySelect(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        setCouponImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = couponCategorySelect.find(
      (coupon) => coupon.categoryName === event.target.value
    );

    if (selectedCategory) {
      const { categoryID, categoryName, } = selectedCategory;
      setCouponCategory(categoryName);
      setCouponCategoryId(categoryID);
      console.log(categoryID, categoryName);
    }
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    onCouponCreate(couponTitle, couponDescription, couponVendor, couponValidity,
      couponValueNumber, couponPriceNumber, sold, couponType, couponCategory,
      couponListingDate, couponLocation, userId, couponCategoryIdNumber, couponImage);
  };

  const onNavigate = () => {
    navigate('/home');
  };

  return (
    <div className='createCoupon-wrapper'>
     <div className='createCoupon'>
      <div className='createCoupon-heading'>Post a coupon!</div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Name:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponTitle}
          onChange={setCouponTitle}
          placeholder="Coupon Name"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Description:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponDescription}
          onChange={setCouponDescription}
          placeholder="Description"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Vendor:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponVendor}
          onChange={setCouponVendor}
          placeholder="Vendor"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Category</label>
        <Select
          className='createCoupon-dropdown'
          id='couponCategorySelect'
          labelId='couponCategorySelectLabel'
          value={couponCategory}
          onChange={handleCategoryChange}
          label="Category"
          defaultValue='Grocery'
        >
        {couponCategorySelect.map((coupon) => (
          <MenuItem
            key={coupon.categoryID}
            value={coupon.categoryName}>
              {coupon.categoryName}
          </MenuItem>
        ))}
        </Select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon type</label>
        <Select
          className='createCoupon-dropdown'
          id='couponTypeSelect'
          labelId='couponTypeSelectLabel'
          value={couponType}
          onChange={e => setCouponType(e.target.value)}
          label="Category"
        >
            <MenuItem value={true}>Online</MenuItem>
            <MenuItem value={false}>Offline</MenuItem>
        </Select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Value:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponValue}
          onChange={setCouponValue}
          placeholder="Original Value"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Price:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponPrice}
          onChange={setCouponPrice}
          placeholder="Selling price"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Expiry Date:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponValidity}
          onChange={setCouponValidity}
          type="date"
          placeholder="Validity"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Coupon Location:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponLocation}
          onChange={setCouponLocation}
          placeholder="Location"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Listing date:</label>
        <InputHolder
          className='createCoupon-input'
          value={couponListingDate}
          onChange={setCouponListingDate}
          readOnly={true}
          placeholder="Lisiting date"
        />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', }}>
        <label style={{ marginRight: '10px', }}>Upload photo!</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          placeholder="Image"
          style={{ margin: '10px 0', }}
        />
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

CouponCreate.propTypes = { isEdit: PropTypes.bool, };

CouponCreate.defaultProps = { isEdit: false, };

export default CouponCreate;
