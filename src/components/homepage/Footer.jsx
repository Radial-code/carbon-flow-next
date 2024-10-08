import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FooterGmailIcon,
  FooterLindedInIcon,
  TelephoneIcon,
} from "../common/Icons";
import { useRouter } from "next/router";

const Footer = (props) => {
  // GET THE CURRENT YEAR FOR COPYRIGHT NOTICE
  const today = new Date();
  const year = today.getFullYear();
  // ROUTER FOR ROUTING
  const router = useRouter();
  // DEFINE A FUNCTION TO HANDLE ROUTE CHANGE AND SCROLLING
  const routeHandler = (value) => {
    if (router.pathname !== "/") {
      if (value === "team") {
        // CHANGE THE ROUTE AND SCROLL TO THE TEAM SECTION
        router.push("/?value=team");
        if (props.teamRef && props.teamRef.current) {
          props.teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Global") {
        // CHANGE THE ROUTE AND SCROLL TO THE GLOBAL WARMING SECTION
        router.push("/?value=global");
        if (props.globalwarmingRef && props.globalwarmingRef.current) {
          props.globalwarmingRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Work") {
        // CHANGE THE ROUTE AND SCROLL TO THE WORK SECTION
        router.push("/?value=work");
        if (props.workRef && props.workRef.current) {
          props.workRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (value === "Global") {
        // SCROLL TO THE GLOBAL WARMING SECTION
        if (props.globalwarmingRef && props.globalwarmingRef.current) {
          props.globalwarmingRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "team") {
        // SCROLL TO THE TEAM SECTION
        if (props.teamRef && props.teamRef.current) {
          props.teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Work") {
        // SCROLL TO THE WORK SECTION
        if (props.workRef && props.workRef.current) {
          props.workRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  return (
    <>
      <section
        className={`bg-[#235C02] bg-center relative mt-[-2px] ${props.topspace}`}
      >
        <div
          className={`flex flex-wrap justify-center translate-y-[-50%] ${props.hidden}`}
        >
          <div className="w-full max-w-[882px] bg-startjourneyFooter bg-no-repeat bg-cover bg-center py-[43px] md:py-[52px] rounded-[10px] px-[20px] mx-[21px] xl:px-[90px]">
            <h2 className="ff_AktivGrotesk_bold font-normal text-[32px] md:text-[40px] mb-0 text-white text-center max-w-[682px] mx-auto leading-[38.46px] md:leading-[48.08px]">
              Start Your Carbon neutral journey, save the world
            </h2>
            <div className="mt-[30px] flex justify-center">
              <Link
                href="mailto:contactus@carbonflow.earth"
                className="px-[24px] py-[8px] border group border-white ff_poppins font-semibold text-[16px] text-white rounded-full hover:bg-white hover:text-[#44B902] duration-200 hover:text-#44B902 leading-6 flex items-center gap-[23px] max-w-[273px]"
              >
                Start Measure!
                <span className="ff_poppins font-semibold text-[10px] text-white block leading-[18px] group-hover:text-[#44B902] opacity-70 after:contents-[''] after:absolute relative after:h-[18px] after:w-[1px] after-hover:bg-[#44B902] after:bg-[#ffffff] after:-left-3 after:top-1/2 after:-translate-y-1/2">
                  No CC Required
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 pb-[60px] sm:pb-[71px] z-10 relative mt-[-68px]">
          <div className="flex flex-col items-center justify-center">
            <Link href="/">
              <Image
                className=" w-[259px] lg:w-[454px] md:w-[350px]"
                width={454}
                height={75}
                src="/images/svg/footer-Logo.svg"
                alt="footer logo"
              />
            </Link>
            <ul className="flex gap-[20px] items-center justify-center flex-row flex-wrap duration-200 mt-[20px] px-[15px] min-[376px]:px-[50px] sm:px-0">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docsend.com/view/disswhssdh7ui5s7"
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] cursor-pointer"
                >
                  Global Warming is Real?
                </Link>
              </li>

              <li>
                <span
                  onClick={() => routeHandler("team")}
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] cursor-pointer"
                >
                  Team
                </span>
              </li>
              <li>
                <Link
                  href="mailto:workwithus@carbonflow.earth"
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] cursor-pointer"
                >
                  Work with us
                </Link>
              </li>
            </ul>

            <div className="flex pt-10 sm:pb-0 pb-5 gap-x-10 gap-y-5 sm:flex-row flex-wrap justify-start items-center">
              <Link
                className="group  flex justify-center items-center"
                href="mailto:contactus@carbonflow.earth"
              >
                <span className="social_links_shadow bg-[44B902] rounded-full">
                  <FooterGmailIcon />
                </span>
                <span className="text-[16px] text-white group-hover:opacity-100 opacity-70 ff_poppins font-normal ms-3 inline-block duration-200 hover:after:content-[''] after:absolute after:w-0 group-hover:after:w-full after:duration-200 after:h-[1px] after:bg-[white] relative after:left-0 after:bottom-[0px] after:rounded-[5px]">
                  contactus@carbonflow.earth
                </span>
              </Link>
              <Link
                className="group  flex justify-center items-center"
                href="tel:+66944142694"
              >
                <span className="social_links_shadow bg-[44B902] rounded-full">
                  <TelephoneIcon />
                </span>
                <span className="text-[16px] text-white group-hover:opacity-100 opacity-70 ff_poppins font-normal ms-3 inline-block duration-200 hover:after:content-[''] after:absolute after:w-0 group-hover:after:w-full after:duration-200 after:h-[1px] after:bg-[white] relative after:left-0 after:bottom-[0px] after:rounded-[5px]">
                  +66944142694
                </span>
              </Link>
              <Link
                aria-label="linkedin"
                className="group duration-200 social_links_shadow rounded-full w-[28.9px] h-[28.9px] flex justify-center items-center bg-[#44B902]"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterLindedInIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className=" border-t border-[#123200] z-10 relative">
          <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0">
            <div className="flex flex-col-reverse md:flex-row sm:justify-between items-center py-[21px]">
              <p className=" ff_poppins font-normal text-[15px] text-white mb-0 text-center sm:text-start mt-[27px] md:mt-0 pb-[10px] sm:pb-0 opacity-60">
                Copyright©{year} | All Rights Reserved
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  className="f_poppins font-normal text-[14] sm:text-[15px] text-white opacity-60 hover:opacity-100 mb-0 text-center sm:text-start cursor-pointer duration-200"
                  href="/disclaimer"
                >
                  Disclaimer
                </Link>
                <p className=" ff_poppins font-normal text-[14] sm:text-[15px] text-white opacity-60 mb-0 text-center sm:text-start cursor-pointer hover:opacity-100 duration-200">
                  |
                </p>
                <Link
                  className="f_poppins font-normal text-[14] sm:text-[15px] text-white opacity-60 mb-0 text-center sm:text-start cursor-pointer hover:opacity-100 duration-200"
                  href="/terms-conditions"
                >
                  Terms&nbsp;&&nbsp;Conditions
                </Link>
                <p className=" ff_poppins font-normal text-[14] sm:text-[15px] text-white opacity-60 mb-0 text-center sm:text-start cursor-pointer hover:opacity-100 duration-200">
                  |
                </p>
                <Link
                  href="/privacy-policy"
                  className=" ff_poppins font-normal text-[14] sm:text-[15px] text-white opacity-60 mb-0 text-center sm:text-start cursor-pointer hover:opacity-100 duration-200"
                >
                  Privacy&nbsp;&&nbsp;Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
