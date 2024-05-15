"use client";

import { fadeIn } from "@/config/motion";
import { motion } from "framer-motion";
import Image from "next/image";

interface exploreI {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: any;
}

function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: exploreI) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
      className={`relative ${
        active == id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[150px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-y-hidden`}
    >
      <Image
        src={imgUrl}
        alt="world image"
        width={2000}
        height={2000}
        className="h-full w-fll object-cover rounded-2xl absolute"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full h-[80%] md:h-[50%] flex-col bg-[rgba(0,0,0,0.5)] rounded-b-2xl ">
          <div className="w-[60px] h-[60px] rounded-2xl glassmorphism mb-[16px] flex justify-center items-center">
            <Image
              src={"/headset.svg"}
              className="w-1/2 h-1/2 object-contain"
              alt="headset"
              width={100}
              height={100}
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[20px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}

export default ExploreCard;
