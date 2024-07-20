import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='enter your name'/>
          <input type="email" placeholder='enter your email'/>
          <input type="password" placeholder='password'/>
        </div>
        <button>Continuou</button>
        <div className="loginsighup-login">
          Already ahve an account <span>Login here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuou I agree with term and condition</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
