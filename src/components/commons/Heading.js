import React from "react";

export default function Heading({ children, className }) {
  return (
    <h2
      className={`font-mulish text-[24px] md:text-[28px] lg:text-[36px] uppercase font-black text-center ${className}`}
      data-aos="fade-down"
    >
      {children}
    </h2>
  );
}
