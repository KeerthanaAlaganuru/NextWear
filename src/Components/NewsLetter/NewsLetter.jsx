import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <>
        <div class="news-letter">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get the latest updates and offers.</p>
          
          <div class="news-letter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="empty">
          
        </div>
    </>
  )
}

export default NewsLetter