/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './style.css';

const Hotel = ({ hotel }) => (
  <NavLink to={`/hotels/${hotel.id}`} className="link">
    <div className="room-card">
      <div className="room-image-container">
        <img src={hotel.picture} alt={hotel.name} className="hotel-image" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold uppercase mt-5 text-[15px] room-name">
          {hotel.name}
        </h2>
        <div className="room-description">
          <div className="room-social">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  </NavLink>
);

export default Hotel;
