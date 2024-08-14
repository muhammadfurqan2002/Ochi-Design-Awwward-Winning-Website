import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth / 2
            let deltaY = y - window.innerHeight / 2
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle-180)
        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden '>
            <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">

                <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2">

                    <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
                        <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6 ">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
                        <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Eyes
