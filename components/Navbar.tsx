"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10"
        >
            {/* Left: Brand */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center">
                    <motion.img
                        src="/LNU Logo 3.png"
                        alt="LNU Logo"
                        className="w-full h-full object-contain drop-shadow-sm cursor-pointer"
                        whileHover={{
                            rotate: 1800,
                            transition: { duration: 2, ease: "easeOut" }
                        }}
                    />
                </div>
                <span className="text-black font-bold text-sm tracking-tight text-nowrap font-brand">Life Navigation U</span>
            </div>

            {/* Center: Links (Absolutely Centered) */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                {["Product", "Use Cases", "Pricing", "Blog", "Resources"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-gray-500 hover:text-black text-[13px] font-semibold transition-all duration-300 font-brand"
                    >
                        {item}
                        {(item === "Use Cases" || item === "Resources") && (
                            <span className="ml-1 text-[9px] opacity-40">▼</span>
                        )}
                    </a>
                ))}
            </div>

            {/* Right: Download Button */}
            <button
                onClick={() => window.open("https://classroom.google.com/", "_blank")}
                className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-[#1a1a1a] transition-all shadow-md active:scale-95 cursor-pointer font-brand"
            >
                <span className="hidden md:inline">Download</span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>GClassroom</span>
            </button>
        </motion.nav>
    );
};

export default Navbar;
