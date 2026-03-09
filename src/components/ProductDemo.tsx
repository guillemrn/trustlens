"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export function ProductDemo() {
    return (
        <section className="py-24 bg-brand-50/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="rounded-3xl border border-border bg-white shadow-xl shadow-brand-900/5 overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* Fake browser extension UI */}
                        <div className="w-full md:w-1/2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border bg-gray-50/50 flex flex-col justify-center">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-sm">
                                    <ShieldAlert className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">TrustLens Summary</h3>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                                        <FileText className="w-3 h-3" /> Examply.com Terms
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border shadow-sm mb-6">
                                <div className="flex items-end justify-between mb-2">
                                    <span className="text-sm font-medium text-muted-foreground">Trust Score</span>
                                    <span className="text-sm font-medium text-warning-500 bg-warning-50 px-2 py-0.5 rounded-md">Medium Risk</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold tracking-tight">63</span>
                                    <span className="text-muted-foreground">/ 100</span>
                                </div>
                                {/* Score bar */}
                                <div className="h-2 w-full bg-gray-100 rounded-full mt-4 overflow-hidden flex">
                                    <div className="h-full w-[63%] bg-warning-500 rounded-full" />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-3">Top Risks Found:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Data shared with third-party partners",
                                        "Mandatory binding arbitration clause",
                                        "Automatic subscription renewal"
                                    ].map((risk, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-start gap-3 text-sm bg-danger-50 text-danger-900 p-3 rounded-xl"
                                        >
                                            <AlertTriangle className="w-4 h-4 text-danger-500 mt-0.5 shrink-0" />
                                            <span>{risk}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Content describing the demo */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 mb-6">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight text-balance">
                                See the real risks. <br />
                                Before you click accept.
                            </h2>
                            <p className="text-muted-foreground mb-8 text-balance">
                                Our AI instantly scans through thousands of words of legalese to find the clauses that matter most to your privacy and wallet.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Flags hidden arbitration clauses",
                                    "Detects aggressive data sharing",
                                    "Warns about auto-renewals"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
