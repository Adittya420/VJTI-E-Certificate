import React from "react";
import "../css/YearEn.css";

const SubscriptionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="title">Enter Year</span>
      <p className="description">
        Enter the Year of the Event to get Certificate
      </p>
      <div>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email-address"
        />
        <button type="button">Submit</button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
