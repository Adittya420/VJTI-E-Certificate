import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/EventCard.css";
import AddEventForm from "./AddEventForm";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

export const EventCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "full", md: "lg" });

  return (
    <div>
      <div
        className="card"
        onClick={onOpen}
        style={{ paddingLeft: "30px", cursor: "pointer" }}
      >
        <div className="card-title" style={{ paddingLeft: "15px" }}></div>
        <div className="card-des">
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

      <ChakraModal
        isOpen={isOpen}
        onClose={onClose}
        size={modalSize}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxH="100vh"
          // overflowY="auto"
        >
          <ModalBody p={0}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddEventForm />
            </div>
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </div>
  );
};
