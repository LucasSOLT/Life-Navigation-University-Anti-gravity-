"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedGlow } from "./ui/AnimatedGlow";

const steps = [
    {
        title: "Meet Personos",
        description: "AI-powered personality psychology that empowers every interaction, extends your reach, and elevates your impact to create lasting change."
    },
    {
        title: "Three Pathways to Impact",
        description: (
            <>
                Scalable implementation tiers designed for organizations of all sizes. Click{" "}
                <Link href="/pricing" className="text-blue-600 hover:underline">
                    here
                </Link>{" "}
                to see our generous pricing.
            </>
        )
    },
    {
        title: "For Marginalized Communities",
        description: "LNU serves BIPOC communities, LGBTQIA+ individuals, people experiencing homelessness, citizens returning from incarceration, people in recovery, those with disabilities, and anyone whose voice has been historically overlooked by traditional systems."
    },
    {
        title: "Partnered with ResultsLab",
        description: (
            <>
                ResultsLab helps our clients define the outcomes that matter the MOST and identify the data that brings those outcomes to life. Click{" "}
                <Link href="https://resultslab.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    here
                </Link>{" "}
                to learn more about our analytics and evaluations.
            </>
        )
    }
];

const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Feature illustration ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-contain p-4" // Reduced padding for larger image
                />
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-gray-800 w-3" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

const FeatureSteps = () => {
    return (
        <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center">
            <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-12 md:gap-24">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24"
                    >
                        {/* Text Column (Left) */}
                        <div className="w-full md:w-5/12 text-left">
                            <h3 className="text-3xl md:text-3xl font-medium text-gray-900 mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                                {step.description}
                            </p>
                        </div>

                        {/* Media Column (Right) */}
                        <div className="w-full md:w-6/12 flex justify-center md:justify-end">
                            {index === 0 ? (
                                // Custom Layout for "Meet Personos"
                                <div className="w-full aspect-square bg-gray-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-100">
                                    <AnimatedGlow /> {/** Dynamic Glow Background */}

                                    {/* Content (z-index to sit above glow) */}
                                    <div className="relative z-10 w-full h-full">
                                        {/* Back Paper (Overview) */}
                                        {/* Positioned towards top-right, tilted right */}
                                        <div className="absolute right-[10%] top-[10%] w-[65%] h-[80%] shadow-xl rounded-lg overflow-hidden transform rotate-6 border border-gray-200 bg-white transition-transform hover:scale-105 duration-500 origin-bottom-left">
                                            <img
                                                src="/dynamic report personal action overview.png"
                                                alt="Personos Action Overview"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>

                                        {/* Front Paper (Cover) - FOREMOST */}
                                        {/* Positioned towards bottom-left, tilted left */}
                                        <div className="absolute left-[10%] bottom-[10%] w-[65%] h-[80%] shadow-2xl rounded-lg overflow-hidden transform -rotate-3 border border-gray-200 bg-white transition-transform hover:scale-105 duration-500 origin-top-right">
                                            <img
                                                src="/Dynamic report relationship cover.png"
                                                alt="Personos Relationship Cover"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : index === 1 ? (
                                // Carousel for "Higher-level Abstractions"
                                <div className="w-full aspect-square bg-gray-50 rounded-3xl relative overflow-hidden ring-1 ring-gray-900/5">
                                    <AnimatedGlow /> {/** Dynamic Glow Background */}
                                    <div className="relative z-10 w-full h-full">
                                        <Carousel images={["/tier1-new.png", "/tier2-new.png", "/tier3-new.png"]} />
                                    </div>
                                </div>
                            ) : index === 2 ? (
                                // Video for "Marginalized Communities"
                                <div className="w-full aspect-square bg-gray-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-100/50">
                                    <AnimatedGlow /> {/** Dynamic Glow Background */}
                                    <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/20 relative group">
                                            {/* Background / Main Image */}
                                            <motion.img
                                                key="white-arms-v1"
                                                src="/white-background-arms.jpg?v=1"
                                                alt="Marginalized Communities"
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: "center center" }}
                                                animate={{
                                                    scale: [1, 1.05, 1], // Pulse scale
                                                    y: [0, -5, 0]        // Slight lift
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : index === 3 ? (
                                // Testimonials Infinite Scroll
                                <div className="w-full aspect-square bg-gray-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-blue-100/50">
                                    <AnimatedGlow /> {/** Dynamic Glow Background */}
                                    <div className="relative z-10 w-full h-full p-8 overflow-hidden">
                                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm bg-white/40 backdrop-blur-sm border border-white/20 relative">
                                            {/* Scroll Track */}
                                            <motion.div
                                                className="w-full flex flex-col"
                                                animate={{ y: ["-25%", "0%"] }} // Moves down from -25% (top of 2nd image?) to 0% (top of 1st image). 
                                                // Actually:
                                                // Track has 4 images. Height = 4H.
                                                // -25% = -H. 
                                                // Start: Top at -H. Viewport sees Img2.
                                                // End: Top at 0. Viewport sees Img1.
                                                // Content moves DOWN. 
                                                // Seamless loop if Img1 == Img2. Yes.
                                                transition={{
                                                    duration: 30,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            >
                                                {/* Multiple duplicate images for seamless loop and full coverage */}
                                                <img
                                                    src="/testimonials-scroll.png"
                                                    alt="Testimonials Scroll"
                                                    className="w-full h-auto object-contain"
                                                />
                                                <img
                                                    src="/testimonials-scroll.png"
                                                    alt="Testimonials Scroll"
                                                    className="w-full h-auto object-contain"
                                                />
                                                <img
                                                    src="/testimonials-scroll.png"
                                                    alt="Testimonials Scroll"
                                                    className="w-full h-auto object-contain"
                                                />
                                                <img
                                                    src="/testimonials-scroll.png"
                                                    alt="Testimonials Scroll"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Default Placeholder for other steps
                                <div className="w-full aspect-square bg-gray-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-blue-100/50">
                                    <AnimatedGlow /> {/** Dynamic Glow Background */}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))
                }
            </div >
        </section >
    );
};

export default FeatureSteps;
