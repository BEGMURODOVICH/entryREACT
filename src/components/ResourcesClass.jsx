import React, { Component } from "react";
import "./assets/styles/ResourcesClass.css";
import Button from "./Button";
import frame1 from "./assets/images/Frame11.svg";
import frame2 from "./assets/images/Frame12.svg";

export class ResourcesClass extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="resources">
            <div className="title">
              <div className="title-text">
                <h2>Articles & resources</h2>
                <p>
                  Lobortis mattis odio leo eget mauris met aliquet <br />
                  semper molestie sollicitudin congue massa mauris lectus.
                </p>
              </div>
              <div className="title-btn">
                <Button title="Get a free quote" />
                <Button title="Browse articles" backWhite />
              </div>
            </div>
            <ul className="resources-content">
              <li>
                <img src={frame1} alt="" />
                <div className="li-card">
                  <h3>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="date">
                    <h4>Jan 28, 2022</h4>
                    <div className="square2"></div>
                  </div>
                </div>
              </li>
              <li>
                <img src={frame2} alt="" />
                <div className="li-card">
                  <h3>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="date">
                    <h4>Jan 28, 2022</h4>
                    <div className="square2"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ResourcesClass;
