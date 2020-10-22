import React, { Component } from "react";
import Introduction from "./sections/Introduction";
import "./Body.css";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";

export default class Body extends Component {
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
    let RightFixedLinks;
    let LeftFixedLinks;
    if (window.innerWidth > 1000) {
      LeftFixedLinks = (
        <div className="LeftFixedLinks">
          <ul className="LinksColumn">
            <li className="SMLogo">
              <i className="fab fa-instagram fa-2x"></i>
            </li>
            <li className="SMLogo">
              <i className="fab fa-linkedin fa-2x"></i>
            </li>
            <li className="SMLogo">
              <i className="fab fa-github fa-2x"></i>
            </li>
            <li className="VerticalDivider"></li>
          </ul>
        </div>
      );
      RightFixedLinks = (
        <div className="RightFixedLinks">
          <ul className="LinksColumn">
            <li className="VerticalDivider"></li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <div className="BodyRow">
          {LeftFixedLinks}
          <div
            className="Body"
            style={
              window.innerWidth >= 1000
                ? { margin: "6vh 12vw" }
                : { margin: "6vh 8vw" }
            }
          >
            <Introduction />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
          </div>
          {RightFixedLinks}
        </div>
      </div>
    );
  }
}
