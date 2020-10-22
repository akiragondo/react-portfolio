import "./Navbar.css";

import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let HeaderLinks;
    if (window.innerWidth <= 1000) {
      HeaderLinks = (
        <div className="MenuLink">
          <i className="fas fa-bars fa-3x" />
        </div>
      );
    } else {
      HeaderLinks = (
        <ul className="LinksHeaderRow Accent">
          <li className="HeaderLink">About me</li>
          <li className="HeaderLink">Education</li>
          <li className="HeaderLink">Experience</li>
          <li className="HeaderLink">Projects</li>
          <li className="HeaderLink Special">Contact Me</li>
        </ul>
      );
    }
    return (
      <div className="HeaderContainer">
        <div className="LogoContainer">
          <img
            src="/images/logo-v2.png"
            className="Logo"
            style={
              window.innerWidth <= 1000 ? { width: "12vh" } : { width: "9vw" }
            }
            alt="Logo"
          />
        </div>
        {HeaderLinks}
      </div>
    );
  }
}
