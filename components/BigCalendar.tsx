"use client";

import React from "react";
import { motion } from "framer-motion";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const MonthGrid = ({ month, year, startDay, daysInMonth, activeDates = [] }: { month: string, year: number, startDay: number, daysInMonth: number, activeDates?: number[] }) => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-baseline mb-8">
                <h3 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{month}</h3>
                <span className="text-xl md:text-2xl text-gray-300 font-light">{year}</span>
            </div>

            <div className="grid grid-cols-7 gap-4 mb-4">
                {days.map(day => (
                    <div key={day} className="text-xs font-bold text-gray-400 tracking-widest text-center">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-4">
                {/* Empty slots for start of month */}
                {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isActive = activeDates.includes(day);
                    return (
                        <div
                            key={day}
                            className={`aspect-square relative flex items-center justify-center rounded-2xl text-lg md:text-xl font-medium transition-all group
                                ${isActive
                                    ? "bg-black text-white shadow-lg scale-105"
                                    : "bg-white border border-gray-100 text-gray-700 hover:border-gray-300 hover:shadow-md"
                                }
                            `}
                        >
                            {day}
                            {/* Little indicator dot for "available" days that aren't selected, just for visual interest */}
                            {!isActive && day % 5 === 0 && (
                                <div className="absolute bottom-3 w-1 h-1 rounded-full bg-purple-400" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const BigCalendar = () => {
    return (
        <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-12 border-t border-black/5">
            <div className="container mx-auto max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
                >
                    {/* Month 1: February 2026 (Starts Sunday) */}
                    <MonthGrid
                        month="February"
                        year={2026}
                        startDay={0}
                        daysInMonth={28}
                        activeDates={[10, 15, 24]}
                    />

                    {/* Month 2: March 2026 (Starts Sunday) */}
                    <MonthGrid
                        month="March"
                        year={2026}
                        startDay={0}
                        daysInMonth={31}
                        activeDates={[5, 12, 20]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BigCalendar;
