// Logo
import logo from "../../svg/logo.svg";

import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      {/* Menu Desktop */}
      <nav className="flex-space px-2 mt-4">
        <div className="flex-start-row w-100 mobile">
          <div>
            <a href="">
              <img src={logo} alt="Shortly" />
            </a>
          </div>

          <ul className="menu flex">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>

          <div
            className={`bx ${active ? "active" : ""}`}
            onClick={handleToggleMenu}
          ></div>
        </div>

        <ul className="menu flex-end-row w-100">
          <li>
            <a href="" className="mr-2">
              Login
            </a>
          </li>
          <li>
            <a href="" className="btn w-100">
              Sing Up
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`menu-mobile text-center mt-1 py-3 ${
          active ? "showmenu" : ""
        }`}
      >
        <ul className="bb-gray mx-3">
          <li className="pb-2">
            <a href="" className="color-white link-menu-mobile">
              Features
            </a>
          </li>
          <li className="py-2">
            <a href="" className="color-white link-menu-mobile">
              Pricing
            </a>
          </li>
          <li className="py-2">
            <a href="" className="color-white link-menu-mobile">
              Resources
            </a>
          </li>
        </ul>

        <ul className="mx-3">
          <li className="py-2">
            <a href="" className="color-white">
              Login
            </a>
          </li>
          <li>
            <a href="" className="btn w-100">
              Sing Up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
