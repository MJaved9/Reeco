// HeaderSection.js

import React from "react";
import "./header.css";

function HeaderSection() {
  return (
    <header className="header">
      <div className="container">
        <div className="breadcrumbs">
          <span className="breadcrumbs-text">Order {">"}</span>
          <span className="breadcrumbs-text">Order 32457ABC</span>
        </div>
        <div className="order-title">
          <h1>Order 32457ABC</h1>
          <div className="button-wrapper">
            <button className="back-button">Back</button>
            <button className="app-button">Approve Order</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
