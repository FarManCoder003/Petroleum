import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Top = () => {
  return (
    <>
      <header className="bg-[#282828] py-3 px-1">
        <div className="max-w-container mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-1/5 w-full">
              <div className="flex items-center justify-center lg:justify-start gap-x-2">
                <div className="text-white">
                  <MdOutlineEmail/>
                </div>
                <p className="font-pops text-white">
                  mail@yourcompany.com
                </p>
              </div>
            </div>
            <div className="lg:w-1/5 w-full">
              <div className="flex items-center justify-center lg:justify-start gap-x-2">
                <div className="text-white">
                  <IoCallSharp/>
                </div>
                <p className="font-pops text-white">
                  mail@yourcompany.com
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 lg:pt-0 pt-2 w-full">
              <div className="text-white flex lg:justify-end justify-center gap-x-4">
              <FaFacebookF/>
              <FaTwitter/>
              <FaLinkedinIn/>
              <FaInstagram/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Top;
