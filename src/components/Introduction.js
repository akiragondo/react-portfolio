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
          <div
            className="Hello"
            style={
              window.innerWidth < 600
                ? { fontSize: "3vw" }
                : { fontSize: "2vw" }
            }
          >
            Hello my name is
          </div>
          <div
            className="Name"
            style={
              window.innerWidth < 600
                ? { fontSize: "14vw" }
                : { fontSize: "9vw" }
            }
          >
            Akira Gondo
          </div>
          <div
            className="Brief"
            style={
              window.innerWidth < 600
                ? { fontSize: "6vw" }
                : { fontSize: "4vw" }
            }
          >
            Engineer/Researcher/Maker
          </div>
          <div
            className="Description"
            style={
              window.innerWidth < 600
                ? { fontSize: "3vw" }
                : { fontSize: "2.5vw" }
            }
          >
            A Computer Engineer with a passion for research, development, and
            the general art of making things work
          </div>
          <div
            className="ContactButton"
            style={
              window.innerWidth < 600
                ? { fontSize: "3vw" }
                : { fontSize: "2vw" }
            }
          >
            Contact Me
          </div>
        </div>
      </div>
    );
  }
}
