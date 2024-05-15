"use client";
import { staggerContainer } from "@/config/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import { insights } from "@/config";
import InsightCard from "./InsightCard";

function Insights() {
  return (
    <section className="max-container padding-container py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyle="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyle="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard 
            key={`insight-${index}`} 
            {...item} 
            index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
