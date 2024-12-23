import React, { Component } from "react";
import Abc from "./CardService";
import img1 from "./assets/images/sevice1.svg";
import img2 from "./assets/images/sevice2.svg";
import img3 from "./assets/images/sevice3.svg";

import CardService from "./CardService";

export class Cards extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          alignSelf: "start",
          padding: "50px 0",
        }}
      >
        <CardService
          title="1. Schedule online"
          desc="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
          img={img1}
        />
        <CardService
          title="2. Pay online easily"
          desc="Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."
          img={img2}
        />
        <CardService
          title="3. Get your house cleaned"
          desc="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."
          img={img3}
        />
      </div>
    );
  }
}

export default Cards;
