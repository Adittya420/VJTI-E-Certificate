import React, { useState } from "react";
import { EventCard } from "./EventCard";
import { Cards } from "./Cards";
import SubscriptionForm from "./AddYear"; // Import your AddYear component
import "../css/EventCard.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  background,
  useBreakpointValue,
} from "@chakra-ui/react";

import { USER } from "./Constants";
import AddCertificate from "./AddCertificate";

const Events = () => {
  const modalSize = useBreakpointValue({ base: "full", md: "lg" });
  const cardsPerRow = 3; // Number of cards per row
  const cards = []; // Array to store Card components
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hooks for managing modal state

  // Generate Card components
  for (let i = 0; i < 6; i++) {
    cards.push(<Cards key={i} />); // Pass onOpen function to Cards component
  }

  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns: `1fr repeat(${cardsPerRow}, minmax(200px, 1fr))`,
        }}
      >
        <EventCard className="card" />
        {cards.map((card, index) => (
          <div
            onClick={onOpen}
            key={index}
            style={{
              marginRight: index % cardsPerRow === cardsPerRow - 1 ? 0 : "20px",
            }}
          >
            {card}
          </div>
        ))}
      </div>
      {USER == "admin" && (
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
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
                <AddCertificate />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      {USER == "user" && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none" mt="20vh">
            {/* <ModalHeader>Add Year</ModalHeader> */}
            {/* <ModalCloseButton /> */}
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
                <SubscriptionForm />
                {/* {USER == "admin" && <AddCertificate />} */}
              </div>{" "}
              {/* Render your AddYear component */}
            </ModalBody>

            <ModalFooter>
              {/* Add any additional buttons or actions for the modal */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Events;
