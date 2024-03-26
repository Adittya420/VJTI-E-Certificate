import React from "react";
import { Link } from "react-router-dom";
import "../css/Cards.css";

export const Cards = ({ title, description, imgUrl, onClick }) => {


  const Navigate = () => {
    history.push("/Form"); // Replace '/form' with the actual path to your Form component
  };

  return (
    <div className="card" onClick={onClick} style={{ paddingLeft: "30px" }}>
      <div className="card-title" style={{ paddingLeft: "15px" }}>
        <h3>{title}</h3>
      </div>
      <div className="card-des">
        <img src={imgUrl} alt="" style={{ width: "200px" }} />
      </div>
    </div>
  );
};
