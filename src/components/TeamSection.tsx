"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type TeamMemberId = "aldebaro" | "leonardo" | "joao" | "valdinei" | "lucas";

export type TeamMember = {
  id: TeamMemberId;
  name: string;
  imageSrc: string | StaticImageData;
};

const TeamSection = ({ members }: { members: TeamMember[] }) => {
  const { dict } = useLanguage();
  const [activeId, setActiveId] = useState<TeamMemberId | null>(null);
  const active = members.find((member) => member.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  return (
    <>
      <RevealGroup className="flex flex-wrap justify-center gap-x-6 gap-y-10" stagger={0.08}>
        {members.map((member) => {
          const info = dict.home.team[member.id];
          return (
            <RevealItem key={member.id} className="flex w-40 flex-col items-center">
              <button
                type="button"
                onClick={() => setActiveId(member.id)}
                className="group flex w-full flex-col items-center text-center"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-secondary shadow-soft transition-transform duration-200 group-hover:scale-105">
                  <Image src={member.imageSrc} alt={member.name} fill sizes="128px" className="object-cover" />
                </div>
                <h3 className="mt-4 font-serif text-base font-medium text-foreground">{member.name}</h3>
                {info.role && (
                  <Badge variant="outline" className="mt-1.5">
                    {info.role}
                  </Badge>
                )}
              </button>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-soft-lg"
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label={dict.common.close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X size={18} />
              </button>
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-border bg-secondary shadow-soft">
                <Image src={active.imageSrc} alt={active.name} fill sizes="128px" className="object-cover" />
              </div>
              <h3 className="mt-5 text-center font-serif text-xl font-medium text-foreground">{active.name}</h3>
              {dict.home.team[active.id].role && (
                <div className="mt-1.5 flex justify-center">
                  <Badge variant="outline">{dict.home.team[active.id].role}</Badge>
                </div>
              )}
              <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                {dict.home.team[active.id].description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection;
