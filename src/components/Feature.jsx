import { delay, motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap'

function Feature() {
    const [isHovering, setHovering] = useState(false)
    const cards=[useAnimation(),useAnimation()];
    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }
    return (
        <div className='w-full py-20 '>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='text-7xl font-[Neue Montreal] tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div onHoverEnd={()=>handleHoverEnd(0)} onHoverStart={()=>handleHover(0)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="cardContainer relative w-1/2 h-[80vh]">
                        <h1 className="absolute flex text-[#CDEA68] left-full text-6xl overflow-hidden leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                            {"FYDE".split('').map((item, index) => <motion.span initial={{y:"100%"}}transition={{ease:[0.22,1,0.36,1],delay:index*.01}}  animate={cards[0]}  className='inline-block '>{item}</motion.span>)}

                        </h1>

                        <div className=" w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverEnd={()=>handleHoverEnd(1)} onHoverStart={()=>handleHover(1)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="cardContainer relative w-1/2 h-[80vh] ">
                        <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full text-6xl leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                            {"VISE".split('').map((item, index) => <motion.span initial={{y:"100%"}}transition={{ease:[0.22,1,0.36,1],delay:index*.01}}  animate={cards[1]}  className='inline-block'>{item}</motion.span>)}

                        </h1>
                        <div className=" w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Feature
