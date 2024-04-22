import React from "react";
import { EventCard } from "./EventCard";
import "../css/EventCard.css";

const Events = () => {
  const renderEventCards = () => {
    const cards = [];
    for (let row = 0; row < 2; row++) {
      const rowCards = [];
      for (let col = 0; col < 4; col++) {
        rowCards.push(
          <div
            key={`${row}-${col}`}
            style={{
              marginLeft: `${col * 20}px`,
              marginTop: `${row * 20}px`,
            }}
          >
            <EventCard className="card" />
          </div>
        );
      }
      cards.push(
        <div key={`row-${row}`} style={{ display: "flex" }}>
          {rowCards}
        </div>
      );
    }
    return cards;
  };
  return (
    <div>
      <div style={{ marginTop: "100px", marginLeft: "20px" }}>
        <EventCard className="card" />
      </div>
      {renderEventCards()}
    </div>
  );
};

export default Events;
