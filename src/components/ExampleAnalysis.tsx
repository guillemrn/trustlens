"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, ChevronRight } from "lucide-react";
import { useState } from "react";

function RiskItem({ risk, index }: { risk: { title: string; desc: string }, index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className={`flex flex-col gap-2 text-sm bg-warning-50 dark:bg-warning-500/10 text-warning-900 dark:text-warning-400 border ${isExpanded ? 'border-warning-300 dark:border-warning-500/30 shadow-sm' : 'border-warning-100 dark:border-warning-500/20 hover:border-warning-200 dark:hover:border-warning-500/40'} p-3 rounded-xl cursor-pointer transition-all duration-200`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-warning-500 mt-0.5 shrink-0" />
                <span className="font-medium flex-1">{risk.title}</span>
                <ChevronRight className={`w-4 h-4 text-warning-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-warning-800/80 dark:text-warning-500/80 ml-7 leading-relaxed"
                >
                    {risk.desc}
                </motion.div>
            )}
        </motion.li>
    );
}

export function ExampleAnalysis() {
    return (
        <section className="py-24 bg-brand-50/30 dark:bg-brand-950/10 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

                    {/* Example Card UI */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full max-w-[360px] rounded-[24px] border border-border bg-white dark:bg-background shadow-xl shadow-brand-900/5 dark:shadow-none overflow-hidden flex flex-col"
                        >
                            <div className="bg-white dark:bg-background border-b border-border p-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                                    M
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">MagicAI</h3>
                                    <p className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md mt-1 inline-block">Generic SaaS Analysis</p>
                                </div>
                            </div>

                            <div className="p-5 bg-gray-50/30 dark:bg-muted/30">
                                <div className="bg-white dark:bg-background rounded-xl p-5 border border-border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] dark:shadow-none mb-5">
                                    <div className="flex items-end justify-between mb-2">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Trust Score</span>
                                        <span className="text-xs font-semibold text-danger-700 dark:text-danger-400 bg-danger-100 dark:bg-danger-500/10 px-2 py-1 rounded-md border border-danger-200 dark:border-danger-500/20">High Risk</span>
                                    </div>

                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-5xl font-bold tracking-tight text-foreground">58</span>
                                        <span className="text-muted-foreground font-medium">/100</span>
                                    </div>

                                    {/* Score bar */}
                                    <div className="h-2.5 w-full bg-gray-100 dark:bg-muted rounded-full mt-4 overflow-hidden flex">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "58%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-danger-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-semibold mb-3 tracking-wide uppercase text-muted-foreground">Top concerns</h4>
                                    <ul className="space-y-2.5">
                                        {[
                                            {
                                                title: "Perpetual IP Rights",
                                                desc: "Platform demands perpetual and royalty-free rights to any content you generate or upload."
                                            },
                                            {
                                                title: "Hidden Auto-Renewal",
                                                desc: "Subsequent billing cycles trigger automatically with high barriers to cancellation."
                                            },
                                            {
                                                title: "Data Broker Sharing",
                                                desc: "Your personal identifiers are shared with third-party brokers for marketing purposes."
                                            }
                                        ].map((risk, i) => (
                                            <RiskItem key={i} risk={risk} index={i} />
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Extension Footer */}
                            <div className="bg-white dark:bg-background border-t border-border p-3 flex justify-between items-center text-xs text-muted-foreground">
                                <span>Last scanned: Just now</span>
                                <button
                                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                                    className="text-brand-600 font-medium hover:underline cursor-pointer"
                                >
                                    Full Report
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 mb-6 shadow-sm border border-brand-200 dark:border-brand-500/20">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-balance">
                            Shield your money and <br className="hidden lg:block" /> professional work.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            New AI tools and random SaaS often hide clauses that claim ownership of your work or lock you into expensive subscriptions. TrustLens surfaces these traps instantly.
                        </p>
                        <p className="text-muted-foreground text-balance border-l-2 border-brand-500 pl-4 py-1 italic">
                            &quot;We surface the risks, so you make informed choices without needing a law degree.&quot;
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
