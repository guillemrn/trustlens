"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function WhyItMatters() {
    return (
        <section className="py-24 bg-brand-950 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-24 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md"
                    >
                        <BookOpen className="w-8 h-8 text-brand-400" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance"
                    >
                        Terms of Service are broken. <br className="hidden md:block" />
                        <span className="text-brand-400">We&apos;re fixing them.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-8 text-left bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">The Problem</h3>
                            <p className="text-white/70 leading-relaxed">
                                The average privacy policy takes 18 minutes to read and is written in dense legal jargon. Nobody reads them, which means companies can bury risky clauses about your data and wallet without you knowing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">The Solution</h3>
                            <p className="text-white/70 leading-relaxed">
                                TrustLens translates complex legal language into simple, actionable insights. In seconds, you know exactly what you&apos;re agreeing to and whether you should trust the company with your information.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
