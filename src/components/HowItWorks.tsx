"use client";

import { motion } from "framer-motion";
import { Globe, MousePointerClick, ShieldCheck } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: <Globe className="w-8 h-8 text-brand-600" />,
            title: "1. Visit any website",
            description: "Navigate to any site normally."
        },
        {
            icon: <MousePointerClick className="w-8 h-8 text-brand-600" />,
            title: "2. Click the extension",
            description: "Open the extension when you sign up or checkout."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
            title: "3. See the real risks",
            description: "Instantly view a simplified summary of the most important legal clauses."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white dark:bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 text-sm font-medium mb-6 border border-accent-100 dark:border-accent-500/20"
                    >
                        How it works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Three steps to clearer terms
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connecting line (visible on md+) */}
                    <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-muted border border-border/50 dark:border-border shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground max-w-[250px]">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
