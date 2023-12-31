import React from "react";
import service_img1 from "../assets/img/service-1.svg";
import service_img2 from "../assets/img/service-2.svg";
import service_img3 from "../assets/img/service-3.svg";

const data = [
  {
    id: 1,
    image: service_img1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: service_img2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: service_img3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid grid-cols-3 gap-x-[1.875rem]">
        {data.map(({ id, image, title, description }) => {
          return (
            <div
              className="services__card text-center p-[1.875rem] rounded-default bg-container"
              key={id}
            >
              <img src={image} alt="" className="services__img"></img>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
