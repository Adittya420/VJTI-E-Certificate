import React from 'react'
import '../css/Login.css'
function Login() {
  return (
   
  <div id="form-ui">
  <form action="" method="post" id="form">
    <div id="form-body">
      <div id="welcome-lines">
        <div id="welcome-line-1"><b>VJTI E-Certificate</b></div>
        <div id="welcome-line-2">Welcome Back, Loyd</div>
      </div>
      <div id="input-area">
        <div class="form-inp">
          <input placeholder="Email Address" type="text"/>
        </div>
        <div class="form-inp">
          <input placeholder="Password" type="password"/>
        </div>
      </div>
      <div id="submit-button-cvr">
        <button id="submit-button" type="submit">Login</button>
      </div>
      <div id="forgot-pass">
        <a href="#">Forgot password?</a>
      </div>
      <div id="bar"></div>
    </div>
  </form>
  </div>


  )
}

export default Login
