import React from "react";

import Image1 from "../assets/img/blog-1.svg";
import Image2 from "../assets/img/blog-2.svg";
import Image3 from "../assets/img/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Post</h2>

      <div className="blog__continer grid grid-cols-3 gap-x-[1.875rem]">
        <div className="blog__card">
          <div className="blog__tumb">
            <a href="#">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              I Have a 5 Best Project With React Technology
            </h3>
            <div className="blog__meta">
              <span>01 jan 2023</span>
              <span className="blog__dot">.</span>
              <span>Zsans</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__tumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">How to Make MERN Bloging Website</h3>
            <div className="blog__meta">
              <span>02 Dec 2023</span>
              <span className="blog__dot">.</span>
              <span>Zsans</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__tumb">
            <a href="#">
              <span className="blog__category">Gamming</span>
            </a>
            <a href="#">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Wuthering Waves When Release</h3>
            <div className="blog__meta">
              <span>09 Feb 2023</span>
              <span className="blog__dot">.</span>
              <span>Zsans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
