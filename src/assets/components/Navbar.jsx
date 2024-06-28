import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "../images/Logo.png";

const Navbar = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <nav className="bg-[#F40404] py-3 px-1">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={Logo} alt="logo" />
            </div>
            <div className="">
              <ul
                className={`lg:flex gap-x-[47px] items-center absolute top-0 right-[1000px] lg:static duration-700 ease-in-out ${ show == true ? "bg-[#F40404] w-fill px-5 py-2 top-[165px] right-[0px] text-center" : "bg-[#F40404] w-fill px-5 py-2 top-[165px] text-center" }`}
              >
                <li>
                  <a className="fonts-pops text-white font-semibold" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="fonts-pops text-white font-semibold" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="fonts-pops text-white font-semibold" href="#">
                    Service
                  </a>
                </li>
                <li>
                  <a className="fonts-pops text-white font-semibold" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="fonts-pops text-white font-semibold" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="fonts-pops text-white font-semibold border-2 border-[#fff] py-[13px] px-[31px] rounded inline-block"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden" onClick={() => setShow(!show)}>
              {show == true ? <RxCross2 /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
