"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Waitlist() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
    };

    return (
        <section id="waitlist" className="py-24 border-t border-border bg-linear-to-b from-white to-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-brand-50 border border-brand-100 rounded-3xl p-8 py-12 flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mb-6 text-white">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">You&apos;re on the list!</h2>
                            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                                Thank you for your interest. We&apos;ll notify you as soon as TrustLens is ready for early access.
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Stop guessing. Start knowing.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                                Join the waitlist to be among the first to try TrustLens.
                            </p>

                            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full flex-1 px-6 py-4 rounded-full border border-border bg-white placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                                    required
                                    disabled={status === "submitting"}
                                />
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-70"
                                >
                                    {status === "submitting" ? "Joining..." : "Get early access"}
                                    {status === "idle" && (
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </form>
                            <p className="text-sm text-muted-foreground mt-4">
                                No spam, ever. Unsubscribe at any time.
                            </p>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
