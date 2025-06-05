import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-full">
      <Image
        src={"/banner/background.jpg"}
        alt="Saifee Masjid"
        width={500}
        height={500}
        className="w-full !flex-1 object-cover no-repeat h-screen"
      />
      {/* <div className="bg-white/70 absolute inset-0 h-screen" /> */}
      <div className="absolute inset-0 max-h-screen flex flex-col xl:justify-center xl:items-center xl:mx-auto">
        
        <Image
          src={"/banner/Masjid.png"}
          alt="Saifee Masjid"
          width={500}
          height={500}
          className="w-96 h-[36rem] object-cover no-repeat absolute bottom-0 right-0"
        />

        <Image
          src={"/banner/ahlan.png"}
          alt="Saifee Masjid"
          width={500}
          height={500}
          className="w-full h-24 xl:h-96 object-contain no-repeat mt-4 xl:mt-0 hidden xl:flex"
        />
        <Image
          src={"/banner/ahlan.png"}
          alt="Saifee Masjid"
          width={500}
          height={500}
          className="w-full h-28 xl:h-96 object-contain no-repeat absolute !-left-14 !top-10 xl:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
