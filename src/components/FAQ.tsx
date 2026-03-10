"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Do you collect or sell my browsing data?",
        answer: "No. TrustLens is designed with privacy-first principles. The extension only reads the Terms of Service pages you visit, and we never collect, store, or sell your personal browsing history."
    },
    {
        question: "Is TrustLens free to use?",
        answer: "Yes, our core scanning and summarization features are entirely free during our Early Access phase. In the future, we may introduce advanced premium features, but basic transparency will always be accessible."
    },
    {
        question: "Which browsers does it support?",
        answer: "TrustLens is currently being built for Google Chrome (and other Chromium-based browsers like Brave, Edge, and Arc). We plan to add native support for Firefox and Safari shortly after launch."
    },
    {
        question: "How accurate is the AI scanner?",
        answer: "We use state-of-the-art AI models, combined with highly specialized legal prompts, to extract and flag common hidden clauses with high accuracy. However, TrustLens is designed to assist you in understanding complex terms quickly, not to replace formal legal advice."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-background" id="faq">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 text-sm font-medium mb-6 border border-brand-100 dark:border-brand-500/20"
                    >
                        Questions & Answers
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Frequently asked questions
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-border last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full py-6 text-left focus:outline-none group cursor-pointer"
                            >
                                <span className="font-semibold text-lg md:text-xl group-hover:text-brand-600 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="ml-4 shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center bg-gray-50 dark:bg-muted/50 group-hover:bg-brand-50 dark:group-hover:bg-brand-500/10 transition-colors">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-brand-600" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-muted-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400" />
                                    )}
                                </span>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="pb-6 text-muted-foreground leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
