import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='font-[Neue_Montreal] leading-[4.5vw] tracking-tight text-[4vw] text-black '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className="w-full flex gap-5 mt-20 pt-10 border-t-[1px] border-[#a2ba52] ">
                <div className="w-1/2 pt-10">
                    <h1 className='text-5xl '>Our Approach</h1>
                    <button className=' flex items-center gap-5 px-8 py-3 mt-10 bg-zinc-900 rounded-full text-white'>Read More <div className=' w-2 h-2 rounded-full bg-zinc-300'></div></button>
                </div>
                <div className="w-1/2 h-[70vh]  bg-[#b0c859] rounded-3xl"></div>
            </div>
        </div>
    )
}

export default About