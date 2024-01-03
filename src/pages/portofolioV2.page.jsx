import React, { useEffect } from "react";
import CodingLanguage from "../components/codinglanguage.component";
import projects from "../common/projects";
import defaultBanner from "../assets/img/project-1.png";

const PortofolioV2 = () => {
  const ProjectGallery = ({ projects }) => {
    return (
      <div className="project-gallery mt-20 grid grid-cols-4 gap-7 relative">
        {projects.map((project) => (
          <a
            key={project.id}
            className="project-card relative h-52 w-64"
            data-tags={`${project.tags}`}
          >
            <img
              src={project.image}
              className="project-image w-full h-full object-cover transition-[0.5s] rounded-[10px] border-[2px] border-solid border-light-grey"
            />
            <span className="tags absolute left-[10px] bottom-[10px] text-dark-grey w-[90%] transition-[0.5s] opacity-0">
              {project.tags}
            </span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <section className="work container section">
      <h2 className="section__title">Recent Work</h2>

      <div className="filters">
        <button className="filter-btn active" data-filter-value="all">
          all
        </button>
        <button className="filter-btn" data-filter-value="frontend">
          frontend
        </button>
        <button className="filter-btn" data-filter-value="javascript">
          javascript
        </button>
        <button className="filter-btn" data-filter-value="react">
          react js
        </button>
        <button className="filter-btn" data-filter-value="backend">
          backend
        </button>
        <button className="filter-btn" data-filter-value="fullstack">
          fullstack
        </button>
        <button className="filter-btn" data-filter-value="big-project">
          big project
        </button>
      </div>

      <ProjectGallery projects={projects} />
      <div
        id="project-info"
        className="project-info mt-[100px] relative grid grid-cols-2 gap-10"
      >
        <div className="project-details overflow-hidden">
          <img
            src={defaultBanner}
            className="image w-full h-[300px] object-cover rounded-default boder-[3px] border-solid border-light-grey"
            alt=""
          />

          <h2 className="name">Project name</h2>
          <p className="details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tortor nibh, tristique at diam et, venenatis cursus felis. Aenean
            arcu nulla ....
          </p>
          <div className="btn-grps">
            <a href="#" className="btn light" id="live-btn">
              see live
            </a>
          </div>
        </div>
        <CodingLanguage />
      </div>
    </section>
  );
};

export default PortofolioV2;
