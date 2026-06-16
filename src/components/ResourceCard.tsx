"use client";

import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { RevealItem } from "@/components/ui/reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const ResourceCard = ({
  icon: Icon,
  title,
  description,
  href,
  comingSoon = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
}) => {
  const { dict } = useLanguage();
  const content = (
    <div
      className={cn(
        "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all",
        !comingSoon && "hover:-translate-y-0.5 hover:shadow-soft-lg"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon size={20} />
        </span>
        {comingSoon ? (
          <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {dict.common.comingSoon}
          </span>
        ) : (
          <ArrowUpRight
            size={18}
            className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        )}
      </div>
      <h3 className="font-serif text-lg font-medium text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );

  return (
    <RevealItem>
      {comingSoon || !href ? (
        content
      ) : href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noreferrer noopener" className="block h-full">
          {content}
        </a>
      ) : (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      )}
    </RevealItem>
  );
};

export default ResourceCard;
