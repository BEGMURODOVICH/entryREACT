import React from "react";
import "./assets/styles/Button.css";
export default function Button(props) {
  const { backWhite } = props;
  return (
    <>
      <button
        style={{
          color: `${backWhite ? "black" : "white"}`,
          background: `${backWhite ? "white" : "blue"}`,
          border: `${backWhite ? "1px solid #EFF0F6" : "none"}`,
          boxShadow: `${backWhite ? " 0px 4px 10px 0px #14142B0A" : "none"}`,
        }}
      >
        {props.title}
      </button>
    </>
  );
}
