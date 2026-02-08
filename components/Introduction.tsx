"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // speedAdjust: 
    // This defines the window of scroll where the animation happens. 
    // ["start end", "end start"] means itanimates from the moment it enters the bottom 
    // to the moment it leaves the top.
    // To make it faster, use ["start center", "center center"] etc.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // scale: [0.4, 1] means it starts smaller (40%) and expands to 100%.
    // borderRadius: ["120px", "40px"] for significantly more rounded corners.
    // Finishing at 0.6 means it completes when the video is fully in view (bottom of video enters viewport),
    // rather than waiting for the section top to hit the viewport top.
    const scale = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["120px", "40px"]);
    const y = useTransform(scrollYProgress, [0, 0.6], [0, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-auto flex flex-col items-center pt-12 pb-48 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #ffffff 0%, #ececec 100px, #ececec 100%)'
            }}
        >
            {/* Media Container (Expanding Element) */}
            <div className="sticky top-10 w-full flex justify-center px-4 md:px-0">
                <motion.div
                    style={{
                        scale,
                        borderRadius,
                        y,
                        opacity,
                        transformOrigin: "top center" // Keep top edge fixed while scaling
                    }}
                    className="relative w-full max-w-[1100px] aspect-video overflow-hidden shadow-2xl bg-black border border-white/10"
                >
                    {/* Rectangular Black Container Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative group flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Removed spacer entirely to pull next section up */}
        </section>
    );
};

export default Introduction;
