import React from "react";
import Heading from "./commons/Heading";

export default function Note() {
  return (
    <section className="noted pt-[70px] md:pt-[170px] pb-[50px] md:pb-[280px] overflow-x-hidden">
      <div className="page-container">
        <Heading>
          <span className="relative block">
            <span className="relative z-20">MỘT SỐ LƯU Ý KHI SỬ DỤNG</span>
            <img
              className="absolute z-10 top-[8px] left-[105px] md:left-[277px] lg:left-[380px] xl:left-[525px] w-[85px] md:w-[100px] lg:w-auto"
              src="./icons/circle.svg"
              alt=""
            />
          </span>
          <span>NƯỚC HỒNG SÂM SAIMDANG</span>
        </Heading>
        <div className="flex items-center justify-center mt-[50px] md:mt-[100px] relative">
          <div className="block md:hidden lg:block">
            <img
              className="w-[150px] xl:w-auto"
              src="./images/note2.svg"
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="zoom-in"
              className="md:w-[350px] lg:w-[320px] xl:w-auto"
              srcSet="./images/note1.png 2x"
              alt=""
            />
          </div>
          <div className="flex md:hidden self-start mt-[-40px] lg:flex flex-col gap-[20px] xl:gap-[40px]">
            <img
              className="w-[100px] xl:w-auto"
              src="./images/note3.svg"
              alt=""
            />
            <img
              className="w-[100px] xl:w-auto"
              src="./images/note4.svg"
              alt=""
            />
          </div>
          <div className="hidden md:block">
            <div
              data-aos="flower1"
              data-aos-duration="2000"
              data-aos-offset="300"
              className="absolute top-[-130px] right-0"
            >
              <NoteItem>
                Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng mặt trời trực
                tiếp.
              </NoteItem>
            </div>
            <div
              data-aos="flower2"
              data-aos-duration="2000"
              className="absolute top-[120px] xl:top-[190px] right-0"
            >
              <NoteItem>Không sử dụng nước hồng sâm vào ban đêm.</NoteItem>
            </div>
            <div
              data-aos="flower3"
              data-aos-duration="2000"
              className="absolute bottom-[-140px] right-[60px] lg:right-[140px] xl:bottom-[-100px] xl:right-[180px]"
            >
              <NoteItem>
                Hỏi ý kiến bác sĩ khi dùng cùng thuốc trị bệnh tiểu đường, chất
                kháng đông máu.
              </NoteItem>
            </div>
            <div
              data-aos="flower4"
              data-aos-duration="2000"
              className="absolute bottom-[-200px] left-[50%] translate-x-[-50%]"
            >
              <NoteItem>
                Dùng trực tiếp hoặc có thể pha loãng, thêm mật ong nếu thích
                dùng ngọt.
              </NoteItem>
            </div>
            <div
              data-aos="flower7"
              data-aos-duration="2000"
              className="absolute bottom-[-140px] xl:bottom-[-100px] left-[60px] lg:left-[140px] xl:left-[180px]"
            >
              <NoteItem>Lắc đều trước khi sử dụng.</NoteItem>
            </div>
            <div
              data-aos="flower6"
              data-aos-duration="2000"
              className="absolute top-[120px] xl:top-[220px] left-0"
            >
              <NoteItem>
                Không để gói sản phẩm vào lò vi sóng để hâm nóng.
              </NoteItem>
            </div>
            <div
              data-aos="flower5"
              data-aos-duration="2000"
              data-aos-offset="300"
              className="absolute top-[-120px] xl:top-[-100px] left-0"
            >
              <NoteItem>
                Dùng 1 gói mỗi ngày vào buổi sáng hoặc trưa, trước hoặc sau ăn
                30 phút.
              </NoteItem>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px] md:hidden">
          <NoteItem>
            Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng mặt trời trực tiếp.
          </NoteItem>
          <NoteItem>Không sử dụng nước hồng sâm vào ban đêm.</NoteItem>
          <NoteItem>
            Hỏi ý kiến bác sĩ khi dùng cùng thuốc trị bệnh tiểu đường, chất
            kháng đông máu.
          </NoteItem>
          <NoteItem>
            Dùng trực tiếp hoặc có thể pha loãng, thêm mật ong nếu thích dùng
            ngọt.
          </NoteItem>
          <NoteItem>Lắc đều trước khi sử dụng.</NoteItem>
          <NoteItem>Không để gói sản phẩm vào lò vi sóng để hâm nóng.</NoteItem>
        </div>
        <div className="mt-[30px] md:hidden flex items-center justify-center">
          <NoteItem>
            Dùng 1 gói mỗi ngày vào buổi sáng hoặc trưa, trước hoặc sau ăn 30
            phút.
          </NoteItem>
        </div>
      </div>
    </section>
  );
}

const NoteItem = ({ children, className }) => {
  return (
    <div
      className={`${className} flex items-center justify-center relative note-item border-[5px] border-solid border-red bg-white rounded-[50%] w-[170px] md:w-[180px] lg:w-[200px] xl:w-[222px]
    xl:h-[222px] lg:h-[200px] h-[170px] md:h-[180px] px-[20px]`}
    >
      <div className="absolute top-[-30px] left-[50%] translate-x-[-50%]">
        <img
          className="w-[60px] xl:w-auto"
          src="./icons/note-icon.svg"
          alt=""
        />
      </div>
      <p className="relative z-10 text-[14px] lg:text-[16px] font-extrabold text-center font-mulish">
        {children}
      </p>
    </div>
  );
};
