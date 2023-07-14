import './Form.scss';

import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Form = () => {
  return (
    <form className="form">
      <PlaceIcon className="form__geo_search" />

      <input
        className="form__input"
        type="text"
        name="text"
        placeholder="Search for the location you want!"
      />

      <button className="form__btn">
        Search
        <ArrowForwardIosIcon />
      </button>
    </form>
  );
};
