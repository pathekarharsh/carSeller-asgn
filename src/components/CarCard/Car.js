import React, { useState } from "react";
import { FaGasPump, FaRoad, FaCogs, FaRegHeart } from "react-icons/fa";
import "./Car.css";
import { BsFillPeopleFill } from "react-icons/bs";

const Car = (props) => {
  const { imgURL, title, modelYear, fuelType, mileage, transmission, price } =
    props;

  return (
    <div className="card">
      <img src={props.imgURL} alt={props.title} className="card-image" />
      <div className="card-details">
        <div className="row-1">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-year">{props.modelYear}</p>
        </div>
        <div className="card-icons">
          <div className="icon_row_1">
            <div className="icon">
              <FaGasPump size={24} />
              &nbsp;&nbsp;{props.fuelType}
            </div>
            <div className="icon">
              <FaRoad size={24} />
              &nbsp;&nbsp;{props.mileage}
            </div>
          </div>
          <div className="icon_row_1">
            <div className="icon">
              <FaCogs size={24} />
              &nbsp;&nbsp;{props.transmission}
            </div>
            <div className="icon">
              <BsFillPeopleFill size={24} />
              &nbsp;&nbsp;{props.members}
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <div className="icon">
          <h4>$ {props.price}/month</h4>
        </div>
        <div className='heart-icon'>
          <FaRegHeart size={24} />
          </div>
        <button className="rent-button">Rent Now</button>
      </div>
    </div>
  );
};

export default Car;
