"use client";
import { slideIn, staggerContainer, textVariant } from "@/config/motion";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <section className='max-container  py-10 '>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        >
            <div className="padding-container flex flex-col items-center z-20 relative">
                <motion.h1 
                variants={textVariant(1.1)}
                className="lg:bold-90 sm:bold-64 bold-40 text-white">
                    METAVERSUS
                </motion.h1>
                <motion.div 
                variants={textVariant(1.2)} 
                className="flex items-center">
                    <h1  className="lg:bold-90 sm:bold-64 bold-40 text-white">MA</h1>
                    <div className='lg:w-[212px] sm:w-[80px] w-[60px] lg:h-[80px] sm:h-[48px] h-[30px] lg:border-[16px] sm:border-[9px] border-[5px] rounded-r-[50px] border-white sm:mx-2 mx-[6px] '/>
                    <h1  className="lg:bold-90 sm:bold-64 bold-40 text-white ">NESS</h1>
                </motion.div>
            </div>

            <motion.div 
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative md:-mt-6 mt-5 lg:pl-32 sm:pl-20 pl-14 ">
                <div className="hero-gradient w-[91%] absolute h-[300px] md:-top-6 -top-4 rounded-tl-[140px] z-0"/>
                <Image
                src={"/cover.png"}
                alt="cover image"
                width={1000}
                height={1000} 
                className="z-10 relative w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px]"
                />
                <Link href="#explore">
                    <div  className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[50px] relative z-50">
                        <Image
                        src={"/stamp.png"}
                        alt="stamp button"
                        width={500}
                        height={500}
                        className="w-[100px] h-[100px] sm:w-[155px] sm:h-[155px] object-contain"
                        />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero