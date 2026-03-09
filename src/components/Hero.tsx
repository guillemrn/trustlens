"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-b from-brand-500/30 to-transparent blur-3xl rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8 border border-brand-100/50"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                    Introducing TrustLens
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6"
                >
                    Understand Terms of <br className="hidden md:block" /> Service in <span className="text-brand-600">seconds</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-10"
                >
                    TrustLens uses AI to analyze privacy policies and reveal the real risks before you click accept.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group">
                        Join the waitlist
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-foreground font-medium hover:bg-gray-50 transition-colors border shadow-sm flex items-center justify-center gap-2 group">
                        <PlayCircle className="w-5 h-5 text-brand-600" />
                        See how it works
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
