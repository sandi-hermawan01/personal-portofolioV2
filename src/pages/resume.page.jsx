import React from "react";
import Data from "../common/data";
import Card from "../components/card.component";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience & Education</h2>
      <div className="resume__container flex gap-x-[1.875rem] max-[420px]:flex-col max-[420px]:gap-4">
        <div className="timeline grid">
          <h1 className="pb-4">Experience</h1>
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid ">
          <h1 className="pb-4">Education</h1>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
