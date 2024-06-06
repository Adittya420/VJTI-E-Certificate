import React from "react";
import "../css/Register.css";
function Register() {
  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">
              <b>VJTI E-Certificate</b>
            </div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input placeholder="Name" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Registration ID" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Email Address" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Create Password" type="password" />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">
              Register
            </button>
          </div>

          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
}

export default Register;
