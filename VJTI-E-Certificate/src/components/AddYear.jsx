import React from "react";
import "../css/YearEn.css";

const SubscriptionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="title">Subscribe to our newsletter.</span>
      <p className="description">
        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit
        quis. Duis tempor incididunt dolore.
      </p>
      <div>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email-address"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
