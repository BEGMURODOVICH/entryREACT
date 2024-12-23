import React, { Component } from "react";

export default class CardService extends Component {
  render() {
    const cardData = this.props;
    return (
      <div>
        <div className="card">
          <img src={cardData.img} alt="" />
          <h3>{cardData.title}</h3>
          <p style={{ margin: "0" }}>{cardData.desc}</p>
        </div>
      </div>
    );
  }
}
