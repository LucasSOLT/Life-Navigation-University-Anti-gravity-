"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Company",
            links: [
                { name: "About", href: "#" },
                { name: "Contact", href: "#" },
                { name: "MyTaj LLC", href: "#" },
            ]
        },
        {
            title: "Ecosystem",
            links: [
                { name: "Services", href: "#" },
                { name: "Analytics", href: "#" },
                { name: "SOLTheory Products", href: "#" },
            ]
        },
        {
            title: "Partnerships",
            links: [
                { name: "Certified Partners", href: "#" },
            ]
        }
    ];

    return (
        <footer className="relative z-20 w-full bg-[#ececec] pt-12 pb-12 border-t border-black/5">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-playfair font-bold text-black mb-4">Life Navigation U</h2>
                        <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-xs">
                            Elevating human potential through cognitive science and AI-driven coaching.
                        </p>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section, idx) => (
                        <div key={idx} className="flex flex-col space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-black transition-colors font-sans"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/5 flex flex-col md:row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors font-sans font-bold">Privacy Policy</a>
                        <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors font-sans font-bold">Legal</a>
                    </div>
                    <p className="text-[10px] text-gray-400 font-sans uppercase tracking-[0.2em] font-medium">
                        © {currentYear} MyTaj LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
