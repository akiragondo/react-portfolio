import React, { Component } from "react";
import "./AboutSection.css";
import Skills from "./Skills";

export default class AboutSection extends Component {
  render() {
    return (
      <div className="AboutSection">
        <div className="SectionHeader">
          <div className="SectionName">About me</div>
          <div className="Divider" />
        </div>
        <div className="SectionBody">
          <div className="SectionDescription"></div>
          <Skills
            skills={[
              "Python",
              "Flutter",
              "Cyber Security",
              "Power Bi",
              "React",
              "Amazon Web Services",
            ]}
          />
        </div>
      </div>
    );
  }
}
