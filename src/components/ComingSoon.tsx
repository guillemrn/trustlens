"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Chrome, Sparkles, AlertTriangle, Database } from "lucide-react";

export function ComingSoon() {
    const features = [
        {
            icon: <Chrome className="w-5 h-5 text-accent-600" />,
            text: "Chrome browser extension"
        },
        {
            icon: <Sparkles className="w-5 h-5 text-brand-600" />,
            text: "AI-powered policy analysis"
        },
        {
            icon: <AlertTriangle className="w-5 h-5 text-warning-500" />,
            text: "Real-time risk detection"
        },
        {
            icon: <Database className="w-5 h-5 text-blue-500" />,
            text: "Growing database of analyzed policies"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-6 border border-accent-100"
                    >
                        Coming Soon
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
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex items-center p-6 bg-gray-50 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <span className="font-medium text-foreground text-lg">{feature.text}</span>
                            <div className="ml-auto">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 opacity-50" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
