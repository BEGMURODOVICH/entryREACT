import React, { Component } from "react";
import "./assets/styles/HeroClass.css";
import Button from "./Button";
import phoneIcon from "./assets/images/phoneIcon.svg";
import heroIcon from "./assets/images/hero.svg";

export class HeroClass extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <div className="hero-content">
            <h1>Quality cleaning for your home</h1>
            <p className="pp">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="hero-connect">
              <Button title="Get a free quote" />
              <div className="heroConnet">
                <img src={phoneIcon} alt="" />
                <div className="phoneNumber">
                  <p className="heroConnetP">Call us now</p>
                  <a className="heroConnetA" href="tel:(414) 567 - 2109">
                    (414) 567 - 2109
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src={heroIcon} alt="" />
        </div>
        <div className="container"></div>
      </>
    );
  }
}

export default HeroClass;
