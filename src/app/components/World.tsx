"use client";
import { fadeIn, staggerContainer } from "@/config/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import Image from "next/image";

function World() {
  return (
    <section className="max-container padding-container py-10 ">
      <motion.div
        className=""
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| People on the World" textStyle="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyle="text-center"
        />
        <motion.div
        className="relative mt-[68px] flex w-full h-[550px]"
        variants={fadeIn('up', 'tween', 0.3, 1)}
        >
            <Image
            src={"/map.png"}
            alt="map"
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
            />

            <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] absolute top-10 left-24 border-4 border-gray-700 bg-[#5D6680] rounded-full ">
                <Image
                src={"/people-01.png"}
                alt="map"
                width={2000}
                height={2000}
                className="w-full h-full "
                />
            </div>
            <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] absolute top-[50%] left-[45%] border-4 border-gray-700 bg-[#5D6680] rounded-full ">
                <Image
                src={"/people-02.png"}
                alt="map"
                width={2000}
                height={2000}
                className="w-full h-full object-contain"
                />
            </div>
            <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] absolute top-36 right-20 border-4 border-gray-700 bg-[#5D6680] rounded-full ">
                <Image
                src={"/people-03.png"}
                alt="map"
                width={2000}
                height={2000}
                className="w-full h-full "
                />
            </div>

        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
