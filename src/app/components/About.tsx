"use client";
import { fadeIn, staggerContainer } from '@/config/motion';
import {motion} from 'framer-motion'
import { TypingText } from './CustomTexts';

function About() {
  return (
    <section className='relative max-container padding-container py-10 text-white '>
        <div className='gradient-02 z-0 '/>
        <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className=''
        >
        <TypingText title="| About Metaversus" textStyle="text-center"/>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-5 font-normal lg:text-[32px] sm:text-[26px] text-[20px] text-center text-white "
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it is really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Lets{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
        </motion.div>

    </section>
  )
}


export default About