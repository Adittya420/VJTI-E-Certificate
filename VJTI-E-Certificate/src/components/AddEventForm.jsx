import React, { useState } from "react";
import "../css/Register.css";
import ButtonU from "./ButtonU";

const AddEventForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    console.log(name, description, year);

    // fetch("http://localhost:3000/add-event-card", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: name,
    //     description: description,
    //     year: year
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
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
            <div>
              <ButtonU />
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
