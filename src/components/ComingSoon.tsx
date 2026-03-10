"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, FileText, Lock } from "lucide-react";

export function ComingSoon() {
    const features = [
        {
            icon: <Activity className="w-5 h-5 text-accent-600" />,
            title: "Instant Trust Score",
            description: "Know immediately if a website is safe (Green) or risky (Red)."
        },
        {
            icon: <AlertTriangle className="w-5 h-5 text-warning-500" />,
            title: "Hidden Clause Alerts",
            description: "We flag arbitration clauses, data selling, and auto-renewals."
        },
        {
            icon: <FileText className="w-5 h-5 text-brand-600" />,
            title: "Plain English Summaries",
            description: "Goodbye legal jargon. Understand your rights in seconds."
        },
        {
            icon: <Lock className="w-5 h-5 text-blue-500" />,
            title: "Private",
            description: "Your browsing data never leaves your device. We only read the terms."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 text-sm font-medium mb-6 border border-accent-100 dark:border-accent-500/20"
                    >
                        Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Everything you need.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        We are building a comprehensive toolset to bring transparency to the internet.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.2 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center p-6 bg-gray-50 dark:bg-muted/50 rounded-2xl border border-border/50 dark:border-border group gap-4"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-background flex items-center justify-center border border-border/50 dark:border-border shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-foreground text-lg">{feature.title}</span>
                                <span className="text-muted-foreground text-sm leading-relaxed mt-1">
                                    {feature.description}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
