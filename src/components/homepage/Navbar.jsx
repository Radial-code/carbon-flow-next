import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CrossIcon, MenuIcon } from "../common/Icon";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0); // Initialize scrollPosition state
  // const [isVisible, setIsVisible] = useState(true); // Initialize isVisible state

  // useEffect(() => {
  //   let prevScrollPos = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setScrollPosition(currentScrollPos);
  //     const isVisible = prevScrollPos > currentScrollPos;
  //     setIsVisible(isVisible);
  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (showNav) {
      document.body.classList.add("!overflow-hidden");
    } else {
      document.body.classList.remove("!overflow-hidden");
    }
  }, [showNav]);

  return (
    <div className="relative">
      <div
        className={`bg-[#0D2517] z-[100] w-full  black fixed top-0  flex justify-between right-0 duration-200 ${
          scrollPosition > 80 ? "top-0" : "top-[-100px]"
        }`}
      >
        <div className="w-full flex justify-between items-center md:py-[14px] py-[23px] md:px-10 px-5 xl:px-20">
          <div className="flex items-center hover_bounce">
            <Link className="relative z-50" href="/">
              <Image
                className="max-w-[130px] xs:max-w-[160px] 2xl:max-w-[202px]"
                src="/images/svg/Logo.svg"
                width={202}
                height={34}
                alt="logo image"
              />
            </Link>
            <Link className="ms-4" href="/">
              <Image
                className="max-w-[100px] sm:max-w-[140px]"
                height={100}
                width={250}
                src="/images/JGR_logo.svg"
                alt="JGR_logo"
              />
            </Link>
          </div>
          <ul
            className={`flex xl:gap-[20px] gap-[20px] items-center xl:static fixed top-0 xl:min-h-fit min-h-screen w-full xl:w-auto xl:bg-transparent bg-[#0D2517] justify-center xl:flex-row flex-col duration-200 ${
              showNav ? "left-0" : " -left-full"
            }`}
          >
            <li>
              <a
                onClick={() => {
                  setShowNav(false);
                }}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
                href="#globalwarming"
              >
                Global Warming is Real?
              </a>
            </li>
            {/* <li>
              <a
                onClick={() => {
                  setShowNav(false);
                }}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
                href="#pitchingdeck"
              >
                Pitching Deck
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowNav(false);
                }}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
                href="#investor"
              >
                Investor
              </a>
            </li> */}
            <li>
              <a
                onClick={() => {
                  setShowNav(false);
                }}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
                href="#team"
              >
                Team
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowNav(false);
                }}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
                href="#workwithus"
              >
                Work with us
              </a>
            </li>
            <li className="xl:ps-5 my-[14px]">
              <a
                href="mailto:contactus@carbonflow.earth"
                className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full hover:bg-[#44B902] duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="xl:hidden block relative z-50 cursor-pointer"
          >
            {showNav ? <CrossIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className="flex bg-[#061E10] xl:justify-end justify-between items-center w-full py-[23px] xl:pe-20 md:px-10 px-5">
        <div className="xl:absolute z-[2] -left-[40px] 3xl:-left-[38px] xl:top-44 xl:-rotate-90 xl:translate-y-full cursor-pointer">
          <Link href="/">
            <Image
              className="max-w-[202px] hover_bounce"
              src="/images/svg/Logo.svg"
              width={202}
              height={34}
              alt="logo image"
            />
          </Link>
        </div>
        <ul className="xl:flex xl:gap-[33px] gap-[20px] items-center hidden min-w-[840px]">
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#globalwarming"
            >
              Global Warming is Real?
            </a>
          </li>
          {/* <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#pitchingdeck"
            >
              Pitching Deck
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#investor"
            >
              Investor
            </a>
          </li> */}
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#team"
            >
              Team
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#workwithus"
            >
              Work with us
            </a>
          </li>
          <li className="lg:ps-5 my-[8px]">
            <a
              href="mailto:contactus@carbonflow.earth"
              className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full hover:bg-[#44B902] duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="xl:hidden block relative z-[100] cursor-pointer"
        >
          {showNav ? <CrossIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
