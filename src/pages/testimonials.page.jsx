import React from "react";
import testimonialsData from "../common/testimonials-data";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title"> Clients & Reviews</h2>

      <Swiper
        // swiper-pagination-bullet swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullet-active
        className="testimonials__container grid max-w-[700px] m-auto "
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide
              className="testimonials__item text-center pt-0 pr-5 pb-5"
              key={id}
            >
              <div className="tumb my-0 mx-auto h-[5.6rem] w-[5.6rem]">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title mt-3">{title}</h3>
              <span className="subtitle text-text_color_light text-small_font">
                {subtitle}
              </span>
              <div className="comment relative bg-container p-[1.875rem] mt-6 shadow-shadow rounded-default mb-12">
                {comment}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
