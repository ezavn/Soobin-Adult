import React from "react";
import Heading from "./commons/Heading";
import Slider from "react-slick";

export default function Benefit() {
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
  return (
    <section
      id="benefit"
      className="pt-sectionMB lg:pt-section benefit pb-section"
    >
      <div className="page-container">
        <Heading>LỢI ÍCH CỦA NƯỚC HỒNG SÂM SAIMDANG</Heading>
        <h3 className="font-extrabold text-center mb-[50px]" data-aos="fade-up">
          khi sử dụng từ 1 - 2 gói mỗi ngày
        </h3>
        <div className="hidden md:grid grid-cols-2 gap-[15px] md:gap-0 md:grid-cols-3 max-w-[1270px] mx-auto">
          <BenefitItem img="/images/benefit1.svg">
            Tăng cường năng lượng và sức khỏe cho người làm việc mệt mỏi.
          </BenefitItem>
          <BenefitItem img="/images/benefit2.svg">
            Tăng cường sinh lực cho nam giới.
          </BenefitItem>
          <BenefitItem img="/images/benefit3.svg">
            Tăng tuần hoàn máu, giúp da dẻ hồng hào, máu huyết lưu thông tốt.
          </BenefitItem>
          <BenefitItem img="/images/benefit4.svg">
            Tăng trao đổi chất, giúp ăn ngon miệng, ngủ sâu giấc.
          </BenefitItem>
          <BenefitItem img="/images/benefit5.svg">
            Chống oxi hóa, giảm lão hóa.
          </BenefitItem>
          <BenefitItem img="/images/benefit6.svg">
            Điều hòa hỗ trợ nội tiết cho phụ nữ tuổi 30/40/50.
          </BenefitItem>
          <BenefitItem img="/images/benefit7.svg">
            Tăng sức đề kháng, giảm bệnh vặt cho người dùng.
          </BenefitItem>
          <BenefitItem img="/images/benefit8.svg">
            Phục hồi thể lực nhanh chóng.
          </BenefitItem>
          <BenefitItem img="/images/benefit9.svg">
            Điều hòa huyết áp.
          </BenefitItem>
        </div>
        <div className="block md:hidden benefit-slide">
          <Slider {...settings}>
            <BenefitItem2 img="/images/benefit1.svg">
              Tăng cường năng lượng và sức khỏe cho người làm việc mệt mỏi.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit2.svg">
              Tăng cường sinh lực cho nam giới.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit3.svg">
              Tăng tuần hoàn máu, giúp da dẻ hồng hào, máu huyết lưu thông tốt.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit4.svg">
              Tăng trao đổi chất, giúp ăn ngon miệng, ngủ sâu giấc.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit5.svg">
              Chống oxi hóa, giảm lão hóa.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit6.svg">
              Điều hòa hỗ trợ nội tiết cho phụ nữ tuổi 30/40/50.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit7.svg">
              Tăng sức đề kháng, giảm bệnh vặt cho người dùng.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit8.svg">
              Phục hồi thể lực nhanh chóng.
            </BenefitItem2>
            <BenefitItem2 img="/images/benefit9.svg">
              Điều hòa huyết áp.
            </BenefitItem2>
          </Slider>
        </div>
      </div>
    </section>
  );
}

const BenefitItem = ({ img, children }) => {
  return (
    <div className="benefit-item">
      <div className="img" data-aos="zoom-in">
        <img src={img} alt="" />
      </div>
      <p data-aos="zoom-in">{children}</p>
    </div>
  );
};
const BenefitItem2 = ({ img, children }) => {
  return (
    <div className="benefit-item">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p>{children}</p>
    </div>
  );
};
