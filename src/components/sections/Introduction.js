import React, { Component } from "react";
import "./Introduction.css";
export default class Introduction extends Component {
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
    return (
      <div className="IntroductionSection">
        <div className="IntroductionColumn">
          <div className="Hello"> Hello my name is</div>
          <div className="Name">Akira Gondo</div>
          <div className="Brief">Engineer/Researcher/Maker</div>
          <div className="Description">
            A Computer Engineer with a passion for research, development, and
            the general art of making things work
          </div>
          <div className="ContactButton">Contact Me</div>
        </div>
      </div>
    );
  }
}
