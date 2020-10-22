import React, { Component } from "react";
import "./Skills.css";

export default class Skills extends Component {
  render() {
    const skillsBullets = this.props.skills.map((skillName) => (
      <li>
        <div className="BulletPointRow">
          <i className="fas fa-cog fa-2x BulletIcon" />
          <div className="SkillName">{skillName}</div>
        </div>
      </li>
    ));
    return (
      <div className="SkillsSection">
        <ul className="SkillsList">{skillsBullets}</ul>
      </div>
    );
  }
}
