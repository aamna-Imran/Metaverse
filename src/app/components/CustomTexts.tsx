import { textContainer, textVariant2 } from "@/config/motion";
import { motion } from "framer-motion";
import React from "react";

interface TypingTextProps {
    title: string;
    textStyle?: string
  }
interface TitleTextProps {
    title: React.ReactNode;
    textStyle?: string
  }

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyle}) => (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-gray-200 ${textStyle}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );

  export const TitleText: React.FC<TitleTextProps> = ({ title, textStyle}) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`my-[8px] font-bold md:text-[52px] text-[34px] text-white ${textStyle}`}
    >
      {title}
    </motion.h2>
  );