import React, { useState } from "react";
import PortofolioData from "../common/portofolio-data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portofolio = () => {
  const [items, setItems] = useState(PortofolioData);
  const filterItem = (categoryItem) => {
    const updateItems = PortofolioData.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <section className="work container section" id="portofolio">
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters flex max-[420px]:flex-wrap max-[420px]:justify-center items-center gap-x-[1.875rem] mb-10">
        <span className="work__item" onClick={() => setItems(PortofolioData)}>
          Everithing
        </span>
        <span className="work__item" onClick={() => filterItem("React")}>
          React
        </span>
        <span className="work__item" onClick={() => filterItem("Front-end")}>
          Front-end
        </span>
        <span className="work__item" onClick={() => filterItem("Back-end")}>
          Back-end
        </span>
        <span className="work__item" onClick={() => filterItem("Fullstack")}>
          Fullstack
        </span>
        <span className="work__item" onClick={() => filterItem("Big Project")}>
          Big Project
        </span>
      </div>
      <div className="work__container grid grid-cols-3 gap-[1.875rem] max-[420px]:grid-cols-1">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div
              className="work__card relative overflow-hidden rounded-default shadow-shadow  flex items-center justify-center border-[1px] border-light-grey"
              key={id}
            >
              <div className="work__tumbnail ">
                <img
                  src={image}
                  alt=""
                  className="work__img object-cover h-48 w-full"
                ></img>
                <div className="work__mask bg-text_color_light absolute left-0 top-0 h-full w-full transition-[.3s] opacity-0"></div>
              </div>

              <span className="work__category font-medium bg-body_color rounded-b-[0.98rem] absolute top-0 left-6 text-small_font inline-block py-[0.19rem] px-[0.625rem] translate-y-[-40px] transition-[.3s]">
                {category}
              </span>
              <h3 className="work__title text-white text-h3_font mt-0 mr-0 mb-[0.98rem] py-0 px-5 absolute top-[3.75rem] translate-y-[30px] transition-[.3s] opacity-0">
                {title}
              </h3>
              <a
                href={link}
                className="work__button font-medium absolute bottom-6 left-6 text-h3_font block bg-body_color h-10 w-32 hover:underline cursor-pointer rounded-[30px] text-center leading-[42px] transition-[.3s] opacity-0"
              >
                <i className="icon-link work__button-icon pr-2"></i>launch
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
