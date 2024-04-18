import React from "react";
import "../css/Register.css";

// Component for adding a new certificate
function AddCertificate() {
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
            <div className="form-inp">
              <input placeholder="Name" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Registration ID" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Year" type="text" />
            </div>
            <div className="form-inp">
              <input placeholder="Add Certificate Link" type="text" />
            </div>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>OR</div>
            <div className="form-inp">
              <label htmlFor="excel-upload">Upload Excel Sheet</label>
              <input id="excel-upload" type="file" accept=".xlsx, .xls" />
            </div>
          </div>
          <div style={{fontSize:'13px'}}>Note: Fields in the excel sheet should not be empty</div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">
              Add Certificate
            </button>
          </div>

          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
}

export default AddCertificate;
