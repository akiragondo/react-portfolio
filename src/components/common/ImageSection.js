import "./ImageSection.css";
import React, { Component } from "react";
import SecondaryHeader from "./SecondaryHeader";

export default class ImageSection extends Component {
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

  render(props) {
    /*
    Inputs:  Name, description + image 
    output: Secondary header with description and image
    */
    return (
      <div className="ImageSection">
        <SecondaryHeader name={this.props.name} />
        <div
          className="ImageSectionRow"
          style={
            window.innerWidth < 1000
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <div
            className="ImageSectionDescription description"
            style={
              window.innerWidth < 1000 ? { width: "90%" } : { width: "50%" }
            }
          >
            {this.props.description}
          </div>
          <div
            className="ImageContainer"
            style={
              window.innerWidth < 1000
                ? { width: "60%", margin: "2vh" }
                : { width: "36%", margin: "2vh", alignSelf: "center" }
            }
          >
            <img
              src={this.props.image}
              alt={this.props.image}
              className="ImageSectionImage"
            />
          </div>
        </div>
      </div>
    );
  }
}
