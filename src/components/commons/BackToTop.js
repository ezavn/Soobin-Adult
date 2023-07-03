import React, { useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className={`hover:opacity-100 fixed bottom-[20px] right-[15px] btt w-[40px] h-[40px] bg-lightYellow  rounded-[50%] duration-500 cursor-pointer inline-flex justify-center items-center z-50 ${
        visible ? "right-0 opacity-50" : "right-[-100px] opacity-0"
      } `}
      onClick={scrollToTop}
    >
      <img className="w-[30px] h-[30px]" src="./icons/btt-arrow.svg" alt="" />
    </div>
  );
}
