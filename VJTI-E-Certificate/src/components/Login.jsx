import React, { useState, useContext } from "react";
import "../css/Login.css";
import "../css/Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { setRole } from './Constants';

function Authentication() {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoginForm) {
        // Login submission
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        // Make an API call to the login endpoint
        const response = await axios.post('http://localhost:3000/login', {
          email,
          password,
        });

        // Handle the response
        if (response.status === 200) {
          alert('Login successful');
          // Store the token or user data in local storage or state
          localStorage.setItem('access_token', response.data.access_token);

          // Set the role based on the response
          setRole(response.data.role);
          
          setIsLoggedIn(true);
          navigate('/');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } else {
        // Registration submission
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const id = e.target.elements.id.value;
        const password = e.target.elements.password.value;

        // Make an API call to the registration endpoint
        const response = await axios.post('http://localhost:3000/register', {
          name,
          email,
          id,
          password,
        });

        // Handle the response
        if (response.status === 201) {
          alert('User registered successfully');
          navigate('/');
        } else {
          alert('Registration failed. Please try again.');
        }
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
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
            {isLoginForm ? (
              <>
                <div className="form-inp">
                  <input placeholder="Email Address" type="text" name="email" />
                </div>
                <div className="form-inp">
                  <input placeholder="Password" type="password" name="password" />
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
                  <input placeholder="Name" type="text" name="name" />
                </div>
                <div className="form-inp">
                  <input placeholder="Email Address" type="text" name="email" />
                </div>
                <div className="form-inp">
                  <input placeholder="Registration ID" type="text" name="id" />
                </div>
                <div className="form-inp">
                  <input placeholder="Create Password" type="password" name="password" />
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
            {isLoginForm ? (
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
