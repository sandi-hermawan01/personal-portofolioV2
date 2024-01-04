import React from "react";
import about_img from "../assets/img/avatar-2.svg";
import AboutBox from "../components/aboutbox.component";
import Me from "../assets/img/personal-brand-logo.jpg";
import Cv from "../assets/doc/cv-sandi-hermawan.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>
      <div
        className="about__container flex gap-[1.875rem] justify-center items-center"
        style={{ gridTemplateColumns: "3fr 9fr" }}
      >
        <img
          src={Me}
          className="about__img max-[360px]:w-[220px] rounded-default w-36 h-36"
        ></img>
        <div className="about__data flex p-[1.875rem] bg-container shadow-sh-default rounded-default gap-x-[1.875rem]">
          <div className="about__info">
            <p className="about__description mb-4 text-justify">
              Hello! I am Sandi Hermawan, currently I live in bandung, a web
              developer.
              <br />
              You can download the cv below or see
              <a
                href="/resume"
                className="font-semibold hover:underline after:content-['↗'] "
              >
                {" "}
                my experience
              </a>
            </p>
            <a href={Cv} className="btn" download>
              Download CV
            </a>
          </div>
          {/* <div className="about__skills grid gap-5">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage depelopment w-[70%] bg-dark-cyan"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
