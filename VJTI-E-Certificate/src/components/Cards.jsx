import React from "react";
import "../css/Cards.css";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <div classNameName="card">
      <p className="card-title"></p>
      <p className="card-des">
        <img src="./vite.svg" alt="" srcset="" />
        <h3>Enthu</h3>
      </p>
      <p className="card-text">
        <Link style={{ color: "white" }} to="/form">
          View More
        </Link>
        <svg
          className="arrow-icon"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          ></path>
        </svg>
      </p>
    </div>
  );
}

export default Cards;
