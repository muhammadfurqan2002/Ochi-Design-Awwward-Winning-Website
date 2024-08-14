import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-green-900 rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 flex items-center overflow-hidden whitespace-nowrap border-b-2 border-zinc-300 pr-20">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:10}} className='text-[15vw] font-["Founders Grotesk"] font-bold pt-10 pb-10 leading-none uppercase '>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:10}} className='text-[15vw] font-["Founders Grotesk"] font-bold pt-10 pb-10 leading-none uppercase '>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marque