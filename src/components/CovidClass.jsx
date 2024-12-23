import React, { Component } from "react";
// import "./assets/styles/CovidClass.css";
import "./assets/styles/CovidClass.css";
import phoneIcon2 from "./assets/images/phoneIcon2.svg";
import covid from "./assets/images/covid.svg";
import Button from "./Button";

export class CovidClass extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="covid">
            <img src={covid} alt="" />
            <div className="covid-content">
              <h3>Covid-19 sanitization</h3>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="hero-connect">
                <Button title="Get a free quote" />
                <div className="heroConnet">
                  <img src={phoneIcon2} alt="" />
                  <div className="phoneNumber">
                    <p className="heroConnetP">Call us now</p>
                    <a className="heroConnetA" href="tel:(414) 567 - 2109">
                      (414) 567 - 2109
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CovidClass;
