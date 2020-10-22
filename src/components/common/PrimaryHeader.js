import React, { Component } from "react";
import "./PrimaryHeader.css";
export default class PrimaryHeader extends Component {
  render() {
    return (
      <div className="SectionHeader">
        <div className="SectionName title">{this.props.name}</div>
        <div className="Divider" />
      </div>
    );
  }
}
