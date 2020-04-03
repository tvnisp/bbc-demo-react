import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="container mt-5">
      <h2>There was an error with your internet please try again. {error}</h2>
    </div>
  );
};

export default ErrorMessage;
