import React from "react";
import Slider from "react-slick";

export default function Why() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  //pt-[180px] md:pt-[350px] lg:pt-[300px]
  return (
    <section className="why pt-[180px] md:pt-[350px] lg:pt-[300px] xl:pt-[400px] relative">
      <div className="absolute top-[550px] md:top-[650px] left-0 right-0">
        <img
          className="h-[1100px] md:h-[2178px]"
          src="./images/soobin-bg.png"
          alt=""
        />
      </div>
      <div className="page-container">
        <h2
          className="font-bold text-[24px] md:text-[30px] lg:text-[36px] text-center leading-[1.2] mb-[20px]"
          data-aos="fade-down"
        >
          <span className="font-extrabold text-[28px] md:text-[38px] lg:text-[48px]">
            TẠI SAO
          </span>{" "}
          NÊN MUA NƯỚC <br className="block xl:hidden" />
          <span className="font-extrabold text-[28px] md:text-[38px] lg:text-[48px] text-red">
            HỒNG SÂM SAIMDANG
          </span>{" "}
          <br /> TẠI{" "}
          <span className="font-extrabold text-[28px] md:text-[38px] lg:text-[48px] text-yellow">
            NHÂN SÂM VIỆT HÀN - SIÊU THỊ SÂM SOOBIN?
          </span>
        </h2>
        <p
          className="text-justify md:text-center font-medium lg:px-[60px] xl:px-[80px] md:mb-[100px]"
          data-aos="fade-up"
        >
          Sản phẩm <span className="font-bold">NƯỚC HỒNG SÂM SAIMDANG</span>{" "}
          được Nhân sâm Việt Hàn - Siêu thị Sâm Soobin phân phối và nhập khẩu
          chính hãng tại Hàn Quốc.Nhân Sâm Việt Hàn - Siêu thị Sâm Soobin tự hào
          là một trong những doanh nghiệp đầu tiên đưa các sản phẩm chăm sóc sức
          khỏe xuất xứ từ Hàn Quốc đến với người tiêu dùng Việt với{" "}
          <span className="font-bold text-[20px] md:text-[24px]">
            5 cam kết
          </span>
        </p>
        <div className="hidden md:grid grid-cols-5 max-w-[850px] mx-auto rounded-[30px] bg-[#692F2E] pt-[70px] pb-[25px]">
          <WhyItem number="./images/1.png">
            Tất cả sản phẩm Nhân sâm Hồng sâm phân phối đều được nhập khẩu chính
            hãng tại Hàn Quốc.
          </WhyItem>
          <WhyItem number="./images/2.png">
            Các sản phẩm phân phối đều có công bố chất lượng sản phẩm.
          </WhyItem>
          <WhyItem number="./images/3.png">
            Cam kết mang đến cho quý khách hàng sản phẩm chất lượng với giá
            thành phù hợp nhất .
          </WhyItem>
          <WhyItem number="./images/4.png">
            Cam kết tư vấn đúng nhu cầu khách hàng, đúng chất lượng sản phẩm.
          </WhyItem>
          <WhyItem number="./images/5.png">
            Cam kết sản phẩm đến được tay khách hàng một cách trọn vẹn nhất.
          </WhyItem>
        </div>
        <div className="h-[300px] overflow-hidden pt-[50px] mt-[20px] md:hidden block">
          <div className="why-slide">
            <Slider {...settings}>
              <WhyItem2 number="./images/1.png">
                Tất cả sản phẩm Nhân sâm Hồng sâm phân phối đều được nhập khẩu
                chính hãng tại Hàn Quốc.
              </WhyItem2>
              <WhyItem2 number="./images/2.png">
                Các sản phẩm phân phối đều có công bố chất lượng sản phẩm.
              </WhyItem2>
              <WhyItem2 number="./images/3.png">
                Cam kết mang đến cho quý khách hàng sản phẩm chất lượng với giá
                thành phù hợp nhất .
              </WhyItem2>
              <WhyItem2 number="./images/4.png">
                Cam kết tư vấn đúng nhu cầu khách hàng, đúng chất lượng sản
                phẩm.
              </WhyItem2>
              <WhyItem2 number="./images/5.png">
                Cam kết sản phẩm đến được tay khách hàng một cách trọn vẹn nhất.
              </WhyItem2>
            </Slider>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-[30px] lg:gap-[50px] max-w-[980px] mx-auto mt-[50px] md:mt-[70px] lg:mt-[100px] overflow-hidden">
          <div className="mb-[70px] md:mb-[30px] lg:mb-0">
            <p
              className="text-[28px] lg:text-[36px] font-ms mb-[20px] leading-[1.2]"
              data-aos="fade-right"
            >
              Bạn đã uống Nước hồng sâm <br />
              <span className="italic font-extrabold font-mulish text-red">
                SAIMDANG
              </span>{" "}
              hôm nay chưa?
            </p>
            <a
              className="btn --third"
              href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-nguyen-chat-saimdang-30-goi/"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
            >
              <img src="./icons/cart-icon.svg" alt="" />
              <span>đặt mua hồng sâm saimdang</span>
            </a>
          </div>
          <div>
            <img
              data-aos="fade-left"
              className="w-auto md:w-[360px] lg:w-auto mb-[-80px] md:mb-0"
              srcSet="./images/why1.png 2x"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[340px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1075px] mx-auto bg-[url('../public/images/gift-bg.png')] bg-center bg-no-repeat bg-cover py-[40px] pr-[10px] pl-[30px] md:px-[50px] lg:px-[90px] h-[240px] md:h-[340px] relative rounded-[25px]">
          <div className="absolute top-[-25px] md:top-[-35px] xl:top-[-70px] left-[-15px] md:left-[-35px] xl:left-[-70px] w-[60px] md:w-[100px] xl:w-auto">
            <img className="w-full" src="./images/bow.svg" alt="" />
          </div>
          <div className="absolute bottom-[-60px] md:bottom-[-85px] right-[-20px] md:right-[-30px] lg:right-[-50px] xl:right-[-80px] w-[200px] md:w-[300px] lg:w-[400px] xl:w-auto">
            <img
              data-aos="zoom-out"
              className="w-full"
              srcSet="./images/gift.png 2x"
              alt=""
            />
          </div>
          <div>
            <h3
              data-aos="fade-left"
              className="font-bold text-[18px] md:text-[32px] xl:text-[36px] uppercase leading-[1.2]"
            >
              Tặng kèm Dịch vụ
            </h3>
            <h3
              data-aos="fade-left"
              className="font-[1000] text-[18px] md:text-[34px] xl:text-[40px] text-red uppercase leading-[1.2]"
            >
              gói quà biếu nghệ thuật
            </h3>
            <h3
              data-aos="fade-left"
              className="font-bold text-[18px] md:text-[32px] xl:text-[36px] uppercase leading-[1.2]"
            >
              phong cách{" "}
              <span className="font-[1000] text-[18px] md:text-[34px] xl:text-[40px] text-red">
                BOJAGI Hàn Quốc
              </span>
            </h3>
            <h3
              data-aos="fade-right"
              className="font-bold text-[18px] md:text-[32px] xl:text-[36px] uppercase leading-[1.2]"
            >
              khi mua{" "}
              <span className="font-extralight text-[22px] md:text-[40px] xl:text-[48px] border-b-[4px] md:border-b-[8px] border-solid border-white">
                Nước hồng sâm <br /> SAIMDANG
              </span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[80px]">
          <div className="text-center font-medium text-[16px] md:text-[20px] text-black">
            Chúng tôi sẽ tư vấn tận tâm cho bạn bất cứ thắc mắc nào liên quan
            tới <br className="hidden md:block" />{" "}
            <span className="font-bold text-[#FF2F2C] uppercase">
              Nhân sâm, Hồng sâm Hàn Quốc
            </span>{" "}
            dù bạn mua hay không mua
          </div>
          <a
            className="contact-button mt-[30px]"
            href="http://m.me/100062932646413"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[30px]"
              src="./icons/phone-white-icon.svg"
              alt=""
            />
            <span>HỖ TRỢ TƯ VẤN</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const WhyItem = ({ number, children }) => {
  return (
    <div className="why-item px-[20px] relative">
      <img
        className="absolute top-[-113px] left-[50%] translate-x-[-50%]"
        srcSet={`${number} 2x`}
        alt=""
      ></img>
      <p
        className="font-semibold leading-[2] text-white text-center"
        data-aos="zoom-in"
      >
        {children}
      </p>
    </div>
  );
};

const WhyItem2 = ({ number, children }) => {
  return (
    <div className="why-item2 flex flex-col items-center bg-red h-[250px] relative mx-[5px] rounded-3xl px-[20px] pt-[40px]">
      <img
        className="absolute top-[-50px] left-[50%] translate-x-[-50%]"
        srcSet={`${number} 2x`}
        alt=""
      ></img>
      <p className="font-semibold leading-[2] text-white text-center">
        {children}
      </p>
    </div>
  );
};
