"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Meet Personos",
        description: "AI-powered personality psychology that empowers every interaction, extends your reach, and elevates your impact to create lasting change."
    },
    {
        title: "Higher-level Abstractions",
        description: "A more intuitive task-based approach to monitoring agent activity, presenting you with essential artifacts and verification results to build trust."
    },
    {
        title: "Cross-surface Agents",
        description: "Synchronized agentic control across your editor, terminal, and browser for powerful development workflows."
    },
    {
        title: "Context-Aware Intelligence",
        description: "Deep understanding of your codebase structure and dependencies, enabling smarter code generation and bug detection."
    }
];

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
                                <div className="w-full aspect-square bg-[#FAFAFA] rounded-3xl relative overflow-hidden flex items-center justify-center border border-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 opacity-50"></div>

                                    {/* Back Paper (Overview) */}
                                    {/* Positioned towards top-right, tilted right */}
                                    <div className="absolute right-[10%] top-[10%] w-[65%] h-[80%] shadow-xl rounded-lg overflow-hidden transform rotate-6 border border-gray-200 z-10 bg-white transition-transform hover:scale-105 duration-500 origin-bottom-left">
                                        <img
                                            src="/dynamic report personal action overview.png"
                                            alt="Personos Action Overview"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    {/* Front Paper (Cover) - FOREMOST */}
                                    {/* Positioned towards bottom-left, tilted left */}
                                    <div className="absolute left-[10%] bottom-[10%] w-[65%] h-[80%] shadow-2xl rounded-lg overflow-hidden transform -rotate-3 border border-gray-200 z-30 bg-white transition-transform hover:scale-105 duration-500 origin-top-right">
                                        <img
                                            src="/Dynamic report relationship cover.png"
                                            alt="Personos Relationship Cover"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            ) : (
                                // Default Placeholder for other steps
                                <div className="w-full aspect-square bg-blue-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-blue-100/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white/50 opacity-50"></div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSteps;
