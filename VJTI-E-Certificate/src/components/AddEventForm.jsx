import React, { useState, useRef } from "react";
import "../css/Register.css";
import ButtonU from "./ButtonU";
import { Button } from "react-bootstrap";

const AddEventForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [templateUploaded, setTemplateUploaded] = useState(false); // State to track if template file is uploaded
  const [eventImageUploaded, setEventImageUploaded] = useState(false); // State to track if event image file is uploaded
  const [templateFileName, setTemplateFileName] = useState(""); // State to store template file name
  const [eventImageFileName, setEventImageFileName] = useState(""); // State to store event image file name

  const templateFileInputRef = useRef(null); // Reference to template file input element
  const eventImageFileInputRef = useRef(null); // Reference to event image file input element

  const handleTemplateFileChange = (e) => {
    const file = e.target.files[0];
    // You may want to perform additional validation here
    setImage(file);
    setTemplateUploaded(true); // Update state when template file is uploaded
    setTemplateFileName(file.name); // Store template file name in state
  };

  const handleEventImageFileChange = (e) => {
    const file = e.target.files[0];
    // You may want to perform additional validation here
    setImage(file);
    setEventImageUploaded(true); // Update state when event image file is uploaded
    setEventImageFileName(file.name); // Store event image file name in state
  };

  const handleTemplateUploadClick = () => {
    // Trigger click event of template file input when "Upload Template" button is clicked
    templateFileInputRef.current.click();
  };

  const handleEventImageUploadClick = () => {
    // Trigger click event of event image file input when "Upload Event Image" button is clicked
    eventImageFileInputRef.current.click();
  };

  const handleSubmit = () => {
    console.log(name, image, year);
    // Perform your submit logic here
  };

  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">
              <b>Add Events</b>
            </div>
          </div>
          <div id="input-area">
            <div className="form-inp">
              <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            {/* Upload Template Button */}
            <div className="content">
              <Button onClick={handleTemplateUploadClick}>
                {templateUploaded ? <span>{templateFileName}</span> : <span>Upload Template</span>}
              </Button>
              <input
                type="file"
                ref={templateFileInputRef}
                onChange={handleTemplateFileChange}
                style={{ display: "none" }}
              />
            </div>
<br/>
            {/* Upload Event Image Button */}
            <div className="content">
              <Button onClick={handleEventImageUploadClick}>
                {eventImageUploaded ? <span>{eventImageFileName}</span> : <span>Upload Event Image</span>}
              </Button>
              <input
                type="file"
                ref={eventImageFileInputRef}
                onChange={handleEventImageFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
