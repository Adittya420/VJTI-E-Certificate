import React, { useState } from "react";
import "../css/Login.css";
import "../css/Register.css";

function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleForm = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div id="form-ui">
      <form action="" method="post" id="form" onSubmit={handleSubmit}>
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">
              <b>VJTI E-Certificate</b>
            </div>
          </div>
          <div id="input-area">
            {isLoggedIn ? (
              <>
                <div className="form-inp">
                  <input placeholder="Email Address" type="text" />
                </div>
                <div className="form-inp">
                  <input placeholder="Password" type="password" />
                </div>
                <div id="submit-button-cvr">
                  <button id="submit-button" type="submit">
                    Login
                  </button>
                </div>
                <div id="forgot-pass">
                  <a href="#">Forgot password?</a>
                </div>
              </>
            ) : (
              <>
                <div className="form-inp">
                  <input placeholder="Name" type="text" />
                </div>
                <div className="form-inp">
                  <input placeholder="Registration ID" type="text" />
                </div>
                <div className="form-inp">
                  <input placeholder="Email Address" type="text" />
                </div>
                <div className="form-inp">
                  <input placeholder="Create Password" type="password" />
                </div>
                <div id="submit-button-cvr">
                  <button id="submit-button" type="submit">
                    Register
                  </button>
                </div>
              </>
            )}
          </div>
          <div id="bar"></div>
          <div id="toggle-form">
            {isLoggedIn ? (
              <p className="downcss">
                Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span onClick={handleToggleForm}>Register</span>
              </p>
            ) : (
              <p className="downcss">
                Already registered?{" "}
                <span onClick={handleToggleForm}>Login</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Authentication;
