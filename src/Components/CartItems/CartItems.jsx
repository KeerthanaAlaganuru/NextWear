import React, { useContext } from 'react';
import './CartItems.css';  // Ensure this path and extension is correct
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

function CartItems() {
  const { all_product, cartItems, removeFromCart ,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className='cartitems-quantity'>{cartItems[e.id]}</p>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img 
                  src={remove_icon} 
                  alt="Remove" 
                  onClick={() => removeFromCart(e.id)}  // Corrected to call the function with e.id
                  className="cart-remove-icon"  // Add a class for styling if needed
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // To prevent warnings for missing returns in map
      })}
      <div className="cartitems-down">
            <div className="cartitems-total">
                  <h1>Cart Totals</h1>
                  <div>
                        <div className="cartitems-total-item">
                              <p>Subtotal</p>
                              <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                              <p>Shopping Fee</p>
                              <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                              <h3>Total</h3>
                              <h3>${getTotalCartAmount()}</h3>
                        </div>

                  </div>
                  <button>PROCEED TO CHECK OUT</button>
            </div>
            <div className="cartitems-promocode">
                  <p>If you have promo code,Enter here</p>
                  <div className="cartitems-promobox">
                        <input type="text" placeholder='Enter the promo code' />
                        <button>Submit</button>
                  </div>
            </div>
      </div>
    </div>
  );
}

export default CartItems;
