"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Calendar = () => {
    const classDates = [10, 15, 24];
    return (
        <div className="bg-[#f0f0f0] p-6 rounded-2xl border border-black/5 shadow-inner">
            <h3 className="text-xl font-bold text-black mb-6 flex justify-between items-center">
                February 2026
                <span className="text-sm font-normal text-gray-400">Class Schedule</span>
            </h3>
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-400 mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <div key={`${d}-${i}`}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }, (_, i) => i + 1).map(date => (
                    <div
                        key={date}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all
                            ${classDates.includes(date)
                                ? "bg-purple-600 text-white font-bold cursor-pointer hover:scale-105 shadow-md"
                                : "text-gray-600 hover:bg-white/40"}`}
                    >
                        {date}
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t border-black/5">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                    <p className="text-xs text-gray-500">LNU Basics: 10AM - 2PM</p>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 ml-5">Instructor: Dr. Stephen Huff</p>
            </div>
        </div>
    );
};

const ServiceItem = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Services = () => {
    const [isNA, setIsNA] = useState(false);

    const services = [
        {
            title: "AI Integration",
            description: "Automate complex workflows and enhance decision-making with custom AI agents tailored to your operational needs.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 16v.01" /><path d="M12 12v.01" /></svg>
        },
        {
            title: "Strategic Planning",
            description: "Data-driven roadmaps to navigate uncertain markets and scale your technology infrastructure effectively.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" /></svg>
        },
        {
            title: "Custom Development",
            description: "Full-stack engineering solutions built with modern frameworks to deliver robust, scalable applications.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#ececec] py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_7fr_2.5fr] gap-12 items-start">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.18, margin: "-100px 0px" }}
                        className="bg-[#f0f0f0] p-8 rounded-3xl border border-black/5 shadow-inner h-full"
                    >
                        <h3 className="text-2xl font-bold text-black mb-8 font-playfair">Work with us</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-white border border-black/5 outline-none focus:border-purple-600 transition-colors shadow-sm" />
                            <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-white border border-black/5 outline-none focus:border-purple-600 transition-colors shadow-sm" />
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Organization"
                                    className={`w-full p-4 rounded-xl bg-white border border-black/5 outline-none focus:border-purple-600 transition-colors shadow-sm ${isNA ? "opacity-30 pointer-events-none" : ""}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsNA(!isNA)}
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all
                                        ${isNA ? "bg-purple-600 text-white shadow-md" : "bg-gray-200 text-gray-400 hover:bg-gray-300"}`}
                                >
                                    N/A
                                </button>
                            </div>
                            <textarea
                                placeholder="Message..."
                                rows={4}
                                className="w-full p-4 rounded-xl bg-white border border-black/5 outline-none focus:border-purple-600 transition-colors resize-none shadow-sm"
                            />
                            <button className="w-full py-4 rounded-xl bg-black text-white font-bold tracking-widest uppercase text-xs hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                                Submit
                            </button>
                        </form>
                    </motion.div>

                    {/* Center Column: Services List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.18, margin: "-100px 0px" }}
                        className="flex flex-col gap-6"
                    >
                        <div className="text-center mb-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-2 font-playfair">
                                Our Services
                            </h2>
                            <p className="text-gray-500 italic">How we help our clients succeed</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            {services.map((service, index) => (
                                <ServiceItem key={index} {...service} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Calendar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.18, margin: "-100px 0px" }}
                    >
                        <Calendar />
                    </motion.div>
                </div>

                {/* Partners Footer Image Overlay */}
                <div className="mt-32 relative w-full h-64 -mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="absolute inset-x-0 bottom-0 z-10"
                    >
                        <div className="relative w-full h-64 max-w-[1200px] mx-auto opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="/certified-partners.jpeg"
                                alt="Certified Partners"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
