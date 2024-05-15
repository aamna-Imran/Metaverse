"use client";
import { fadeIn, planetVariants, staggerContainer } from '@/config/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TitleText, TypingText } from './CustomTexts';
import { startingFeatures } from '@/config';
import StartSteps from './StartSteps';

function GetStarted() {
  return (
    <section className='max-container padding-container py-10'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount:0.25}}
        className='mx-auto flex lg:flex-row flex-col gap-5 justify-center items-center'
        >
            <motion.div
            className='lg:w-1/2 w-[80%]'
            variants={planetVariants('left')}
            >
                <Image
                src={"/get-started.png"}
                alt='planet 1'
                width={1000}
                height={1000}
                className='lg:w-[90%] lg:h-[90%]  object-contain'
                />
            </motion.div> 
            <motion.div
            className='flex-[0.75] flex justify-center flex-col'
            variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <TypingText title='| How Metaversus Works'/>
                <TitleText title={<>Get started with just a few clicks</>}/>

                <div className='"mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                    {startingFeatures.map((feature, index)=>(
                        <StartSteps
                        key={feature}
                        number={ `${index < 10 ? "0" : ''} ${index + 1}`}
                        text={feature}
                        />
                    ))}
                </div>
            </motion.div>

        </motion.div>
    </section>
  )
}

export default GetStarted