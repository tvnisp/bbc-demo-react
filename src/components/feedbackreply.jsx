import React, { Component } from "react";

class FeedbackReply extends Component {
  render() {
    const { message, onReset } = this.props;
    return (
      <div className="container mt-5">
        <p className="display-4">
          Thank you for your message:{" "}
          <span className="text-info">{message}</span>
        </p>
        <p className="mt-5 display-4 text-secondary">
          Do you want to read again?
        </p>
        <button onClick={onReset} className="btn btn-info">
          <i className="fa fa-repeat" aria-hidden="true"></i> Read Again
        </button>
      </div>
    );
  }
}

export default FeedbackReply;
