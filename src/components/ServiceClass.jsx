import React, { Component } from "react";
import Button from "./Button";
import "./assets/styles/ServiceClass.css";
import Alifbo, { Cards } from "./Cards";

export class ServiceClass extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="service">
            <h2>How our service works?</h2>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              <br />
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>

            <Cards />
            <div className="service-content"></div>
            <div className="serviceBtns">
              <Button title="Get a free quote" />
              <Button title="Explore services" backWhite />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceClass;
