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
                <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                        {/* Sophisticated Outer Ring with Cardinal Points */}
                        <circle cx="12" cy="12" r="9" stroke="#cbd5e1" strokeWidth="1" />
                        <path d="M12 2v2m0 16v2M2 12h2m16 0h2" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

                        {/* Professional Split Needle */}
                        <path d="M12 5l2 7h-4l2-7z" fill="#7c3aed" /> {/* Purple North */}
                        <path d="M12 19l-2-7h4l-2 7z" fill="#3b82f6" /> {/* Blue South */}

                        {/* Modern Hub */}
                        <circle cx="12" cy="12" r="1.2" fill="white" />
                        <circle cx="12" cy="12" r="0.5" fill="#1e293b" />
                    </svg>
                </div>
                <span className="text-black font-bold text-sm tracking-tight text-nowrap">Life Navigation U</span>
            </div>

            {/* Center: Links (Absolutely Centered) */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                {["Product", "Use Cases", "Pricing", "Blog", "Resources"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-gray-500 hover:text-black text-[13px] font-semibold transition-all duration-300"
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
                className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-[#1a1a1a] transition-all shadow-md active:scale-95 cursor-pointer"
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
