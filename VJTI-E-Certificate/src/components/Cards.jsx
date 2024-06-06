import React from "react";
import { Link } from "react-router-dom";
import "../css/Cards.css";

// import { useHistory } from "react-router-dom";

export const Cards = ({ title, description, image, onClick }) => {
  // const history = useHistory();

  return (
    // <Link to={to} className="card" style={{ paddingLeft: "30px" }}>
    <div className="card" onClick={onClick} style={{ padding: "25px", height:'300px', width:'270px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="card-title" style={{ paddingLeft: "15px" }}>
    <h3>{title}</h3>
  </div>
  <div className="card-des">
    <img src={image} alt="" style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }} />
  </div>
</div>

    // </Link>
  );
};
