"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "I used to just blindly click 'Accept'. TrustLens found an arbitration clause in a service I use daily that I had no idea about. Game changer.",
        author: "Sarah J.",
        role: "Early Access User",
        avatar: "S"
    },
    {
        quote: "As a freelance designer, I sign up for dozens of tools. Knowing exactly what data they collect before I commit gives me incredible peace of mind.",
        author: "David M.",
        role: "Digital Creator",
        avatar: "D"
    },
    {
        quote: "It's like having a privacy lawyer sitting on your shoulder while you browse. The Trust Score is brilliant and so easy to understand at a glance.",
        author: "Elena R.",
        role: "Privacy Advocate",
        avatar: "E"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50/50 dark:bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-6 border border-accent-100"
                    >
                        Wall of Love
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Don&apos;t just take our word for it
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="bg-white dark:bg-muted/50 p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-500/10 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold shrink-0 border border-brand-200 dark:border-brand-500/20">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
