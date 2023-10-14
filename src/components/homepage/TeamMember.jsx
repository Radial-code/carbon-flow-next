import React from "react";
import Slider from "react-slick";
import { TeamMemberSliderdata } from "../common/Helper";
import Image from "next/image";
import { TeamSliderArrowIcon } from "../common/Icon";

const TeamMember = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <>
      <section className="pt-[106px] md:pt-[120px] pb-[101px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <h2 className=" ff_AktivGrotesk_bold font-normal text-[36px] text-[#061E10] leading-[43.27px] mb-0 text-center">
            Team Members
          </h2>
          <p className=" ff_poppins font-normal text-base text-[#516258] mb-0 mt-[15px] max-w-[594px] mx-auto text-center">
            Our project is fueled by a highly skilled and diverse team, united
            by a shared commitment to global standards of excellence.
          </p>

          <div className="relative">
            <div className="top-[50%] translate-y-[-50%] left-[-6%] absolute group cursor-pointer">
              <TeamSliderArrowIcon />
            </div>
            <div className="top-[50%] translate-y-[-50%] right-[-6%] absolute rotate-[180deg] group cursor-pointer">
              <TeamSliderArrowIcon />
            </div>
            <Slider
              {...settings}
              className="flex flex-wrap mt-[40px] mx-[-10px] relative"
            >
              {TeamMemberSliderdata.map((data, index) => {
                return (
                  <div className="w-3/12 h-full flex px-[10px]" key={index}>
                    <div className="border-2 border-[#E6E9E7] hover:border-[#D2F958] rounded-[10px] h-full w-full">
                      <div className="py-[22px]">
                        <div className="clip_path_team_slider flex justify-center overflow-hidden">
                          <Image
                            className="w-full scale-110 px-[66px]"
                            width={96}
                            height={110}
                            src={data.img}
                            alt="team slider image 1"
                          />
                        </div>
                        <h2 className="ff_AktivGrotesk_bold font-normal text-[20px] text-[#061E10] text-center mb-0 mt-[12px] leading-[24.04px]">
                          {data.heading}
                        </h2>
                        <p className=" ff_poppins font-normal text-[14px] text-[#061E10] mb-0 mt-[2px] text-center">
                          {data.profession}
                        </p>
                        <div className="flex justify-center">
                          <button className="mt-[16px] ff_poppins font-medium text-[14px] text-white py-[12.5px] px-[22px] border-2 border-white rounded-full bg-[#235C02] hover:bg-white hover:text-[#4EB708] hover:border-[#4EB708] duration-200">
                            {data.profileBtn}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
