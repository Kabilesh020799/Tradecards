import React from 'react';
import { cities } from './constants';

const LocationSelector = () => {
  return (
    <div className='location-selector'>
      <div className='location-selector-detector'>
        <i
          className="fas fa-map-marker-alt"
        />
        <div>Detect my location</div>
      </div>
      <div className='location-selector-suggestion'>
        <div className='location-selector-suggestion-title'>
          Popular Cities
        </div>
        <div className='location-selector-suggestion-container'>
          {
            cities.map((city) => (
              <div key={city}>
                {city}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
