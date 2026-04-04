"use client";
 
import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, FileText, CheckCircle2, ChevronDown, Chrome, ChevronRight } from "lucide-react";
import { useState } from "react";
import {useTranslations} from 'next-intl';

function RiskItem({ risk, index }: { risk: { title: string; desc: string }, index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
 
    return (
        <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className={`flex flex-col gap-2 text-sm bg-danger-50 dark:bg-danger-500/10 text-danger-900 dark:text-danger-400 border ${isExpanded ? 'border-danger-300 dark:border-danger-500/30 shadow-sm' : 'border-danger-100 dark:border-danger-500/20 hover:border-danger-200 dark:hover:border-danger-500/40'} p-3 rounded-xl cursor-pointer transition-all duration-200`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-danger-500 mt-0.5 shrink-0" />
                <span className="font-medium flex-1">{risk.title}</span>
                <ChevronRight className={`w-4 h-4 text-danger-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-danger-800/80 dark:text-danger-500/80 ml-7 leading-relaxed"
                >
                    {risk.desc}
                </motion.div>
            )}
        </motion.li>
    );
}
 
export function ProductDemo() {
    const t = useTranslations('ProductDemo');

    return (
        <section className="py-24 bg-linear-to-b from-brand-50/50 dark:from-brand-950/10 to-white dark:to-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
 
                    {/* Content describing the demo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-100 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 mb-6 shadow-sm border border-accent-200/50 dark:border-accent-500/20">
                            <Chrome className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-balance">
                            {t.rich('title', {
                                br: () => <br />
                            })}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            {t('description')}
                        </p>
 
                        <ul className="space-y-4">
                            {[
                                t('feature_1'),
                                t('feature_2'),
                                t('feature_3')
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-brand-600" />
                                    </div>
                                    <span className="font-medium text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
 
                    {/* Fake browser extension UI */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full max-w-[360px] rounded-[24px] border border-border bg-white dark:bg-background shadow-2xl shadow-accent-900/10 dark:shadow-none overflow-hidden flex flex-col"
                        >
                            {/* Extension Header */}
                            <div className="bg-white dark:bg-background border-b border-border px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-brand-600" />
                                    <span className="font-semibold text-sm">TrustLens</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                    <FileText className="w-3 h-3" /> Examply.com
                                </div>
                            </div>
 
                            {/* Extension Body */}
                            <div className="p-5 bg-gray-50/30 dark:bg-muted/30">
                                <div className="bg-white dark:bg-background rounded-xl p-5 border border-border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] dark:shadow-none mb-5">
                                    <div className="flex items-end justify-between mb-2">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('ui.trust_score')}</span>
                                        <span className="text-xs font-semibold text-warning-700 dark:text-warning-400 bg-warning-100 dark:bg-warning-500/10 px-2 py-1 rounded-md border border-warning-200 dark:border-warning-500/20">{t('ui.risk_level')}</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-5xl font-bold tracking-tight text-foreground">63</span>
                                        <span className="text-muted-foreground font-medium">/100</span>
                                    </div>
                                    {/* Score bar */}
                                    <div className="h-2.5 w-full bg-gray-100 dark:bg-muted rounded-full mt-4 overflow-hidden flex">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "63%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-warning-500 rounded-full"
                                        />
                                    </div>
                                </div>
 
                                <div>
                                    <h4 className="text-xs font-semibold mb-3 tracking-wide uppercase text-muted-foreground">{t('ui.top_risks')}</h4>
                                    <ul className="space-y-2.5">
                                        {[
                                            {
                                                title: t('ui.risk_1_title'),
                                                desc: t('ui.risk_1_desc')
                                            },
                                            {
                                                title: t('ui.risk_2_title'),
                                                desc: t('ui.risk_2_desc')
                                            },
                                            {
                                                title: t('ui.risk_3_title'),
                                                desc: t('ui.risk_3_desc')
                                            }
                                        ].map((risk, i) => (
                                            <RiskItem key={i} risk={risk} index={i} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
 
                            {/* Extension Footer */}
                            <div className="bg-white dark:bg-background border-t border-border p-3 flex justify-between items-center text-xs text-muted-foreground">
                                <span>{t('ui.last_scanned')}</span>
                                <button
                                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                                    className="text-brand-600 font-medium hover:underline cursor-pointer"
                                >
                                    {t('ui.full_report')}
                                </button>
                            </div>
                        </motion.div>
                    </div>
 
                </div>
            </div>
        </section>
    );
}
