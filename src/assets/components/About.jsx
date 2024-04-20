import { MdKeyboardArrowRight } from "react-icons/md";
import Aboutimg from "../images/About.png";
import Blog1 from "../images/Blog 1.png";
import Blog2 from "../images/Blog 2.png";
import Blog3 from "../images/Blog 3.png";
import Company from "../images/Company.png";
import Map from "../images/Maps.png";

const About = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] py-32">
        <div className="max-w-container mx-auto">
          <div className="relative">
            <img src={Aboutimg} alt="" className="max-w-[100] w-full" />
            <div className="absolute top-[120px] left-[124px] z-10">
              <div className="w-2/4 text-white font-pops font-bold text-[36px]">
                Learn more about our company
              </div>
            </div>
            <div className="absolute top-[175px] left-[804px]">
              <div className="w-[172px] h-[61px] text-[20px] font-semibold font-pops text-[#F40404] bg-white text-center leading-[61px]">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <img src={Company} alt="company" className="max-w-[100] w-full my-32" />
      </div>
      <div className="bg-[#F0F0F0]">
        <div className="max-w-container mx-auto py-28">
          <div className="flex justify-between">
            <div className="relative">
              <img src={Blog1} alt="" className="max-w-[100] w-full" />
              <div className="absolute top-[75px] left-[46px]">
                <div className="w-4/5 text-white font-bold text-[24px] font-pops mb-[48px]">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </div>
                <div className="w-[123px] h-[38px] text-[12px] font-semibold font-pops text-white text-center leading-[38px] bg-white/50">
                  Read More
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={Blog2} alt="" className="max-w-[100] w-full" />
              <div className="absolute top-[75px] left-[46px]">
                <div className="w-4/5 text-white font-bold text-[24px] font-pops mb-[48px]">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </div>
                <div className="w-[123px] h-[38px] text-[12px] font-semibold font-pops text-white text-center leading-[38px] bg-white/50">
                  Read More
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={Blog3} alt="" className="max-w-[100] w-full" />
              <div className="absolute top-[75px] left-[46px]">
                <div className="w-4/5 text-white font-bold text-[24px] font-pops mb-[48px]">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </div>
                <div className="w-[123px] h-[38px] text-[12px] font-semibold font-pops text-white text-center leading-[38px] bg-white/50">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[29px]">
            <div className="font-pops font-bold text-[16px] w-full text-end">
              MORE FROM THE BLOG
            </div>
            <MdKeyboardArrowRight className="text-[26px]" />
          </div>
        </div>
      </div>
      <img src={Map} alt="map" className="max-w-[100] w-full" />
    </>
  );
};

export default About;
