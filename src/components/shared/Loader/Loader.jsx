import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinner-grow hw-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
