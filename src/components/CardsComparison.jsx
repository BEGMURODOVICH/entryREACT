import React, { Component } from "react";
import CardComparison from "./CardComparison";

import img11 from "./assets/images/comparison1.svg";
import img12 from "./assets/images/comparison2.svg";
import img13 from "./assets/images/comparison3.svg";

export class CardsComparison extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "95px",
        }}
      >
        <CardComparison title="clients" img={img11} number="3,480+" />
        <CardComparison title="Jobs done" img={img12} number="12.540+" />
        <CardComparison title="Employees" img={img13} number="100+" />
      </div>
    );
  }
}

export default CardsComparison;
