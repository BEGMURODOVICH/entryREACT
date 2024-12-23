import React, { Component } from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/logo.svg";
import Button from "../Button";
export class Footer extends Component {
  render() {
    return (
      <>
        <div className="container">
          <ul className="foot-content">
            <li>
              <h3>Quality cleaning for your home</h3>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className="square">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </li>
            <li>
              <h4>Contact us</h4>
              <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              <a className="telmail" href="tel:(414) 567 - 2109">
                (414) 567 - 2109
              </a>
              <br />
              <br />
              <a className="telmail" href="mailto:contact@cleaning.com">
                contact@cleaning.com
              </a>
            </li>
            <li>
              <h4>Hours</h4>
              <h4 className="dayW">Monday to Friday</h4>
              <p>6:00 AM - 9:00 PM</p>
              <h4 className="dayW">Monday to Friday</h4>
              <p>6:00 AM - 9:00 PM</p>
            </li>
            <li>
              <h4>Get a free estimate</h4>
              <a className="phoneNumber" href="tel:(414) 567 - 2109">
                (414) 567 - 2109
              </a>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <Button title="Get a free quote" />
            </li>
          </ul>
          <div className="footerLast">
            <img src={logo} alt="" />
            <div className="footnav">
              <p>Copyright © Cleaning X | Designed by</p>
              <a href="">BRIX Templates</a>
              <p>- Powered by</p>
              <a href="">Webflow</a>
              <a href="">Licenses</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
