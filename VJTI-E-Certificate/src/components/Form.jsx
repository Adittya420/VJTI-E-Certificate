import React, { useState } from "react";

const YearCalendar = () => {
  const startYear = 2022;
  const endYear = 2030;
  const [selectedYear, setSelectedYear] = useState(startYear);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const handleScroll = (direction) => {
    const container = document.getElementById("yearContainer");
    if (container) {
      const scrollAmount = 100; // Change this value to adjust scroll amount
      if (direction === "up") {
        container.scrollTop -= scrollAmount;
      } else if (direction === "down") {
        container.scrollTop += scrollAmount;
      }
    }
  };

  return (
    <div
      id="yearContainer"
      style={{ height: "300px", overflowY: "hidden", position: "relative" }}
    >
      <div
        style={{
          height: "100%",
          overflowY: "scroll",
          scrollBehavior: "smooth",
          textAlign: "center",
        }}
      >
        {Array.from(
          { length: endYear - startYear + 1 },
          (_, index) => startYear + index
        ).map((year) => (
          <div
            key={year}
            style={{
              margin: "4px",
              padding: "8px",
              cursor: "pointer",
              display: "block",
              opacity: selectedYear === year ? 1 : 0.5,
            }}
            onClick={() => handleYearClick(year)}
          >
            <span style={{ fontSize: selectedYear === year ? "32px" : "24px" }}>
              {year}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          fontSize: "24px",
        }}
        onClick={() => handleScroll("up")}
      >
        &#9650;
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          fontSize: "24px",
        }}
        onClick={() => handleScroll("down")}
      >
        &#9660;
      </div>
    </div>
  );
};

export default YearCalendar;
