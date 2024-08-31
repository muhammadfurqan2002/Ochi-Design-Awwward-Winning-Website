import React,{ useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SingleEye from './SingleEye';


function ReadyProject() {
   
    return (
        <div  data-scroll data-scroll-section data-scroll-speed=".5" className='w-full  bg-[#CDEA68] relative' id='Ready'>
            <div    className='eyes  flex flex-col justify-center items-center text-center gap-40 py-20'>
                <div className='text-[150px] font-bold leading-none'>
                    <h1>READY</h1>
                    <h1>TO START</h1>
                    <h1>THE PROJECT?</h1>
                </div>
                <div  className='z-50 flex flex-col items-center gap-3'>
                    <div className='flex items-center gap-4 bg-black rounded-full px-4 py-2'>
                        <h4>START THE PROJECT</h4>
                        <span className='p-1 bg-white rounded-full'></span>
                    </div>
                    <h1>OR</h1>
                    <div className='flex items-center gap-4 border-[1px] border-white hover:bg-black rounded-full px-4 py-2'>
                        <h4>START THE PROJECT</h4>

                        <span className='p-1 bg-white rounded-full'></span>
                    </div>
                </div>
            </div>

            <SingleEye/>
        </div>
    )
}

export default ReadyProject
