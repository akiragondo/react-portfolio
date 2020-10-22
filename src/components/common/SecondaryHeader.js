import "./SecondaryHeader.css";
import React, { Component } from "react";

export default class SecondaryHeader extends Component {
  render() {
    return (
      <div className="SecondaryHeader">
        <div className="SectionName SecondaryTitle">{this.props.name}</div>
        <div className="SecondaryDivider" />
      </div>
    );
  }
}
