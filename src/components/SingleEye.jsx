import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const SingleEye = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        // GSAP animation for scroll-triggered movement
        gsap.fromTo(
            ".box1, .box2",
            { y: 120 },
            {
                y: -220, // Move up when scrolling down
                scrollTrigger: {
                    trigger: "#eyes",
                    scroller: "body",
                    start: "top bottom", // Start when the top of #eyes reaches the bottom of the viewport
                    end: "bottom top",   // End when the bottom of #eyes reaches the top of the viewport
                    scrub: true,         // Smooth scrubbing to follow the scroll
                },
            }
        );

        // Mousemove event listener for rotating the eye
        const handleMouseMove = (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth / 2;
            let deltaY = y - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-[70%] left-1/2" id="eyes">
            <div className="box1 w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
                <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full">
                    <div
                        style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                        className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
                    >
                        <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="box2 w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
                <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full">
                    <div
                        style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                        className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
                    >
                        <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEye;
