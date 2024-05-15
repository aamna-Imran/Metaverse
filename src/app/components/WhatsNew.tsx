"use client";
import { fadeIn, planetVariants, staggerContainer } from "@/config/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import { newFeatures } from "@/config";
import { NewFeatures } from "./NewFeatures";
import Image from "next/image";

function WhatsNew() {
  return (
    <section className="max-container padding-container py-10 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col lg:flex-row gap-10"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures
               key={feature.title} 
               {...feature} 
               />
            ))}
          </div>
        </motion.div>
        <motion.div
        className="lg:w-1/2 w-[90%]"
        variants={planetVariants('right')}
        >
            <Image
            src={"/whats-new.png"}
            alt="planet 2"
            width={1000}
            height={1000}
            className="w-[90%] h-[90%] object-contain"
            />

        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
