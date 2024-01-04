import React, { useState, useEffect } from "react";
import PortofolioData from "../common/portofolio-data";
import projects from "../common/projects";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortofolioV1 = () => {
  const [items, setItems] = useState(projects);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projects);

  let filters = ["Big Project", "Frontend", "Backend", "Fullstack"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = projects.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...projects]);
    }
  };
  return (
    <section className="work container section" id="portofolio">
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters flex ml-2 max-[420px]:ml-0 max-[420px]:flex-wrap max-[420px]:justify-start items-center gap-x-[22px] mb-5">
        {filters.map((category, idx) => (
          <button
            className={`work__item border-[1px] border-solid mt-4 border-dark-grey hover:border-light-grey p-2 rounded-[8px] ${
              selectedFilters?.includes(category)
                ? "active text-white bg-light-grey hover:text-white border-light-grey"
                : ""
            }`}
            onClick={() => handleFilterButtonClick(category)}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="work__container grid pt-6  grid-cols-3 gap-[1.875rem] max-[420px]:grid-cols-1">
        {filteredItems.map((item, idx) => {
          const { image, name, category, live } = item;
          return (
            <div
              className={`work__card relative overflow-hidden rounded-default shadow-shadow  flex items-center justify-center border-[1px] border-light-grey ${
                selectedFilters?.includes(category)
                  ? "active can-make-transition-after-card-active-in-here"
                  : ""
              }`}
              key={`items-${idx}`}
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
              <div className="work__title mt-0 mr-0 mb-[0.98rem] py-0 px-5 absolute top-[3.55rem] left-[0.8rem] translate-y-[30px] transition-[.3s] max-w-[16rem] opacity-0">
                <h3 className=" text-white text-h3_font ">{name}</h3>
              </div>

              <a
                href={live}
                className="work__button font-medium absolute bottom-6 left-6 text-h3_font block bg-body_color h-10 w-10 hover:underline cursor-pointer rounded-[30px] text-center leading-[42px] transition-[.3s] opacity-0"
              >
                <i className="icon-link work__button-icon "></i>
              </a>
              <div className="tags absolute top-[7.70rem] left-[5rem] text-wrap max-w-[210px] opacity-0">
                <p className=" text-white text-[15px]">{item.tags}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortofolioV1;
