import React from "react";
import "../css/Register.css";
import { useLocation } from "react-router-dom";

function Form() {
  const location = useLocation();
  const { title } = location.state;

  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">
              <b>{title}</b>
            </div>
          </div>
          <div id="input-area">
            <div className="form-inp">
              <input placeholder="Name" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Registration ID" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Year" type="text" />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">
              Get Certificate
            </button>
          </div>
          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
}

export default Form;
