import Slider from "react-slick";
import { TeamMemberSliderdata } from "../common/Helper";
import Image from "next/image";
import { TeamSliderArrowIcon } from "../common/Icons";
import { useRef } from "react";

const TeamMember = ({ teamRef }) => {
  const first = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <>
      <section
        id="team"
        ref={teamRef}
        className="pt-[106px] md:pt-[120px] pb-[101px] relative"
      >
        <Image
          data-aos="fade-left"
          className=" w-[153px] absolute right-[26px] bottom-0 hidden md:block z-0"
          width={153}
          height={149}
          src="/images/png/month-leaf-position-img.png"
          alt="leaf image"
        />
        <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <h2 className=" ff_AktivGrotesk_bold font-normal text-[32px] sm:text-[36px] text-[#061E10] leading-[38.46px] sm:leading-[43.27px] mb-0 text-center">
            Team Members
          </h2>
          <p className=" ff_poppins font-normal text-base text-[#516258] mb-0 mt-[15px] max-w-[594px] mx-auto text-center">
            Our project is fueled by a highly skilled and diverse team, united
            by a shared commitment to global standards of excellence.
          </p>

          <div className="relative">
            <div
              onClick={() => first.current.slickPrev()}
              className="top-[50%] translate-y-[-50%] -left-[5%] 2xl:left-[-6%] absolute group arrows cursor-pointer hidden xl:block border-none rounded-full"
            >
              <TeamSliderArrowIcon />
            </div>
            <div
              onClick={() => first.current.slickNext()}
              className="top-[50%] translate-y-[-50%] -right-[5%] 2xl:right-[-6%] absolute group arrows cursor-pointer hidden xl:block border-none rounded-full rotate-180"
            >
              <TeamSliderArrowIcon />
            </div>
            <div className="top-[50%] translate-y-[-50%] -right-[5%] 2xl:right-[-6%] absolute rotate-[180deg] group cursor-pointer hidden xl:block"></div>
            <Slider
              {...settings}
              ref={first}
              className="flex flex-wrap mt-[40px] sm:mx-[-10px] relative sm:max-w-fit  max-w-[270px] xsm:max-w-[400px] mx-auto"
            >
              {TeamMemberSliderdata.map((data, index) => {
                return (
                  <div className="w-full h-full flex px-[10px]" key={index}>
                    <div className="border border-[#E7E9E8] hover:outline-[#D2F958] hover:outline-[3px] hover:outline-offset-[-3px] hover:outline rounded-[10px] h-full w-full">
                      <div className="py-[22px]">
                        <div className="clip_path_team_slider flex justify-center overflow-hidden max-w-[94px] mx-auto h-[110px]">
                          <Image
                            className="w-full  object-cover"
                            width={96}
                            height={110}
                            src={data.img}
                            alt="team slider image 1"
                          />
                        </div>
                        <h2 className="ff_AktivGrotesk_bold font-normal text-[20px] text-[#061E10] text-center mb-0 mt-[12px] leading-[24.04px]">
                          {data.heading}
                        </h2>
                        <p className=" ff_poppins font-normal text-[14px] text-[#061E10] mb-0 mt-[2px] text-center uppercase">
                          {data.profession}
                        </p>
                        <div className="flex justify-center mt-2">
                          <ul className="list-disc text-[#061E10] opacity-70 ps-7 pe-2">
                            {data.info.map((value, index) => {
                              return (
                                <li className="ff_poppins font-normal text-sm sm:text-base text-[#061E10]">
                                  {value}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex justify-center gap-[8px] mt-[27px] xl:hidden">
              <div
                onClick={() => first.current.slickPrev()}
                className="group cursor-pointer"
              >
                <TeamSliderArrowIcon />
              </div>
              <div
                onClick={() => first.current.slickNext()}
                className="rotate-[180deg] group cursor-pointer"
              >
                <TeamSliderArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
