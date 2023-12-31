import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll__down absolute bottom-1 left-0 w-full text-center">
      <a href="/about" className="mouse__wrapper">
        <span className="home_scroll-name text-small_font">
          &copy; Zsans Portofolio &bull; 2023
        </span>
        <span className="mouse border-2 border-solid border-[#454360] block h-[1.6rem] w-5 m-auto mt-3 rounded-[1rem] relative">
          <span className="wheel bg-title_color rounded-[100%] w-1 h-1 absolute top-2 left-1/2 translate-x-[-50%] animate-ani-mouse"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
