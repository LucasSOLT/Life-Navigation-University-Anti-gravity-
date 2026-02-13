"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [showIntro, setShowIntro] = useState(true);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
            {/* 1. Loop Video (Background - hidden until intro completes for a clean start) */}
            <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: showIntro ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none"
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
            >
                <source src="/loop_3.mp4" type="video/mp4" />
            </motion.video>

            {/* 2. Intro Video (Foreground - fades out with a 1-second lead) */}
            <AnimatePresence>
                {showIntro && (
                    <motion.video
                        key="intro-video"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }} // Slightly longer fade for premium feel
                        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none z-10"
                        autoPlay
                        muted
                        playsInline
                        onTimeUpdate={(e) => {
                            const video = e.currentTarget;
                            // Trigger transition 1 second before the heavy 4K video ends
                            if (video.duration > 0 && video.currentTime >= video.duration - 1) {
                                if (showIntro) {
                                    setIsVideoEnded(true); // Start the text reveal
                                    setShowIntro(false); // Start the cross-fade
                                }
                            }
                        }}
                        onEnded={() => {
                            // Fallback in case onTimeUpdate is skipped
                            setIsVideoEnded(true);
                            setShowIntro(false);
                        }}
                    >
                        <source src="/intro.mp4" type="video/mp4" />
                    </motion.video>
                )}
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <AnimatePresence>
                    {isVideoEnded && (
                        <>
                            {/* Text Reveal Animation Container */}
                            <div className="relative mt-[12vh] flex justify-center items-center">
                                <div className="relative inline-block">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5,
                                            ease: "easeOut",
                                        }}
                                        className="text-5xl md:text-8xl font-normal text-gray-700 tracking-[0.05em] text-center font-serif uppercase px-2"
                                    >
                                        Life Navigation U
                                    </motion.h1>
                                </div>
                            </div>

                            {/* Refined gap */}
                            <div className="h-64 md:h-[33vh] w-full flex items-center justify-center">
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center gap-12"
                            >
                                <p className="text-lg md:text-xl text-gray-700 font-serif font-bold tracking-[0.2em] uppercase text-center max-w-2xl px-6 leading-relaxed">
                                    A New Hope for the human spirit
                                </p>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open("https://www.youtube.com/watch?v=cIoLX6GSIjo", "_blank")}
                                    className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-black/10 px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase text-black hover:bg-white/20 transition-all shadow-sm cursor-pointer font-brand"
                                >
                                    <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[6px] border-l-black border-b-[3.5px] border-b-transparent ml-0.5"></div>
                                    </div>
                                    Let us show you
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;
