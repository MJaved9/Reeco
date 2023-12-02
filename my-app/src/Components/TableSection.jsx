import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {data} from "../data"
import "./TableSection.css";
import { useDispatch, useSelector } from "react-redux";
const TableSection = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUrgentPopupOpen, setIsUrgentPopupOpen] = useState(false);
  let ProductList=data
  
  const handleCheckmarkClick = (product) => {
    // Update the status to 'approved'
    console.log("Status Approved for", product.product_name);
  };

  const handleCloseClick = (product) => {
    // Open the urgent popup
    setSelectedProduct(product);
    setIsUrgentPopupOpen(true);
  };

  const handleUrgentPopupYes = () => {
    // Update the status to 'missing_urgent'
    console.log("Status Missing Urgent for", selectedProduct.product_name);
    setSelectedProduct(null);
    setIsUrgentPopupOpen(false);
  };

  const handleUrgentPopupNo = () => {
    // Update the status to 'missing'
    console.log("Status Missing for", selectedProduct.product_name);
    setSelectedProduct(null);
    setIsUrgentPopupOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "#33eb91";
      case "missing_urgent":
        return "#f44336";
      case "missing":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <>
      <section className="table-wrapper">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ProductList.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.img}
                      style={{ width: "100px" }}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.Price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.total}</td>
                  <td style={{paddingLeft:"30px"}}>
                    <span
                      style={{
                        border: "1px solid black",
                        padding: "6px 30px 6px 30px",
                        borderRadius: "10px",
                        backgroundColor: getStatusColor(product.status),
                      }}
                    >
                      {product.status}
                    </span>
                    <FaCheck
                      onClick={() => handleCheckmarkClick(product)}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                    <AiOutlineClose
                      onClick={() => handleCloseClick(product)}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isUrgentPopupOpen && (
        <div className="urgent-popup">
          <b>Is '{selectedProduct?.product_name}' urgent?</b>
          <p/>
          <button onClick={handleUrgentPopupYes}>Yes</button>
          <button onClick={handleUrgentPopupNo}>No</button>
        </div>
      )}
    </>
  );
};

export default TableSection;
