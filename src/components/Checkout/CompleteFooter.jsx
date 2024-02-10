import React from "react";
import "../../Styles/Checkout.css";
import Footer from "./Footer";
import MidFoot from "./MidFoot";
import BottomFoot from "./BottomFoot";

const CompleteFooter = () => {
  return (
    <>
      <div className="containerrr">
        <div style={{ backgroundColor: "black" }}>
          <div className="horizental_line"></div>
        </div>
        <MidFoot />
        <div style={{ backgroundColor: "black" }}>
          <div className="horizental_line2"></div>
        </div>
      </div>
    </>
  );
};

export default CompleteFooter;
