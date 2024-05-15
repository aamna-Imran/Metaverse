"use client"
import { motion } from "framer-motion"
import { TitleText, TypingText } from "./CustomTexts"
import { staggerContainer } from "@/config/motion"
import { exploreWorlds } from "@/config"
import ExploreCard from "./ExploreCard"
import { useState } from "react"

function Explore() {

  const [active, setActive] = useState("world-2")

  return (
    <section className="max-container padding-container py-10 mt-28">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      
      >
        <TypingText title="| The World" textStyle="text-center"/>
        <TitleText title={<>Choose the world you want  <br className="hidden md:block"/> to explore</>} textStyle="text-center"/>

        <div className="flex mt-10 lg:flex-row flex-col gap-5 min-h-[70vh] ">
          {exploreWorlds.map((world, index)=>(
            <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore