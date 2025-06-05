import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-full">
      <Image
        src={"/banner-home-2.png"}
        alt="Saifee Masjid"
        width={500}
        height={500}
        className="w-full !flex-1 object-cover no-repeat h-screen"
      />
      <div className="bg-white/70 absolute inset-0 h-screen" />
      <div className="absolute inset-0 max-h-screen w-fit flex flex-col justify-center items-center mx-auto">
        <Image
          src={"/ashara-tagline.png"}
          alt="Saifee Masjid"
          width={500}
          height={500}
          className="w-72 h-96 object-cover no-repeat"
        />

        <Image
          src={"/ahlan.png"}
          alt="Saifee Masjid"
          width={500}
          height={500}
          className="w-72 h-72 object-cover no-repeat"
        />
      </div>
    </div>
  );
};

export default Banner;
