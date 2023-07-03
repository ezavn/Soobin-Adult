import React from "react";
import Heading from "./commons/Heading";

export default function Part() {
  return (
    <section
      id="part"
      className="relative pt-0 overflow-x-hidden part pb-sectionMB md:pb-section lg:py-section"
    >
      <div className="hidden lg:block absolute top-[-75px] left-0">
        <img src="./images/mount-bg.svg" alt="" />
      </div>
      <div className="relative z-10 page-container">
        <Heading className="mb-[35px]">
          THÀNH PHẦN CỦA NƯỚC HỒNG SÂM SAIMDANG
        </Heading>
        <div className="hidden md:block" data-aos="zoom-in-up">
          <img srcSet="./images/part-main.png 2x" alt="" />
        </div>
        <div className="flex flex-col md:hidden">
          <img srcSet="./images/part2.png 2x" alt="" data-aos="fade-left" />
          <div className="flex gap-[10px] items-center">
            <img
              data-aos="fade-right"
              className="flex-1 w-[50%]"
              srcSet="./images/part1.png 2x"
              alt=""
            />
            <img
              className="flex-1 w-[50%]"
              srcSet="./images/part3.png 2x"
              alt=""
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
      <div className="page-container lg:px-[50px] mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[140px]">
        <div
          id="order"
          className="rounded-[45px] bg-green pt-[70px] xl:pt-[118px] md:pt-[90px] pb-[50px] px-[30px] md:px-[50px] lg:px-[90px] relative"
        >
          <div className="relative max-w-[470px] lg:max-w-[600px]">
            <div className="absolute top-[-30px] md:top-[-65px] md:left-[-10px] z-[0]">
              <img src="./icons/quote.svg" alt="" />
            </div>
            <p
              className="font-mulish font-bold text-[16px] md:text-[20px] text-white md:mb-[20px]"
              data-aos="fade-right"
            >
              "Chúng tôi mong muốn mang những sản phẩm Sâm Hàn Quốc được tuyển
              chọn chất lượng nhất để chăm sóc cho sức khoẻ hàng triệu gia đình
              Việt Nam".
            </p>
            <h3
              className="font-mulish font-bold text-[20px] text-lightYellow"
              data-aos="fade-up"
            >
              Chị{" "}
              <span className="font-ms font-normal text-[48px]">
                Thùy Dương,
              </span>
            </h3>
            <p
              className="font-medium text-white mb-[30px] md:mb-[50px]"
              data-aos="fade-up"
            >
              Giám đốc Công ty Nhân sâm Việt Hàn - Siêu thị sâm SOOBIN
            </p>
            <a
              className="btn --main"
              href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-nguyen-chat-saimdang-30-goi/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/cart-icon2.svg" alt="" />
              <span className="uppercase text-[13px] md:text-[16px]">
                đặt mua hồng sâm saimdang
              </span>
            </a>
          </div>
          <div className="absolute top-[48px] md:top-[18px] lg:top-[16px] xl:top-[-80px] right-[-80px] lg:right-[-70px] xl:right-0 hidden md:block">
            <img
              className="w-[480px] xl:w-auto"
              srcSet="./images/owner.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
