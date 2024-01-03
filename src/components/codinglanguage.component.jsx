import React from "react";
import iconHtml from "/icon/html.png";
import iconCss from "/icon/css.png";
import iconJs from "/icon/javascript.png";
import iconReact from "/icon/reactjs.png";
import iconNode from "/icon/nodejs.png";
import iconMongoDB from "/icon/mongo.png";
import iconTailwind from "/icon/tailwind.png";
import iconOther from "/icon/other.png";

const CodingLanguage = () => {
  return (
    <div className="coding-language-breakdown">
      <div className="cl-card">
        <div className="language">
          <img src={iconHtml} className="icon" alt="" />
          <p className="name">HTML</p>
        </div>
        <div className="progress-track" data-name="html">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconCss} className="icon" alt="" />
          <p className="name">CSS</p>
        </div>
        <div className="progress-track" data-name="css">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconJs} className="icon" alt="" />
          <p className="name">JavaScript</p>
        </div>
        <div className="progress-track" data-name="javascript">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconReact} className="icon" alt="" />
          <p className="name">React JS</p>
        </div>
        <div className="progress-track" data-name="reactjs">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconNode} className="icon" alt="" />
          <p className="name">Node JS</p>
        </div>
        <div className="progress-track" data-name="nodejs">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconMongoDB} className="icon" alt="" />
          <p className="name">MongoDB</p>
        </div>
        <div className="progress-track" data-name="database">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconTailwind} className="icon" alt="" />
          <p className="name">Tailwind</p>
        </div>
        <div className="progress-track" data-name="tailwind">
          <div className="progress"></div>
        </div>
      </div>
      <div className="cl-card">
        <div className="language">
          <img src={iconOther} className="icon" alt="" />
          <p className="name">Other</p>
        </div>
        <div className="progress-track" data-name="other">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default CodingLanguage;
