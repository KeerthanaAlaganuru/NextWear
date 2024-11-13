import React from 'react'
import './DescriptionBox.css'
import { DiVim } from 'react-icons/di'

function DescriptionBox() {
  return (
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box">
            Reviews (150)
          </div>
        </div>
        <div className="descriptionbox-description">
          <p>Welcome to our online store! We offer a wide range of high-quality products at affordable prices. Whether you're looking for the latest fashion, gadgets, or home essentials, we've got you covered. Enjoy a seamless shopping experience with fast shipping and easy returns. Start shopping today and find the perfect items for you!</p>
          <p> Our easy-to-navigate website ensures a smooth shopping experience, and our dedicated customer support is always here to assist you. Shop with confidence and enjoy fast, reliable delivery straight to your doorstep.</p>
        </div>
      </div>

  )
}

export default DescriptionBox