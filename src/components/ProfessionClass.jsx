import React, { Component } from "react";
import "./assets/styles/ProfessionalClass.css";
import Button from "./Button";
import CardsProfessional from "./CardsProfessional";

export class ProfessionClass extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="professional">
            <div className="title">
              <h2>
                Take a look at our
                <br />
                professional services
              </h2>
              <Button title="Explore services" backWhite />
            </div>
            <CardsProfessional />
          </div>
        </div>
      </>
    );
  }
}

export default ProfessionClass;
