import React, { Component } from "react";
import "./assets/styles/CardComparison.css";

export default class CardComparison extends Component {
  render() {
    const clientsData = this.props;
    return (
      <div className="cardss">
        <img src={clientsData.img} alt="" />
        <div>
          <p>{clientsData.title}</p>
          <h4>{clientsData.number}</h4>
        </div>
      </div>
    );
  }
}
