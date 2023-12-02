import React from "react";
import "./Navbar.css";
import Logo from "../assets/Logo/logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
function NavBar() {
  return (
    <>
      <div className="NavBarWrapper">
          <div className="NavOptionsWrapper">
          <div className="NavOption"><img
            className="NavImg"
            src={Logo}
          /></div>
            <div className="NavOption">Store</div>
            <div className="NavOption">Order</div>
            <div className="NavOption">Analytics</div>
          </div>
        <div className="NavOptionsWrapper-1">
          <MdOutlineShoppingCartCheckout style={{color:"white",fontSize:"30px",textAlign:"center"}}/>
          <div className="NavOption">
            <span>Hello, James</span>
          </div>
          <RiArrowDropDownLine style={{color:"white",fontSize:"50px",textAlign:"center"}}/>
        </div>
      </div>
    </>
  );
}

export default NavBar;
