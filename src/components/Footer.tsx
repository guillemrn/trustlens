"use client";

import { ShieldAlert, X, Moon, Sun, Monitor } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cycleTheme = () => {
        if (theme === 'system') setTheme('dark');
        else if (theme === 'dark') setTheme('light');
        else setTheme('system');
    };

    return (
        <>
            <footer className="bg-white dark:bg-background border-t border-border pt-16 pb-8">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="w-6 h-6 text-brand-600 dark:text-white" />
                            <span className="font-bold text-xl tracking-tight text-brand-950 dark:text-white">TrustLens</span>
                        </div>

                        <nav className="flex items-center gap-6 sm:gap-8">
                            <button
                                onClick={() => setIsPrivacyOpen(true)}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            >
                                Our Honest Privacy
                            </button>
                            <a href="mailto:hola@guillermoml.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                Contact
                            </a>
                            {mounted && (
                                <button
                                    onClick={cycleTheme}
                                    className="p-2 -ml-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                                    aria-label="Toggle dark mode"
                                    title={`Current theme: ${theme}. Click to change.`}
                                >
                                    {theme === 'system' ? (
                                        <Monitor className="w-4 h-4" />
                                    ) : theme === 'dark' ? (
                                        <Sun className="w-4 h-4" />
                                    ) : (
                                        <Moon className="w-4 h-4" />
                                    )}
                                </button>
                            )}
                        </nav>
                    </div>

                    <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <p className="text-sm text-muted-foreground max-w-2xl text-balance">
                            Disclaimer: TrustLens provides automated summaries of public terms of service and privacy policies. Results are generated using AI and may not reflect the full legal meaning of the document.
                        </p>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                            &copy; 2026 TrustLens. All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {isPrivacyOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white dark:bg-background rounded-2xl shadow-xl dark:shadow-2xl dark:border dark:border-border w-full max-w-md overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-border">
                                <h3 className="font-semibold text-lg">Our Honest Privacy</h3>
                                <button
                                    onClick={() => setIsPrivacyOpen(false)}
                                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-muted transition-colors text-muted-foreground cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    We only collect your email to notify you of our launch. We use Supabase to store it securely. We will never sell it or track your browsing. That&apos;s it.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-muted/50 border-t border-border flex justify-end">
                                <button
                                    onClick={() => setIsPrivacyOpen(false)}
                                    className="px-4 py-2 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors cursor-pointer"
                                >
                                    Understood
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
