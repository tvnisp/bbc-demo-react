import React from "react";

const NavBar = ({ articleNum, onReset }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div className="container">
        <div className="navbar-brand logo">
          <div className="custom-logo">B</div>
          <div className="custom-logo">B</div>
          <div className="custom-logo">C</div>
        </div>
        {articleNum < 6 && (
          <button className="btn btn-info">
            <i className="fa-lg fa fa-book" aria-hidden="true"></i> Article{" "}
            <span className="badge badge-light">{articleNum}/5</span>
          </button>
        )}
        {articleNum === 6 && (
          <button onClick={onReset} className="btn btn-info">
            <i className="fa fa-repeat" aria-hidden="true"></i> Read Again
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
