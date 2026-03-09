import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <ShieldAlert className="w-6 h-6 text-brand-600" />
                        <span className="font-bold text-xl tracking-tight text-brand-950">TrustLens</span>
                    </div>

                    <nav className="flex gap-6 sm:gap-8">
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-sm text-muted-foreground max-w-2xl text-balance">
                        Disclaimer: TrustLens provides automated summaries of public terms of service and privacy policies. Results are generated using AI and may not reflect the full legal meaning of the document.
                    </p>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                        &copy; {new Date().getFullYear()} TrustLens. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
