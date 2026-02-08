"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none"
                autoPlay
                muted
                playsInline
                onEnded={() => setIsVideoEnded(true)}
            >
                <source src="/hero-4k.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <AnimatePresence>
                    {isVideoEnded && (
                        <>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl md:text-8xl font-medium text-black tracking-[0.05em] text-center font-montserrat mt-[12vh] uppercase"
                            >
                                Life Navigation U
                            </motion.h1>

                            {/* Refined gap (counter-adjusted to keep tagline position fixed) */}
                            <div className="h-64 md:h-[33vh] w-full flex items-center justify-center">
                                {/* Clean negative space focus */}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center gap-12"
                            >
                                <p className="text-lg md:text-xl text-gray-400 font-sans tracking-[0.2em] uppercase text-center max-w-2xl px-6 leading-relaxed opacity-60">
                                    A new model for social empowerment
                                </p>

                                {/* Let us show you button (refined spacing) */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open("https://www.youtube.com/watch?v=cIoLX6GSIjo", "_blank")}
                                    className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-black/10 px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase text-black hover:bg-white/20 transition-all shadow-sm cursor-pointer"
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
        </section >
    );
};

export default Hero;
