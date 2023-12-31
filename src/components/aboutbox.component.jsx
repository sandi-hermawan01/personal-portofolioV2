import React from "react";
import ReactIcon from "../assets/icon/reactjs.png";
import TailwindIcon from "../assets/icon/tailwind.png";
import FirebaseIcon from "../assets/icon/firebase.png";
import MongoDBIcon from "../assets/icon/mongo.png";
import NextIcon from "../assets/icon/next.png";
import Jupyter from "../assets/icon/jupyter_logo.png";

const AboutBox = () => {
  return (
    <section className="flex flex-col text-start  mt-[2rem]">
      <div className="ml-36 py-7 max-[420px]:ml-2">
        <h1 className="text-xl font-medium">Tech Stack</h1>
        <p>
          Here's the tech stack I often use. You can see{" "}
          <a
            className="font-semibold hover:underline after:content-['↗'] "
            href="/portofolio"
          >
            my project
          </a>
        </p>
      </div>
      <div className="about__boxes flex flex-wrap justify-center gap-8 max-[420px]:gap-0">
        <div className="about__box">
          <img src={ReactIcon} className="about__icon w-10 h-10 "></img>
          <div className="about__text">
            <h2 className="about__title">React</h2>
          </div>
        </div>

        <div className="about__box">
          <img src={TailwindIcon} className="about__icon w-10 h-8"></img>
          <div className="about__text">
            <h2 className="about__title">Tailwind</h2>
          </div>
        </div>

        <div className="about__box">
          <img src={FirebaseIcon} className="about__icon w-11 h-9"></img>
          <div className="about__text">
            <h2 className="about__title">Firebase</h2>
          </div>
        </div>

        <div className="about__box">
          <img src={MongoDBIcon} className="about__icon w-10 h-10"></img>
          <div className="about__text">
            <h2 className="about__title">MongoDB</h2>
          </div>
        </div>

        <div className="about__box">
          <img src={NextIcon} className="about__icon w-14 h-10"></img>
          <div className="about__text">
            <h2 className="about__title">NextJS</h2>
          </div>
        </div>

        <div className="about__box">
          <img src={Jupyter} className="about__icon w-10 h-13"></img>
          <div className="about__text">
            <h2 className="about__title">Jupyter Notebook</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
