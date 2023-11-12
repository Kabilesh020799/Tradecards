import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import NavBar from '../../components/nav-bar';
import { convertBase64toImage } from '../../common-utils';
import { getAllCoupons } from '../home/apiUtils';
import { useNavigate } from 'react-router-dom';

const CouponGrid = (props) => {
  const [couponsData, setCouponsData,] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCoupons()
      .then((res) => setCouponsData(res));
  }, []);

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
              couponsData?.map((coupon) => (
                <Grid
                  item
                  key={coupon?.couponId || coupon?.couponName}
                  onClick={() => navigate(`/coupon-detail/${coupon?.couponId}`)}
                >
                  <Card sx={{ maxWidth: 300, }}>
                    <CardMedia
                      sx={{ height: 140, }}
                      image={convertBase64toImage(coupon?.couponImage)}
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
                      {
                      coupon?.couponImage
                        ? (
                          <Typography
                            variant='body2'
                            color="text.secondary"
                            className='coupon-listing-card-content-desc'
                          >
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ marginRight: '12px', }}
                            ></i>
                            {coupon?.couponLocation}
                          </Typography>
                          )
                        : null
                    }
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

export default CouponGrid;
