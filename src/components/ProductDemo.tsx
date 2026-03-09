"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, FileText, CheckCircle2, ChevronDown, Chrome } from "lucide-react";

export function ProductDemo() {
    return (
        <section className="py-24 bg-linear-to-b from-brand-50/50 to-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Content describing the demo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-100 text-accent-600 mb-6 shadow-sm border border-accent-200/50">
                            <Chrome className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-balance">
                            See the real risks. <br />
                            Before you click accept.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            Our AI scans thousands of words of legal text to highlight the clauses that matter most.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Flags hidden arbitration clauses",
                                "Detects aggressive data sharing",
                                "Warns about auto-renewals"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
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
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full max-w-[360px] rounded-[24px] border border-border bg-white shadow-2xl shadow-accent-900/10 overflow-hidden flex flex-col"
                        >
                            {/* Extension Header */}
                            <div className="bg-white border-b border-border px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-brand-600" />
                                    <span className="font-semibold text-sm">TrustLens</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                    <FileText className="w-3 h-3" /> Examply.com
                                    <ChevronDown className="w-3 h-3 ml-1" />
                                </div>
                            </div>

                            {/* Extension Body */}
                            <div className="p-5 bg-gray-50/30">
                                <div className="bg-white rounded-xl p-5 border border-border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] mb-5">
                                    <div className="flex items-end justify-between mb-2">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Trust Score</span>
                                        <span className="text-xs font-semibold text-warning-700 bg-warning-100 px-2 py-1 rounded-md border border-warning-200">Medium Risk</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-5xl font-bold tracking-tight text-foreground">63</span>
                                        <span className="text-muted-foreground font-medium">/100</span>
                                    </div>
                                    {/* Score bar */}
                                    <div className="h-2.5 w-full bg-gray-100 rounded-full mt-4 overflow-hidden flex">
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
                                    <h4 className="text-xs font-semibold mb-3 tracking-wide uppercase text-muted-foreground">Top risks detected</h4>
                                    <ul className="space-y-2.5">
                                        {[
                                            "Data shared with third-party partners",
                                            "Mandatory arbitration clause",
                                            "Automatic subscription renewal"
                                        ].map((risk, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                className="flex items-start gap-3 text-sm bg-danger-50 text-danger-900 border border-danger-100 p-3 rounded-xl"
                                            >
                                                <AlertTriangle className="w-4 h-4 text-danger-500 mt-0.5 shrink-0" />
                                                <span className="font-medium">{risk}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Extension Footer */}
                            <div className="bg-white border-t border-border p-3 flex justify-between items-center text-xs text-muted-foreground">
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

                </div>
            </div>
        </section>
    );
}
