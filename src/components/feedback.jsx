import React, { Component } from "react";

class FeedBack extends Component {
  render() {
    const { articleNum, onSubmit, onChange } = this.props;
    if (articleNum === 6) {
      return (
        <div className="container mt-3">
          <h1>Please give us a feedback for the articles you have read</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <textarea
                onChange={onChange}
                className="form-control"
                name="feedback"
                cols="100"
                rows="10"
              />
            </div>
            <button type="submit" className="btn btn-info btn-md">
              Submit <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      );
    }
    return "";
  }
}

export default FeedBack;
