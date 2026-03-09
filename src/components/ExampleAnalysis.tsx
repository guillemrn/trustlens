"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export function ExampleAnalysis() {
    return (
        <section className="py-24 bg-brand-50/30 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

                    {/* Example Card UI */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full max-w-[400px] rounded-[24px] border border-border bg-white shadow-xl shadow-brand-900/5 p-6 md:p-8"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                                    N
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Netflix</h3>
                                    <p className="text-sm text-muted-foreground">Privacy Policy Analysis</p>
                                </div>
                            </div>

                            <div className="flex items-end justify-between mb-2">
                                <span className="text-sm font-semibold text-muted-foreground">Trust Score</span>
                                <span className="text-sm font-semibold text-danger-700 bg-danger-50 px-2 py-0.5 rounded-md border border-danger-200">High Risk</span>
                            </div>

                            <div className="flex items-baseline gap-1 mt-1 mb-5">
                                <span className="text-4xl font-bold tracking-tight text-foreground">58</span>
                                <span className="text-muted-foreground font-medium">/ 100</span>
                            </div>

                            <h4 className="text-sm font-semibold mb-3 tracking-wide uppercase text-muted-foreground">Top concerns</h4>
                            <ul className="space-y-3">
                                {[
                                    "Extensive data tracking",
                                    "Data sharing with partners",
                                    "Binding arbitration clause"
                                ].map((concern, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-start gap-3 text-sm text-foreground bg-gray-50 p-3 rounded-xl border border-border/50"
                                    >
                                        <AlertTriangle className="w-4 h-4 text-warning-500 mt-0.5 shrink-0" />
                                        <span className="font-medium">{concern}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 mb-6 shadow-sm border border-brand-200">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-balance">
                            Know exactly what you<br className="hidden lg:block" /> are agreeing to.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            Even popular services have clauses that compromise your privacy or waive your legal rights. TrustLens brings these hidden terms to the surface.
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
