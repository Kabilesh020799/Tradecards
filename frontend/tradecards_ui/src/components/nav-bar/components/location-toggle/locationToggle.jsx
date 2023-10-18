import React, { useState } from 'react';
import { APIKEY } from '../../constants';
import PropTypes from 'prop-types';
import { Button, Modal } from '@mui/material';
import LocationSelector from '../location-selector/locationSelector';

const LocationToggle = (props) => {
  const {
    onLocationChange,
    location,
  } = props;

  const [isModalOpen, setIsModalOpen,] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getLocationInfo = (latitude, longitude) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIKEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          onLocationChange(data?.results?.[0]?.components?.city);
        } else {
          console.log('Reverse geolocation request failed.');
        }
      })
      .catch((error) => console.error(error));
  };
  const success = (pos) => {
    const crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);
  };
  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const onDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation', })
        .then((result) => {
          if (result.state === 'granted') {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          }
        });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className='nav-bar-location'>
      <div
        className='nav-bar-location-contents'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='nav-bar-location-contents-label'>{location || 'Halifax'}</div>
        <i className={`fa fa-chevron-circle-${isModalOpen ? 'up' : 'down'}`}></i>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className='nav-bar-modal'
      >
        <div className='nav-bar-modal-contents'>
          <LocationSelector
            onDetectLocation={onDetectLocation}
          />
          <div className='nav-bar-modal-contents-footer'>
            <Button
              onClick={() => setIsModalOpen(false)}
              variant='outlined'
              className='nav-bar-modal-contents-footer-btn cancel'
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              className='nav-bar-modal-contents-footer-btn'
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

LocationToggle.propTypes = {
  location: PropTypes.string,
  onLocationChange: PropTypes.func,
};

export default LocationToggle;
