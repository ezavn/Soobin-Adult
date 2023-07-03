import React from "react";

export default function Hero() {
  return (
    <section className="hero bg-[url('../public/images/soobinnl-hero.png')] bg-center bg-no-repeat bg-cover  lg:py-0 py-sectionMB md:py-section overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center page-container gap-[15px] md:gap-[30px] lg:gap-0">
        <div className="flex-1 xl:ml-[50px]" data-aos="fade-right">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-mulish font-black leading-[1]">
            NƯỚC HỒNG SÂM{" "}
            <span className="block text-[58px] md:text-[64px] lg:text-[72px]">
              SAIMDANG
            </span>
          </h1>
          <p className="font-bold mb-[30px] md:mb-[45px]">
            Năng lượng từ Tự nhiên - Tăng cường Sức khỏe mỗi ngày
          </p>
          <div>
            <a
              className="btn --second"
              href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-nguyen-chat-saimdang-30-goi/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/cart-icon.svg" alt="" />
              <span>Liên hệ để mua hàng</span>
            </a>
          </div>
        </div>
        <div className="" data-aos="fade-left">
          <div>
            <img srcSet="./images/hero-img.png 2x" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
