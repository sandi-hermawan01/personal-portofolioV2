import React from "react";
import controlImg from "../assets/img/control.png";
import Logo from "../assets/img/personal-brand-logo.jpg";

import { Outlet } from "react-router-dom";

import { useState } from "react";

const SideBarV2 = () => {
  const [open, setOpen] = useState(false);
  const icon_home = <i className="fa-solid fa-house"></i>;
  const icon_about = <i className="icon-user"></i>;
  const icon_resume = <i className="icon-graduation"></i>;
  const icon_portofolio = <i className="icon-folder"></i>;
  const Menus = [
    { title: "Home", src: "Chart_fill", link: "/", icon: icon_home },
    { title: "About", src: "Chat", gap: true, link: "about", icon: icon_about },
    { title: "Resume ", src: "Calendar", link: "resume", icon: icon_resume },
    {
      title: "Project",
      src: "Search",
      link: "portofolio",
      icon: icon_portofolio,
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open
            ? "w-56 max-[420px]:w-0 max-[420px]:p-5 max-[420px]:border-[1px]"
            : "w-20 max-[420px]:w-0 max-[420px]:p-0 "
        } bg-container grayscale h-screen p-5 pt-8 relative duration-300 border-r-black max-[420px]:h-[42vh] max-[420px]:rounded-[10px] max-[420px]:z-50 max-[420px]:fixed `}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-5 top-7  border-container
           border-4 rounded-[100%]  ${
             !open
               ? "w-8 -right-[16px] top-[36px] rotate-180 duration-[.4s] max-w-min max-[420px]:-right-[22px] "
               : "w-12 "
           }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`w-10 h-10 duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={` text-text_color origin-left font-medium text-xl duration-200 max-[420px]:hidden ${
              !open && "scale-0"
            }`}
          >
            Portofolio
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-grey  hover:rounded-[5px] hover:text-white text-text_color font-medium text-base items-center max-[420px]:hover:bg-white max-[420px]:hover:text-text_color
              ${Menu.gap ? "mt-5" : "mt-0"} ${
                index === 0 &&
                "border-[1px] rounded-[8px] border-light-grey shadow-sm max-[420px]:border-none max-[420px]:shadow-none"
              } ${!open ? "justify-center max-[420px]:hidden" : ""} `}
            >
              <a
                href={`${Menu.link}`}
                className="w-auto h-auto text-[1.2rem] max-[420px]:translate-x-[-18px] flex items-center text-center justify-center  "
              >
                {Menu.icon}
                <span
                  className={`${
                    !open && "opacity-0 hidden"
                  } origin-left duration-200 max-[420px]:hidden text-[14px] ml-3`}
                >
                  {Menu.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-4 max-[420px]:p-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarV2;
