import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/EventCard.css";

import AddEventForm from "./AddEventForm";

export const EventCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        className="card"
        onClick={handleShow}
        style={{ paddingLeft: "30px", cursor: "pointer" }}
      >
        <div className="card-title" style={{ paddingLeft: "15px" }}></div>
        <div className="card-des">
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="custom-modal"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="modal-body-container">
              <AddEventForm />
            </Modal.Body>
          </Modal>
          <AddCircleIcon
            style={{
              display: "flex",
              margin: "auto",
              marginRight: "85px",
              fontSize: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
};
