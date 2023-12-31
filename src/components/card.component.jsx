import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item relative pl-[3.125rem] pb-9">
      <i className={props.icon}></i>
      <span className="timeline__date text-text_color text-small_font">
        {props.year}
      </span>
      <h3 className="timeline__title text-h3_font my-2 mx-0">{props.title}</h3>
      <p className="timeline_text">{props.desc}</p>
    </div>
  );
};

export default Card;
