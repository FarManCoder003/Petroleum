import Service1 from "../images/Services1.png";
import Service2 from "../images/Services2.png";
import Service3 from "../images/Services3.png";
import Slider from "../images/Slider IMG.png";
const Services = () => {
  return (
    <>
      <div className="">
        <img
          src={Slider}
          alt="slider"
          className="max-w-[100] w-full sm:mt-24 mt-3 mb-7"
        />
      </div>
      <div className=" max-w-container mx-auto">
        <div className="flex">
          <div className="  xl:pt-[64px]">
            <div className="font-pops text-[24px] lg:text-[64px] font-bold">
              Our Services
            </div>
            <div className="w-2/3 font-pops text-[8px] lg:text-[16px] font-medium ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className="relative">
            <img src={Service1} alt="Service1" className="" />
            <div className="absolute top-[97px] left-[45px] z-10">
              <div className="text-[30px] mb-5 font-bold font-pops text-white">
                Modern natural oil and gas refineries.
              </div>
              <div className="w-[162px] h-[51px] text-[16px] font-semibold font-pops text-white bg-[#F40404] text-center leading-[51px]">
                Learn More
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative">
            <img src={Service2} alt="Service2" className="" />
            <div className="absolute top-[97px] left-[45px] z-10">
              <div className="text-[30px] mb-5 font-bold font-pops text-white">
                Supply of national industries.
              </div>
              <div className="w-[162px] h-[51px] text-[16px] font-semibold font-pops text-white bg-[#F40404] text-center leading-[51px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={Service3} alt="Service3" className="" />
            <div className="absolute top-[97px] left-[45px] z-10">
              <div className="text-[30px] mb-5 font-bold font-pops text-white">
                National fuel distribution and supply.
              </div>
              <div className="w-[162px] h-[51px] text-[16px] font-semibold font-pops text-white bg-[#F40404] text-center leading-[51px]">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
