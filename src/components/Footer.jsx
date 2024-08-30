import React from 'react'
import { motion } from 'framer-motion'
function Footer() {
    return (
        <motion.div   data-scroll data-scroll-section data-scroll-speed="1" className='w-full h-screen bg-zinc-900 px-20 py-20 flex gap-5'>
            <div className="w-1/2 h-full flex flex-col justify-between">
                <div className="heading">
                    <h1 className='text-[6vw] uppercase font-bold -mb-10'>Eye-</h1>
                    <h1 className='text-[6vw] uppercase font-bold   -mb-10'>Opening</h1>
                </div>
                <h1 className='text-3xl font-bold'>ochi</h1>
            </div>
            <div className="w-1/2">

                <h1 className='text-[4vw] uppercase font-bold -mb-10'>Presentation</h1>

                <div className="mt-10">
                    <a className='block text-xl font-light' href="">Facebook</a>
                    <a className='block text-xl font-light' href="">Instagram</a>
                    <a className='block text-xl font-light' href="">Twitter</a>
                    <a className='block text-xl font-light' href="">Whatsapp</a>
                    <a className='block text-xl font-light' href="">Github</a>
                </div>
            </div>

        </motion.div>
    )
}

export default Footer
