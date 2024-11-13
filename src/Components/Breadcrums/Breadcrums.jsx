import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

function Breadcrums(props) {
  const { product } = props; // Destructuring the product prop.

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow icon of breadcrum" /> 
      SHOP <img src={arrow_icon} alt="arrow icon of breadcrum" /> 
      {product.category} <img src={arrow_icon} alt="arrow icon of breadcrum" /> 
      {product.name} {/* Displaying the breadcrumb with the product's category and name */}
    </div>
  );
}

export default Breadcrums;
