import React, { Component } from "react";
import CardProfessional from "./CardProfessional";
import img21 from "./assets/images/img21.svg";
import img22 from "./assets/images/img22.svg";
import img23 from "./assets/images/img23.svg";

export class CardsProfessional extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <CardProfessional
          title="House cleaning"
          desc="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
          img={img21}
        />

        <CardProfessional
          title="Office cleaning"
          desc="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
          img={img22}
        />

        <CardProfessional
          title="Industrial cleaning"
          desc="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
          img={img23}
        />
      </div>
    );
  }
}

export default CardsProfessional;
