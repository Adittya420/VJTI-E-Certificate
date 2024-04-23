import React from "react";
import "../css/Register.css";

// Component for adding a new certificate
function AddCertificate() {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleAddCertificate = () => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enable cross-origin request if needed
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, img.width, img.height);

      ctx.font = "80px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(`${firstName} ${lastName}`, 265, 435); // Adjust coordinates as needed

      canvas.toBlob((blob) => {
        saveAs(blob, "certificate.png");
      }, "image/png");
    };

    img.src = "/template2.png";
  };

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
              <input
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-inp">
              <input
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-inp">
              <input
                placeholder="Year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
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

            <button
              id="submit-button"
              type="button"
              onClick={handleAddCertificate}
            >
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
