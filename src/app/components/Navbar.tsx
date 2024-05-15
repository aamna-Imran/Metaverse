"use client";

import { navVariants } from '@/config/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='py-5 max-container padding-container'
    >
        <div className='gradient-01 w-[50%] h-36 lg:-left-20 -left-0 absolute top-0'/>
        <div className='flex justify-between items-center'>
            <Image
            src={"/search.svg"}
            alt='search'
            width={100}
            height={100}
            className='w-[24px]'
            />
                <h2 className='text-white lg:bold-20 bold-16'>METAVERSUS</h2>

            <Image
            src={"/menu.svg"}
            alt='search'
            width={100}
            height={100}
            className='w-[24px]'
            />
 </div>
    </motion.nav>
  )
}

export default Navbar