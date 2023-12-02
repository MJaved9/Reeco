import React from "react";
import "./StatusSection.css";

function StatusSection() {
  return (
    <section className="stats-wrapper">
      <ul className="status-list">
        <li className="status-list-item">
          <span className="status-text-1">Supplier</span>
          <span className="status-text-2">East cost fruits & vegetables</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Shipping Date</span>
          <span className="status-text-2">Thu, Feb 10</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Total</span>
          <span className="status-text-2">$ 15,028.3</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Category</span>
          <span className="status-text-2">East cost fruits & vegetables</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Department</span>
          <span className="status-text-2">300-444-679</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Status</span>
          <span className="status-text-2">Awaiting your approval</span>
        </li>
        <li className="status-list-item">
          <span className="status-text-1">Supplier</span>
          <span className="status-text-2">East cost fruits & vegetables</span>
        </li>
      </ul>
    </section>
  );
}

export default StatusSection;
