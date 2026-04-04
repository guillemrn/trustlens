"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- pathname is compatible
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 p-1 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-border shadow-lg">
        <div className="pl-3 pr-1 text-muted-foreground">
          <Globe className="w-4 h-4" />
        </div>
        {routing.locales.map((l) => (
          <button
            key={l}
            onClick={() => onSelectChange(l)}
            disabled={isPending || locale === l}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              locale === l
                ? "bg-brand-500 text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            } disabled:cursor-not-allowed`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
