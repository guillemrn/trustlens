"use client";
 
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import {useTranslations} from 'next-intl';

export function FAQ() {
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: t('q1'),
            answer: t('a1')
        },
        {
            question: t('q2'),
            answer: t('a2')
        },
        {
            question: t('q3'),
            answer: t('a3')
        },
        {
            question: t('q4'),
            answer: t('a4')
        }
    ];

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
                        {t('badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        {t('title')}
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
