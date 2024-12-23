import React, { Component } from "react";
import "../assets/styles/Header.css";
import logo from "../assets/images/logo.svg";
import Button from "../Button";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <ul className="navbar">
              <img src={logo} alt="logo" />
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div className="navBtns">
              <p className="cartQuantity">Cart (0)</p>
              <Button title="Get a free quote" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
