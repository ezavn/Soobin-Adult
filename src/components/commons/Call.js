import React from "react";

export default function Call() {
  return (
    <a
      className="phone-ring md:hidden inline-flex items-center justify-center fixed bottom-[20px] left-[20px] w-[50px] h-[50px] bg-yellow rounded-[50%] z-50"
      href="tel:0333 77 97 98"
    >
      <img src="./icons/phone-icon.svg" alt="" />
    </a>
  );
}
