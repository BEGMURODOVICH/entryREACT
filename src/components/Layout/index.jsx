import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export class index extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default index;
