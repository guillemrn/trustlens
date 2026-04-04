"use client";
 
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {useTranslations} from 'next-intl';

export function Waitlist() {
    const t = useTranslations('Waitlist');
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [email, setEmail] = useState("");
 
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidEmail(email)) return;
 
        setStatus("submitting");
 
        try {
            const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;
            if (!webhookUrl) {
                throw new Error("Make.com webhook URL is not defined");
            }
 
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
 
            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                console.error("Failed to submit to waitlist");
                setStatus("idle");
            }
        } catch (error) {
            console.error("Error submitting to waitlist:", error);
            setStatus("idle");
        }
    };
 
    return (
        <section id="waitlist" className="py-24 border-t border-border bg-linear-to-b from-background to-muted/30">
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
                            className="bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 rounded-3xl p-8 py-12 flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mb-6 text-white">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{t('success_title')}</h2>
                            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                                {t('success_desc')}
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                {t('title')}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                                {t('description')}
                            </p>
 
                            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('placeholder')}
                                    className="w-full flex-1 px-6 py-4 rounded-full border border-border bg-white dark:bg-background placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                                    required
                                    disabled={status === "submitting"}
                                />
                                <button
                                    type="submit"
                                    disabled={status === "submitting" || (email.length > 0 && !isValidEmail(email))}
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {status === "submitting" ? t('button_submitting') : t('button_idle')}
                                    {status === "idle" && (
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </form>
                            <p className="text-xs text-muted-foreground mt-2 opacity-70">
                                {t('disclaimer')}
                            </p>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
