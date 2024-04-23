import React from "react";
import "../css/Register.css";

// Component for adding a new certificate
function AddCertificate() {
  const handleSubmit = (e) => {
    e.preventDefault();

   
    fetch("http://localhost:3000/add-certificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        committeeName: "Pratibimb",
        name: name,
        reg_id: reg_id,
        year: year,
        certificateLink: certificateLink,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [name, setName] = React.useState("");
  const [reg_id, setId] = React.useState("");
  const [year, setYear] = React.useState("");
  const [certificateLink, setCertificateLink] = React.useState("");



  
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
              <input placeholder="Name" type="text" 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              />
              
            
            </div>
            <div class="form-inp">
              <input placeholder="Registration ID" type="text" 
              value={reg_id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              />
            </div>
            <div class="form-inp">
              <input placeholder="Year" type="text" 
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              />
            </div>
            <div class="form-inp">
              <input placeholder="Add Certificate Link" type="text" 
              value={certificateLink}
              onChange={(e) => {
                setCertificateLink(e.target.value);
              }}
              />
            </div>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>OR</div>
            <div class="form-inp">
              <label for="excel-upload">Upload Excel Sheet</label>
              <input id="excel-upload" type="file" accept=".xlsx, .xls" />
            </div>
          </div>
          <div style={{fontSize:'13px'}}>Note: Fields in the excel sheet should not be empty</div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit" onClick={handleSubmit}>
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
