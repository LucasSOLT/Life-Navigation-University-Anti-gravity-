"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedGlow = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Soft Pastel Blue Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, -20, 0],
                    y: [0, -20, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            />

            {/* Soft Pastel Purple Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 30, 0],
                    y: [0, 30, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            />

            {/* Soft Pastel Orange/Yellow Blob (Warmth) */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 25, -25, 0],
                    y: [0, 25, -25, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            />

            {/* Soft Gray/White Overlay for Diffusion */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>
    );
};
