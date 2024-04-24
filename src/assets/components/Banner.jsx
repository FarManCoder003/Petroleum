const Banner = () => {
  return (
    <>
    <div className="">
        <div className="bg-banbg bg-no-repeat bg-cover">
        <h2
            className=" max-w-container mx-auto font-pops lg:px-0 px-3 font-bold text-[#fff] text-[30px] lg:text-left text-center lg:text-[64px] 
            lg:pt-[187px] 2xl:pt-[257px] pt-[20px] sm:pb-[180px] 2xl:pb-[320px] 2xl:text-[84px]"
          >
            We exist since 1975 on the <br /> oil and gas industry.
          </h2>
        </div>
        <div className="max-w-container mx-auto">
          <div className="flex">
            <div className="w-3/12 ">
              <div className="font-pops font-bold mt-[46px] sm:mt-[78px] md:text-[48px] text-[20px]">
                The biggest supplier on the country
              </div>
            </div>
            <div className="w-3/12 "></div>
            <div className="w-6/12 font-pops font-medium md:pt-[161px] pt-[61px] text-[10px] sm:text-[16px] text-[#6C6C6C]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
