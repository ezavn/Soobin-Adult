import React from "react";

export default function Show() {
  return (
    <section className="show mt-[-120px] lg:mt-[-150px] xl:mt-[-250px] relative">
      <div>
        <img src="./images/show-bg.png" alt="" />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] w-full flex items-center page-container">
        <div className="absolute bottom-[5px] left-[50px] md:bottom-[30px] md:left-[100px] lg:bottom-0 lg:left-0 lg:relative w-[150px] md:w-[250px] lg:w-auto z-10">
          <img data-aos="fade-right" srcSet="./images/show1.png 2x" alt="" />
        </div>
        <div className="">
          <img data-aos="fade-down" srcSet="./images/show2.png 2x" alt="" />
        </div>
        <div className="">
          <img
            data-aos="fade-down"
            data-aos-delay="200"
            className=""
            srcSet="./images/show3.png 2x"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 right-[14px] md:right-0 xl:right-[-130px]">
          <img
            data-aos="fade-left"
            className="w-[200px] md:w-[450px] lg:w-auto"
            srcSet="./images/show4.png 2x"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
