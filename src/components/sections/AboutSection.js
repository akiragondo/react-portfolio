import React, { Component } from "react";
import PrimaryHeader from "../common/PrimaryHeader";
import "./AboutSection.css";
import Skills from "../common/Skills";
import SecondaryHeader from "../common/SecondaryHeader";

export default class AboutSection extends Component {
  render() {
    return (
      <div className="AboutSection">
        <PrimaryHeader name="About me" />
        <div className="SectionBody">
          <div className="SectionDescription description">
            No CCNA 7, o Packet Tracer 7.3.0 é a versão mínima que oferece
            suporte ao CCNA 7. No CCNA 6 (e versões anteriores), recomendamos
            que instrutores e alunos continuem usando o Packet Tracer 7.2.2.
            Caso esteja aprendendo/ensinando o CCN
          </div>
          <SecondaryHeader name="Main Skills" />
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
