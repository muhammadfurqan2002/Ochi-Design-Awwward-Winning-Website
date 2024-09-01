import React from 'react'
import { motion } from 'framer-motion'
function Footer() {
    return (
        <motion.div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-full bg-zinc-900 px-20 py-20  flex gap-5'>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="heading">
                    <h1 className='text-[6vw] uppercase font-bold -mb-10'>Eye-</h1>
                    <h1 className='text-[6vw] uppercase font-bold   -mb-10'>Opening</h1>
                </div>
                <h1 className='text-3xl font-bold'>ochi</h1>
            </div>
            <div className="w-1/2 flex flex-col gap-8 " >

                <h1 className='text-[6vw] uppercase font-bold -mb-10'>Presentation</h1>

                <div className="mt-10">
                    <h4>S:</h4>
                    <div>
                        <a className='block underline text-xl font-light' href="">Facebook</a>
                        <a className='block underline text-xl font-light' href="">Instagram</a>
                        <a className='block underline text-xl font-light' href="">Twitter</a>
                        <a className='block underline text-xl font-light' href="">Whatsapp</a>
                        <a className='block  underline text-xl font-light' href="">Github</a>
                    </div>
                </div>
                <div className='flex items-start justify-between'>
                    <div>
                        <h4>L:</h4>
                        <div>
                            <a className='block underline text-xl font-light' href="">202-1965 W 4th Ave</a>
                            <a className='block underline text-xl font-light' href=""> Vancouver, Canada</a>
                            <br />
                            <a className='block underline text-xl font-light' href="">30 Chukarina St</a>
                            <a className='block underline text-xl font-light' href=""> Lviv, Ukraine</a>
                        </div>
                    </div>

                    <div>
                        <h4>M:</h4>
                        <div>
                        <a className='block underline text-xl font-light' href="">Home</a>
                        <a className='block underline text-xl font-light' href="">Services</a>
                        <a className='block underline text-xl font-light' href="">Our work</a>
                        <a className='block underline text-xl font-light' href="">About us</a>
                        <a className='block underline text-xl font-light' href="">Insights</a>
                        <a className='block underline text-xl font-light' href="">Contact us</a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Footer
