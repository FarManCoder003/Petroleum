import { MdKeyboardArrowRight } from "react-icons/md";
import Company from "../images/Company.png";
import Map from "../images/Maps.png";

const About = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] py-32">
        <div className="max-w-container mx-auto">
          <div className="bg-aboutimg bg-cover flex lg:pl-[120px] lg:py-[100px]">
            <div className="">
              <div className="w-2/4 text-white font-pops font-bold lg:text-[36px] ml-[20px]">
                Learn more about our company
              </div>
            </div>
            <div className="">
              <div className="lg:w-[172px] w-[100px] lg:h-[61px] lg:text-[20px] font-semibold font-pops text-[#F40404] bg-white text-center p-1 mt-[20px] lg:leading-[61px] lg:ml-[80px] lg:mt-[50px]">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <img
          src={Company}
          alt="company"
          className="max-w-[100] w-full lg:my-32 my-10"
        />
      </div>
      <div className="bg-[#F0F0F0]">
        <div className="max-w-container mx-auto lg:py-28 py-14">
          <div className="lg:flex justify-between">
            <div className="lg:w-[340px]">
              <div className="bg-blog1 bg-cover bg-no-repeat py-[50px] lg:pl-[50px] pl-[30px]">
                <div className="w-4/5 text-white font-bold text-[24px] font-pops mb-[48px]">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </div>
                <div className="w-[123px] h-[38px] text-[12px] font-semibold font-pops text-white text-center leading-[38px] bg-white/50">
                  Read More
                </div>
              </div>
            </div>
            <div className="lg:w-[340px]">
              <div className="bg-blog2 bg-cover bg-no-repeat py-[50px] lg:pl-[50px] pl-[30px]">
                <div className="w-4/5 text-white font-bold text-[24px] font-pops mb-[48px]">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </div>
                <div className="w-[123px] h-[38px] text-[12px] font-semibold font-pops text-white text-center leading-[38px] bg-white/50">
                  Read More
                </div>
              </div>
            </div>
            <div className="lg:w-[340px]">
              <div className="bg-blog3 bg-cover bg-no-repeat py-[50px] lg:pl-[50px] pl-[30px]">
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
