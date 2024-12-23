import React, { Component } from "react";

export default class FormInput extends Component {
  render() {
    const inputData = this.props;
    const { fullWhith } = this.props;

    return (
      <>
        <div
          style={{
            display: "grid",
            rowGap: "10px",
            margin: `${fullWhith ? "30px 0 50px" : "0"}`,
          }}
        >
          <label
            style={{
              fontFamily: "Roboto",
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            {inputData.title}
          </label>
          <input
            type="text"
            style={{
              padding: "5px",
              fontSize: "28px",
              outline: "none",
              border: "none",
              border: "1px solid #EFF0F6",
              boxShadow: "0px 2px 12px 0px #14142B14",
              width: `${fullWhith ? "550px" : "245px"}`,
              height: `${fullWhith ? "144px" : "72px"}`,
              borderRadius: "16px",
            }}
          />
        </div>
      </>
    );
  }
}
