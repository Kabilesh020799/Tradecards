import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { coupons } from './constants';
import { NavLink } from 'react-router-dom';

const CouponListing = (props) => {
  const {
    heading,
    couponLists,
    isMoreCouponsAvailable,
  } = props;

  return (
    <>
      <div className='coupon-listing-header'>
        <div className='coupon-listing-header-heading'>{heading}</div>
        <div>
          {
            isMoreCouponsAvailable
              ? (
              <NavLink
                to="/coupon-listing"
                className="coupon-listing-header-see-more"
              >
                See all
              </NavLink>
                )
              : null
          }
        </div>
      </div>
      <Box sx={{ flexGrow: 1, }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, }}
          columns={{ xs: 4, sm: 8, md: 12, }}
        >
          {
            couponLists?.slice(0, 5)?.map((coupon) => (
              <Grid
                item
                key={coupon?.couponId}
              >
                <Card sx={{ maxWidth: 300, }}>
                  <CardMedia
                    sx={{ height: 140, }}
                    image={coupon?.couponImage}
                    title={coupon?.couponName}
                  />
                  <CardContent className='coupon-listing-card-content'>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component="div"
                      className='coupon-listing-card-content-heading'
                    >
                      {coupon?.couponName}
                    </Typography>
                    <Typography
                      variant='body2'
                      color="text.secondary"
                      className='coupon-listing-card-content-desc'
                    >
                      {coupon?.couponDesc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{coupon.userName}</Button>
                    <Button size="small">Buy Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>

  );
};

CouponListing.propTypes = {
  heading: PropTypes.string,
  couponLists: PropTypes.arrayOf(PropTypes.shape({})),
  isMoreCouponsAvailable: PropTypes.bool,
};

CouponListing.defaultProps = {
  heading: 'Recommended Coupons',
  couponLists: coupons,
  isMoreCouponsAvailable: true,
};

export default CouponListing;
