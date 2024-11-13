import React from 'react'
import './LoginSignup.css';
function LoginSignup() {
  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Enter your Name' />
        <input type="email" placeholder='Enter your Email Address' />
        <input type="password" placeholder='password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account ? <span>Login Here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing,I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignup