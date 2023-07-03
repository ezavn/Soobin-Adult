import React from "react";

export default function From() {
  return (
    <section id="intro">
      <div className="flex flex-col-reverse md:flex-row lg:gap-0 gap-[30px] items-center page-container py-sectionMB lg:py-section overflow-x-hidden">
        <div className="flex-1 xl:max-w-[470px]">
          <h3
            className="text-[20px] lg:text-[24px] font-mulish font-bold"
            data-aos="fade-right"
          >
            Nước{" "}
            <span className="font-extrabold uppercase">
              hồng sâm nguyên chất
            </span>
          </h3>
          <h2
            className="uppercase text-[60px] lg:text-[76px] font-mulish font-[1000] text-red leading-[1] mb-[15px] lg:mb-[40px]"
            data-aos="fade-right"
          >
            Saimdang
          </h2>
          <p className="text-justify" data-aos="fade-up">
            Có xuất xứ từ Hàn Quốc, quốc gia nổi tiếng về những củ nhân sâm được
            trồng nhiều năm trong môi trường sạch, tiêu chuẩn hàng đầu, thu
            hoạch nghiêm ngặt nhất. Nước hồng sâm Saimdang được nhiều người tin
            dùng vì tác dụng bồi bổ, phục hồi sức khỏe, tăng tuần hoàn, tăng đề
            kháng cho cơ thể từ hồng sâm Hàn Quốc.
          </p>
          <p
            className="font-light italic text-[14px] mt-[15px]"
            data-aos="fade-up"
          >
            Dung tích: 10ml x 10 gói x 3 hộp (300ml)
          </p>
        </div>
        <div className="xl:w-[780px] flex-1 xl:flex-shrink-0">
          <div data-aos="zoom-in-left">
            <img srcSet="./images/soobinnl-from.png 2x" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
