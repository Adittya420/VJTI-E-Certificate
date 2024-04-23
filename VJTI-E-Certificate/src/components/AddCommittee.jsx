import React from "react";
import "../css/addCertificate.css";
function AddCommittee() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, description, image);
    fetch("http://localhost:3000/add-committee-card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        description: description,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
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
              <input
                placeholder="Title"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="form-inp">
              <input
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div class="form-inp">
              <input
                placeholder="Image"
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit" onClick={handleSubmit}>
              Add Committee
            </button>
          </div>

          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
}

export default AddCommittee;
