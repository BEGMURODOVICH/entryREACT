import React, { Component } from "react";

import "./assets/styles/FormClass.css";

import phoneIcon from "./assets/images/phoneIcon.svg";
import Button from "./Button";
import FormInput from "./FormInput";

export class FormClass extends Component {
  render() {
    return (
      <>
        <div className="FormSection">
          <div className="container">
            <div className="formclass">
              <div className="form-content">
                <h2>Request a free cleaning quote today</h2>
                <p>
                  In dignissim euismod pretium amet enim a eu nam ut urna
                  accumsan pellentesque lacus duis pharetra eutortor.
                </p>
                <div className="connet">
                  <img src={phoneIcon} alt="" />
                  <div className="phoneNumber">
                    <p className="connetP">Call us now</p>
                    <a className="connectA" href="tel:(414) 567 - 2109">
                      (414) 567 - 2109
                    </a>
                  </div>
                </div>
                <h3>Not convinced yet?</h3>
                <p>
                  Massa bibendum consectetur maurisid gravida purus, dolor dui
                  amet morbi non nunc urna purus diam.
                </p>
                <Button title="Browse our packages" backWhite />
              </div>
              <form action="" className="forms">
                <div className="inputs">
                  <FormInput title="Full name" />
                  <FormInput title="Phone number" />
                  <FormInput title="Address" />
                  <FormInput title="Email" />
                  <FormInput title="Requested service" />
                  <FormInput title="Day of service" />
                </div>
                <FormInput title="Add a note" fullWhith />
                <Button title="Submit message" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormClass;
