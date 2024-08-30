import React from 'react'
import { motion } from 'framer-motion'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0" className='overflow-hidden w-full h-screen bg-zinc-100 flex items-center gap-5 px-32'>

            <div className=" relative cardContainer  h-[50vh] w-1/2">
                <div className="card w-full rounded-xl h-full flex justify-center items-center bg-[#004D43]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
                    <button className='absolute left-10 bottom-10 rounded-full border-2 px-3 py-1'>copywrite</button>
                </div>
            </div>

            <div className="cardContainer  flex gap-5 h-[50vh]  w-1/2">
                <div className="card flex justify-center items-center relative w-1/2 rounded-xl h-full bg-[#004D43]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
                    <button className='absolute left-10 bottom-10 rounded-full border-2 px-3 py-1'>copywrite</button>

                </div>
                <div className="card flex justify-center items-center relative w-1/2 h-full rounded-xl bg-[#85c6be]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
                    <button className='absolute left-10 bottom-10 rounded-full border-2 px-3 py-1'>copywrite</button>

                </div>
            </div>

        </div>
    )
}

export default Cards
