import React, { createContext,useState } from "react";
import all_product from "../Components/Assets/all_product";

// creating a ShopContext using React's Context API. This allows the all_product data to be accessible to any component that consumes the ShopContext. To make all_product available throughout the app, wrap the main application component with ShopContextProvider in entry file (e.g., App.js or index.js).
// i am using in the index

const getDefaultCart = () =>{
      let cart = {};
      for (let index = 0; index < all_product.length; index++) {
           cart[index] = 0;
      }
      return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
      
      const [cartItems,setCartItems] = useState(getDefaultCart());

      const addToCart = (itemId) => {
            setCartItems((prev) => ({
                  ...prev, // Keep all existing items the same
                  [itemId]: prev[itemId] + 1 // Add 1 to the quantity of the item we want to update
            }));
            console.log(cartItems); // Log the cart to see the current state
      }
      
      const removeFromCart = (itemId) => {
            setCartItems((prev) => ({
                  ...prev, // Keep all existing items the same
                  [itemId]: prev[itemId] - 1 // Subtract 1 from the quantity of the item we want to update
            }));
            console.log(cartItems); // Log the cart to see the current state
      }
      

      const getTotalCartAmount=()=>{
            let totalAmount = 0;
            for(const item in cartItems){
                  if(cartItems[item] > 0){
                        let itemInfo = all_product.find((product)=>product.id===Number(item));
                        totalAmount +=itemInfo.new_price*cartItems[item];
                  }
            }
            return totalAmount;
      }

      const getTotalCartItems = ()=>{
            let totalItem = 0;
            for(const item in cartItems){
                  if(cartItems[item] > 0){
                        totalItem += cartItems[item];
                  }
            }
            return totalItem;
      }

      const contextValue = { all_product , cartItems , addToCart , removeFromCart,getTotalCartAmount,getTotalCartItems};

     
      return (
      <ShopContext.Provider value={contextValue}>
            {props.children}
      </ShopContext.Provider>
      );
};

export default ShopContextProvider;