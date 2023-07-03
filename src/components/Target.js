import React from "react";
import Heading from "./commons/Heading";

export default function Target() {
  return (
    <section className="pt-sectionMB md:pt-section pb-sectionMB target bg-[url('../public/images/target-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="page-container">
        <Heading>
          ĐỐI TƯỢNG PHÙ HỢP <br />
          SỬ DỤNG NƯỚC HỒNG SÂM SAIMDANG
        </Heading>
        <h3 className="font-extrabold text-center mb-[50px]" data-aos="fade-up">
          Người từ <span className="text-[24px]">18 tuổi</span> trở lên
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px] justify-center">
          <div className="mt-[-5px]" data-aos="flip-left">
            <img srcSet="./images/target1.png 2x" alt="" />
          </div>
          <div data-aos="flip-left" data-aos-delay="100">
            <img srcSet="./images/target2.png 2x" alt="" />
          </div>
          <div data-aos="flip-left" data-aos-delay="200">
            <img srcSet="./images/target3.png 2x" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[50px] justify-center mt-[30px] md:mt-[50px]">
          <div
            className="md:w-[213px] lg:w-auto"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <img className="w-full" srcSet="./images/target4.png 2x" alt="" />
          </div>
          <div
            className="md:w-[213px] lg:w-auto"
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <img className="w-full" srcSet="./images/target5.png 2x" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
