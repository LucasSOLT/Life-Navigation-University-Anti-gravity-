"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
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
                    className="relative w-full max-w-[1100px] aspect-video overflow-hidden shadow-2xl bg-black border border-white/10 group cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                >
                    {/* Thumbnail Image */}
                    <img
                        src="https://img.youtube.com/vi/kiWrkwGscpc/maxresdefault.jpg"
                        alt="Video Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-lg">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                width="100%"

                                height="100%"
                                src="https://www.youtube.com/embed/kiWrkwGscpc?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Introduction;
