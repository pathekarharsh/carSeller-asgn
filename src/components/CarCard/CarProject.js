import "./Car.css";
import Car from "./Car";
import CarData from "./CarData";
import React, { useState } from "react";
import Footer from "../Footer";

const itemsPerPage = 6; // Number of items to display per page
const totalItems = CarData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const CarProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Function to filter car data based on the current page
  const getCarDataForPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return CarData.slice(startIndex, endIndex);
  }
    
  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      {getCarDataForPage().map((value, index) => {
          console.log(value);
          return (
            <Car
              key={index}
              imgURL={value.imgURL}
              title={value.title}
              modelYear={value.modelYear}
              price={value.price}
              fuelType={value.fuelType}
              transmission={value.transmission}
              mileage={value.mileage}
              members={value.members}
            />
          );
      })}
      <div className='footer'>
       <Footer onPageChange={handlePageChange} totalPages={totalPages} />
       </div>
      </div>
  );
};

export default CarProject;


