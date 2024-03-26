import React from "react";
import "../css/Register.css";
function Form() {
  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">
              <b>Add Committee</b>
            </div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input placeholder="Title" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Description" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Image" type="text" />
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
