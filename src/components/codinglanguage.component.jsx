import React from "react";
import iconHtml from "/icon/html.png";
import iconCss from "/icon/css.png";
import iconJs from "/icon/javascript.png";
import iconReact from "/icon/reactjs.png";
import iconNode from "/icon/nodejs.png";
import iconMongoDB from "/icon/mongo.png";
import iconTailwind from "/icon/tailwind.png";
import iconOther from "/icon/other.png";
import projects from "../common/projects";

const CodingLanguage = () => {
  function ProgressTrack({ projects }) {
    return (
      <div className="progress-track">
        {projects?.languages.map((item) => (
          <div key={item.getAttribute("data-name")} className="progress-track">
            <div
              className="progress"
              style={{
                width: activeProject.languages[item.getAttribute("data-name")],
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="coding-language-breakdown">
      <div className="cl-card">
        <div className="language">
          <img src={iconHtml} className="icon" alt="" />
          <p className="name">HTML</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconCss} className="icon" alt="" />
          <p className="name">CSS</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconJs} className="icon" alt="" />
          <p className="name">JavaScript</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconReact} className="icon" alt="" />
          <p className="name">React JS</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconNode} className="icon" alt="" />
          <p className="name">Node JS</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconMongoDB} className="icon" alt="" />
          <p className="name">MongoDB</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconTailwind} className="icon" alt="" />
          <p className="name">Tailwind</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconOther} className="icon" alt="" />
          <p className="name">Other</p>
        </div>
        <ProgressTrack data={projects} />
      </div>
    </div>
  );
};

export default CodingLanguage;
