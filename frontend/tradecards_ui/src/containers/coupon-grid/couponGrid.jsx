import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { coupons } from '../../components/coupon-listing/constants';
import NavBar from '../../components/nav-bar';

const CouponGrid = (props) => {
  const { couponLists, } = props;

  return (
    <div className='coupon-grid'>
      <NavBar/>
      <div className='coupon-grid-list'>
        <Box sx={{ flexGrow: 1, }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3, }}
            columns={{ xs: 4, sm: 8, md: 12, }}
          >
            {
              couponLists?.map((coupon) => (
                <Grid
                  item
                  key={coupon?.couponId || coupon?.couponName}
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
      </div>
    </div>
  );
};

CouponGrid.propTypes = { couponLists: PropTypes.arrayOf(PropTypes.shape({})), };

CouponGrid.defaultProps = { couponLists: coupons, };

export default CouponGrid;
