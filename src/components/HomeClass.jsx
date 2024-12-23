import React, { Component } from "react";
import "./assets/styles/HomeClass.css";
import homeImg from "./assets/images/home.svg";
import checkImg from "./assets/images/checkBtn.svg";
import makesImg from "./assets/images/makesImg.svg";
import plus from "./assets/images/+.svg";
import Button from "./Button";
export class HomeClass extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="homeCalss">
            <img src={homeImg} alt="" />
            <div className="homeClass-content">
              <h2>We cover all areas of your home or office</h2>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <ul className="chek-service">
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
                <li>
                  <img src={checkImg} alt="" />
                  <p>Bathrooms</p>
                </li>
              </ul>
              <Button title="Get a free quote" />
            </div>
          </div>
          <div className="different">
            <div className="homeClass-content">
              <h2>What makes us different?</h2>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit atem
                accusantium doloremque laudantiu sed ut.
              </p>
              <ul className="result">
                <li>
                  <h2>10</h2>
                  <img src={plus} alt="" />
                </li>
                <li>
                  <h2>5k</h2>
                  <img src={plus} alt="" />
                </li>
                <li>
                  <h2>20k</h2>
                  <img src={plus} alt="" />
                </li>
              </ul>

              <ul className="time">
                <li>
                  <p className="liPclass">Years</p>
                </li>
                <li>
                  <p className="liPclass">Clients</p>
                </li>
                <li>
                  <p className="liPclass">Jobs done</p>
                </li>
              </ul>
              <Button title="Get a free quote" />
            </div>
            <img src={makesImg} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default HomeClass;
