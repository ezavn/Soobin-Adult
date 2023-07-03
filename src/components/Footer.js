import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-green pt-[48px] pb-[32px]">
      <div className="page-container">
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between px-[40px] md:px-[50px] pt-[50px] md:pt-[20px] pb-[20px] md:pb-0 rounded-[20px] border-[rgba(255,_255,_255,_0.19)] border-[2px] border-solid gap-[30px] lg:gap-0">
          <div className="text-center md:mt-[50px]">
            <a href="/" className="inline-block mb-[20px]">
              <img
                className="md:w-auto w-[100px]"
                srcSet="./images/soobin-logofooter.png 2x"
                alt=""
              />
            </a>
            <p className="text-white">Mua bằng niềm tin - Bán bằng uy tín</p>
          </div>
          <div className="relative">
            <div>
              <img
                className="md:w-auto w-[180px]"
                srcSet="./images/footer1.png 2x"
                alt=""
              />
            </div>
            <div className="absolute bottom-[20px] lg:bottom-[35px] left-[50%] translate-x-[-50%] w-full z-10">
              <div className="flex items-center gap-[24px] justify-center mb-[10px] lg:mb-[20px]">
                <div className="w-[20px] h-[20px]">
                  <img
                    className="w-full h-full"
                    src="./icons/facebook-icon.svg"
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    className="w-full h-full"
                    src="./icons/twitter-icon.svg"
                    alt=""
                  />
                </div>
                <div className="w-[22px] h-[20px]">
                  <img
                    className="w-full h-full"
                    src="./icons/youtube-icon.svg"
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    className="w-full h-full"
                    src="./icons/instagram-icon.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-center text-white font-light text-[13px]">
                Copyright © 2022 Sâm Soobin
              </p>
            </div>
          </div>
          <div className="md:mt-[50px]">
            <h3 className="font-semibold text-[28px] lg:text-[36px] text-lightYellow uppercase leading-[1.2]">
              Showroom:
            </h3>
            <p className="text-white text-[15px] lg:text-[24px]">
              <span className="text-[22px] lg:text-[32px] uppercase text-white block">
                Happy Valley,
              </span>
              838 Nguyễn Văn Linh, <br /> P Tân Phong, Q 7, TP.HCM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
