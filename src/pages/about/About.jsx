import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skill from "../../components/Skill";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Tran-Thien-Quoc-Anh-Software-Developer-CV.pdf";
import "./about.css";

const About = () => {
  return (
    <main className="section container ">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info </h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="status grid grid-cols-2">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section>
        <h3 className="skills">
          <h3 className="section__subtitle subtitle__center">My Skills</h3>

          <div className="skills__container grid">
            <Skill />
          </div>
        </h3>
      </section>
    </main>
  );
};

export default About;
