"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageToggle = ({ className }: { className?: string }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Portuguese" : "Mudar para inglês"}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground",
        className
      )}
    >
      <Languages size={15} />
      {language === "en" ? "PT" : "EN"}
    </button>
  );
};

export default LanguageToggle;
