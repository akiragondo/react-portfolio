import "./EducationSection.css";
import React, { Component } from "react";
import PrimaryHeader from "../common/PrimaryHeader";
import ImageSection from "../common/ImageSection";

export default class EducationSection extends Component {
  render() {
    return (
      <div className="EducationSection">
        <PrimaryHeader name="Education" />
        <ImageSection
          name="Technological University of Brazil"
          description="The Federal University of Technology – Paraná (Portuguese: Universidade Tecnológica Federal do Paraná, UTFPR)[1] is a federal university with campuses in thirteen cities located in the state of Paraná. UTFPR is one of the most renowned Universities in Brazil."
          image="/images/utfpr_logo.png"
        ></ImageSection>
        <ImageSection
          name="Shibaura Institute of Technology"
          description="The Federal University of Technology – Paraná (Portuguese: Universidade Tecnológica Federal do Paraná, UTFPR)[1] is a federal university with campuses in thirteen cities located in the state of Paraná. UTFPR is one of the most renowned Universities in Brazil."
          image="/images/sit_logo.png"
        ></ImageSection>
      </div>
    );
  }
}
