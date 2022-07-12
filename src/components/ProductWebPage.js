import React from "react";
import "./CSS/ProductWebPage.css";

function ProductWebPage(props) {
  return (
    <>
      <div
        className="product_heading"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className="container">
          <p className="display-2 my-5 text-light text-start d-flex flex-column justify-content-center">
            {props.heading}
          </p>
        </div>
      </div>
      <div className="aquaBodiesPara">
        <div className="container">
          <p className="h5">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductWebPage;
