"use client";

import { motion } from "framer-motion";
import { Globe, MousePointerClick, ShieldCheck } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: <Globe className="w-8 h-8 text-brand-600" />,
            title: "1. Visit any website",
            description: "Navigate to any site as you normally would. TrustLens works silently in the background."
        },
        {
            icon: <MousePointerClick className="w-8 h-8 text-brand-600" />,
            title: "2. Click the extension",
            description: "When you reach a sign-up or checkout page, click the TrustLens icon in your browser."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
            title: "3. See privacy risks",
            description: "Instantly view a digestible summary of the exact risks hidden in the Terms of Service."
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6"
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
                            <div className="w-24 h-24 rounded-3xl bg-white border shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
