import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleHamburger = () => setShowNav(!showNav);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const activeLink1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };
  const activeLink2 = () => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
  };
  const activeLink3 = () => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(false);
  };
  const activeLink4 = () => {
    setIsActive3(false);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(true);
  };
  const clearActive = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  return (
    <header className="bg-white h-[103px]">
      <div className="flex items-center justify-between h-full page-container">
        <div className="h-[144px] mt-[40px] relative z-[10]">
          <a href="/" onClick={() => clearActive()}>
            <img src="./images/soobinnl-logo.svg" alt="Sâm Soobin" />
          </a>
        </div>
        <nav className={`nav-menu ${!!showNav ? "active" : ""}`}>
          <li
            onClick={() => activeLink1()}
            className={`${isActive1 ? "active" : ""}`}
          >
            <a href="#intro" onClick={() => setShowNav(false)}>
              Giới thiệu
            </a>
          </li>
          <li
            onClick={() => activeLink2()}
            className={`${isActive2 ? "active" : ""}`}
          >
            <a href="#part" onClick={() => setShowNav(false)}>
              Thành phần
            </a>
          </li>
          <li
            onClick={() => activeLink3()}
            className={`${isActive3 ? "active" : ""}`}
          >
            <a href="#benefit" onClick={() => setShowNav(false)}>
              Công dụng
            </a>
          </li>
          <li
            onClick={() => activeLink4()}
            className={`${isActive4 ? "active" : ""}`}
          >
            <a href="#order" onClick={() => setShowNav(false)}>
              Đặt mua
            </a>
          </li>
        </nav>
        <div
          className={`${
            showNav ? "fixed top-[30px] right-[30px]" : "relative"
          } hamburger  z-[99999]`}
          onClick={handleToggleHamburger}
        >
          {!!showNav ? (
            <FaTimes size={30} style={{ color: "#FFF" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "#FFDD5E" }}></FaBars>
          )}
        </div>
        <div className="hidden md:block">
          <a className="btn --main" href="tel:0333 77 97 98">
            <img src="./icons/phone-icon.svg" alt="" />
            <span>0333 77 97 98</span>
          </a>
        </div>
      </div>
    </header>
  );
}
