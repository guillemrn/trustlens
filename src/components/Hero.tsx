"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-b from-brand-500/30 via-accent-500/10 to-transparent blur-3xl rounded-full" />
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
                    Understand Terms of <br className="hidden md:block" /> Service in <span className="gradient-text">seconds</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-10"
                >
                    AI that reads Terms of Service for you and highlights the real risks before you click &ldquo;Accept&rdquo;.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group">
                        Get early access
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-foreground font-medium hover:bg-gray-50 transition-colors border shadow-sm flex items-center justify-center gap-2 group">
                        <PlayCircle className="w-5 h-5 text-accent-500" />
                        See how it works
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center justify-center gap-3 pt-8 border-t border-border/50 max-w-2xl mx-auto"
                >
                    <div className="flex -space-x-3 mb-1">
                        {/* Soft proxy logos/icons to represent platforms */}
                        <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white shadow-sm flex items-center justify-center z-40">
                            <span className="font-bold text-red-600 text-xs">N</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white shadow-sm flex items-center justify-center z-30">
                            <span className="font-bold text-orange-500 text-xs">A</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white shadow-sm flex items-center justify-center z-20">
                            <span className="font-bold text-green-500 text-xs text-center leading-none">Sp</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white shadow-sm flex items-center justify-center z-10">
                            <span className="font-bold text-blue-600 text-xs">f</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-brand-500" />
                        Works with policies from popular platforms like Netflix, Amazon, Spotify, and Facebook.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
