"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
    >
        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-4 font-playfair">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            title: "Strategic Impact",
            description: "We help you identify the most critical levers for change in your organization or community.",
            icon: "🎯"
        },
        {
            title: "Data Driven",
            description: "Our approach is rooted in hard evidence and measurable outcomes to ensure lasting results.",
            icon: "📊"
        },
        {
            title: "Community First",
            description: "Every solution we build is designed with the local community at the very center.",
            icon: "🤝"
        },
        {
            title: "Ethical AI",
            description: "We leverage state-of-the-art AI while maintaining the highest standards of ethics and privacy.",
            icon: "🛡️"
        }
    ];

    return (
        <section className="w-full bg-[#ececec] py-24 px-4 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <p className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4">Our Core Pillars</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-black font-playfair mb-6">Built for Empowerment</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
