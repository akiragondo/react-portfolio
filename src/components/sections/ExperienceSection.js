import "./ExperienceSection.css";
import React, { Component } from "react";
import PrimaryHeader from "../common/PrimaryHeader";

import Skills from "../common/Skills";
import SecondaryHeader from "../common/SecondaryHeader";
import ImageSection from "../common/ImageSection";

export default class ExperienceSection extends Component {
  render() {
    return (
      <div className="ExperienceSection">
        <PrimaryHeader name="Experience" />

        <ImageSection
          name="KPMG International"
          description="KPMG International Limited[4] (or simply KPMG) is a multinational professional services network, and one of the Big Four accounting organizations.

Headquartered in Amstelveen, the Netherlands, although incorporated in the United Kingdom, KPMG is a network of firms in 147 countries, with over 219,000 employees and has three lines of services: financial audit, tax, and advisory.[3] Its tax and advisory services are further divided into various service groups.

The name KPMG stands for Klynveld Peat Marwick Goerdeler. It was chosen when KMG (Klynveld Main Goerdeler) merged with Peat Marwick in 1987."
          image="/images/kpmg_logo.png"
        ></ImageSection>

        <SecondaryHeader name="Skills Used" />
        <Skills
          skills={[
            "Cyber Security",
            "AWS Solutions Architecture",
            "Social Engineering",
            "GDPR/LGPD Compliance",
            "ISO 27000 Compliance",
            "Power BI",
          ]}
        />

        <ImageSection
          name="4 Vants"
          description="KPMG International Limited[4] (or simply KPMG) is a multinational professional services network, and one of the Big Four accounting organizations.

Headquartered in Amstelveen, the Netherlands, although incorporated in the United Kingdom, KPMG is a network of firms in 147 countries, with over 219,000 employees and has three lines of services: financial audit, tax, and advisory.[3] Its tax and advisory services are further divided into various service groups.

The name KPMG stands for Klynveld Peat Marwick Goerdeler. It was chosen when KMG (Klynveld Main Goerdeler) merged with Peat Marwick in 1987."
          image="/images/4vants_logo.png"
        ></ImageSection>

        <SecondaryHeader name="Skills Used" />
        <Skills
          skills={[
            "Computer Vision",
            "Machine Learning",
            "Python",
            "C++",
            "Stereo Vision / Photogrammetry",
            "Mongo DB",
            "Jenkins",
            "Amazon Web Services",
          ]}
        />

        <ImageSection
          name="ExxonMobil"
          description="KPMG International Limited[4] (or simply KPMG) is a multinational professional services network, and one of the Big Four accounting organizations.

Headquartered in Amstelveen, the Netherlands, although incorporated in the United Kingdom, KPMG is a network of firms in 147 countries, with over 219,000 employees and has three lines of services: financial audit, tax, and advisory.[3] Its tax and advisory services are further divided into various service groups.

The name KPMG stands for Klynveld Peat Marwick Goerdeler. It was chosen when KMG (Klynveld Main Goerdeler) merged with Peat Marwick in 1987."
          image="/images/exxon_logo.png"
        ></ImageSection>

        <SecondaryHeader name="Skills Used" />
        <Skills
          skills={[
            "Tableau",
            "SQL",
            "HTML",
            "CSS",
            "Javascript",
            "Project Management",
          ]}
        />
      </div>
    );
  }
}
