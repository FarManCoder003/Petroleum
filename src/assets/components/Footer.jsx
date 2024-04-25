import { GrMapLocation } from "react-icons/gr";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import certi1 from "../images/Cert1.png";
import certi2 from "../images/Cert2.png";
import Logo from "../images/Logo2.png";
import Social from "../images/Social Icon.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#F40404] py-11 px-3 border-b-[5px] border-[#FFB800]">
        <div className="max-w-container mx-auto flex justify-between">
          <div className="font-pops font-bold lg:text-[36px] text-white">
            Want to join as member branch in your area?
          </div>
          <div className="border-2 w-[142px] h-[51px] leading-[51px] text-center text-[16px] font-pops font-semibold text-white">
            CONTACT
          </div>
        </div>
      </div>
      <div className="bg-[#1F1F1F] lg:py-[149px] py-[50px]">
        <div className="max-w-container mx-auto">
          <div className="lg:flex  text-white font-pops">
            <div className="lg:w-1/2">
              <img src={Logo} alt="logo" />
              <div className="flex items-center gap-2  mt-8">
                <IoMailUnreadOutline />
                <div className="text-[14px]">mail@yourcompany.com</div>
              </div>
              <div className="flex items-center gap-2 my-4">
                <LuPhoneCall />
                <div className="text-[14px]">+896 120 5889 (Toll free)</div>
              </div>
              <div className="flex items-center gap-2">
                <GrMapLocation />
                <div className="text-[14px]">
                  101 Baker Street, New York, USA, 12345
                </div>
              </div>
              <img src={Social} alt="social" className="mt-[34px]" />
            </div>
            <div className="flex lg:w-1/2">
            <div className="lg:w-4/12 w-1/2">
              <div className="font-bold text-[16px] mb-[21px]">Company</div>
              <div className="text-[14px]">Home</div>
              <div className="text-[14px] my-4">About</div>
              <div className="text-[14px] my-4">Services</div>
              <div className="text-[14px] my-4">Gallery</div>
            </div>
            <div className="lg:w-4/12 w-1/2">
              <div className="font-bold text-[16px] mb-[21px]">Others</div>
              <div className="text-[14px]">Blog</div>
              <div className="text-[14px] my-4">Contact</div>
              <div className="text-[14px] my-4">Terms & Conditions</div>
              <div className="text-[14px] my-4">Privacy Policy</div>
            </div>
            <div className="lg:w-4/12">
              <div className="font-bold text-[16px] mb-[21px]">
                Certificates
              </div>
              <div className="lg:flex gap-1">
                <img src={certi1} alt="" className="max-w-100 w-full" />
                <img src={certi2} alt="" className="max-w-100 w-full" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] lg:py-[43px] py-5">
        <div className="max-w-container mx-auto">
          <div className="font-pops font-medium text-[#6C6C6C] lg:text-[16px] text-[12px]">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
