import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import dullstar_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-container">
          <img className="productdisplay-main-img" src={product.image} alt="" />
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dullstar_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          This lightweight, knitted pullover is perfect for layering on cooler days. Crafted from soft, breathable fabric, it offers comfort and warmth without being bulky. The versatile design features a relaxed fit, making it an ideal choice for casual outings or cozy indoor wear. Whether paired with jeans or skirts, this pullover adds a touch of style to any wardrobe.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
       </div>
        <button className='cart-button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Crop Top</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
