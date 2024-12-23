import React, { Component } from "react";
import "./assets/styles/Comparison.css";
import comparisonImg from "./assets/images/Frame.svg";
import CardsComparison from "./CardsComparison";

export class Comparison extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="comparison">
            <h2>Our cleaning services have no comparison</h2>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              <br />
              sollicitudin congue massa mauris lectus vitae cras viverra gravida
              sapien.
            </p>
            <CardsComparison />
            <img className="sectionImg" src={comparisonImg} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Comparison;
