import React, { Component } from "react";
import "./assets/styles/CardProfessional.css";
export class CardProfessional extends Component {
  render() {
    const professionalData = this.props;
    return (
      <>
        <div className="professionalCard">
          <img src={professionalData.img} alt="" />
          <h4>{professionalData.title}</h4>
          <p>{professionalData.desc}</p>
        </div>
      </>
    );
  }
}

export default CardProfessional;
