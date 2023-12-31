import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials flex justify-center gap-7 my-2 mx-0 -z-50">
      <a
        href="https://www.instagram.com/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/sandi-hermawan1/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/sandi-hermawan01"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.kaggle.com/sandihermawan13"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-kaggle"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
