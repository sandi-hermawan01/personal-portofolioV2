import React from "react";
import logo from "../assets/img/personal-brand-logo.jpg";
import { NavLink, Outlet, Navigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section>
        <aside className="aside fixed flex flex-col justify-between left-0 top-0 bg-body_color border-r-[1px] border-solid border-[rgba(0 0 0 0.05)] p-10 w-[110px] min-h-[100vh] z-10">
          <a href="/" className="nav__logo">
            <img src={logo} alt=""></img>
          </a>
          <nav className="nav">
            <div className="nav__menu">
              <ul className="nav__list flex flex-col gap-4 ">
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    <i className="fa-solid fa-house"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/about" className="nav__link">
                    <i className="icon-user-following"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/services" className="nav__link">
                    <i className="icon-briefcase"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/resume" className="nav__link">
                    <i className="icon-graduation"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/portofolio" className="nav__link">
                    <i className="icon-layers"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/blog" className="nav__link">
                    <i className="icon-note"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="nav_footer">
            <span
              className="copyright text-[hsl(245 15% 65%)] text-small_font rotate-180 align-text-top"
              style={{ writingMode: "vertical-rl" }}
            >
              &copy; zsans portofolio 2023.
            </span>
          </div>
        </aside>
        <div className="max-md:-mt-8 mt-5 w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
