import React from "react";
import { Fragment, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaqIcon } from "../common/Icon";
import Image from "next/image";
import { FaqData } from "../common/Helper";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className=" pt-[93px] pb-[257px] bg-[url('/images/webp/faq-bg-img.webp')] bg-fixed bg-no-repeat bg-cover bg-center relative">
        <Image
          className=" absolute bottom-0 left-0 w-full h-[100px] object-cover object-top"
          width={1453}
          height={100}
          src="/images/png/footer_grassimg.png"
          alt="footer-grass"
        />
        <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0">
          <h2 className=" ff_AktivGrotesk_bold font-normal sm:text-[36px] text-[32px] text-white capitalize text-center mb-0">
            What to know{" "}
            <span className=" text-[#44B902]">more in detail?</span> FAQ
          </h2>
          <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-[31px]">
            <div className="lg:w-7/12">
              {FaqData.map((data, index) => {
                return (
                  <Accordion
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="border-b mt-[7px] sm:mt-4 faq_bg_color !rounded-[5px] min-h-[80px]"
                  >
                    <AccordionSummary
                      expandIcon={<FaqIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="my-1 items-baseline "
                    >
                      <Typography className="ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[93%]">
                        {data.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                     {data.faqanswer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              {/* <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="border-b mt-[7px] sm:mt-4 faq_bg_color !rounded-[5px] min-h-[80px]"
              >
                <AccordionSummary
                  expandIcon={<FaqIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="my-1 items-baseline "
                >
                  <Typography className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[506px]">
                    {" "}
                    Can CarbonFlow scale to meet our needs as our company grows
                    and our carbon credit validation needs increase?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                    Yes, CarbonFluxX is built to scale and can easily
                    accommodate the growth of your company and increased carbon
                    credit validation requirements without compromising speed or
                    accuracy.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className="border-b mt-[7px] sm:mt-4 faq_bg_color !rounded-[5px] min-h-[80px]"
              >
                <AccordionSummary
                  expandIcon={<FaqIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                  className="my-1 items-baseline "
                >
                  <Typography className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[547px]">
                    {" "}
                    How accurate are the carbon credit measurements provided by
                    CarbonFlow. and how do the compare to other methods in the
                    market?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                    CarbonFluxX utilizes advanced Satellite and Eddy Covariance
                    Machine Learning AI, ensuring the highest level of accuracy
                    and outperforming other methods in the industry.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                className="border-b mt-[7px] sm:mt-4 faq_bg_color !rounded-[5px] min-h-[80px]"
              >
                <AccordionSummary
                  expandIcon={<FaqIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                  className="my-1 items-baseline "
                >
                  <Typography className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[506px]">
                    {" "}
                    How quickly can CarbonFlow validate carbon credits?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                    CarbonFluxX provides 2 Days validation results,
                    significantly reducing the time required compared to other
                    methods which are around months.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                className="border-b mt-[7px] sm:mt-4 faq_bg_color !rounded-[5px] min-h-[80px]"
              >
                <AccordionSummary
                  expandIcon={<FaqIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                  className="my-1 items-baseline "
                >
                  <Typography className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[506px]">
                    {" "}
                    What is the pricing structure for CarbonFlow? Is it a
                    subscription service, a one-time fee, or based on usage?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                    CarbonFluxX operates on a subscription model, offering
                    flexibility and scalability based on your specific usage
                    requirements.
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
