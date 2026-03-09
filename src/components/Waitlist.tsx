"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Waitlist() {
    return (
        <section className="py-24 border-t border-border bg-linear-to-b from-white to-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Stop guessing. Start knowing.
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Join the waitlist to be among the first to try TrustLens.
                    </p>

                    <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full flex-1 px-6 py-4 rounded-full border border-border bg-white placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
                        >
                            Get early access
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                    <p className="text-sm text-muted-foreground mt-4">
                        No spam, ever. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
