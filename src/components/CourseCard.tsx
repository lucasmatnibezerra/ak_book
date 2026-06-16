"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export type Course = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  accent?: "primary" | "accent2";
};

const CourseCard = ({ course }: { course: Course }) => {
  const { dict } = useLanguage();
  const accentClass =
    course.accent === "accent2" ? "bg-accent2/10 text-accent2" : "bg-primary/10 text-primary";

  return (
    <RevealItem>
      <Link
        href={course.link}
        className="group relative block h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-soft-lg hover:ring-2 hover:ring-primary/40"
      >
        <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl", accentClass)}>
          {course.icon}
        </span>
        <h3 className="mt-5 font-serif text-xl font-medium text-foreground">{course.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
          {dict.common.explore}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </RevealItem>
  );
};

export const CourseGrid = ({ courses }: { courses: Course[] }) => {
  return (
    <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
      {courses.map((course) => (
        <CourseCard key={course.link} course={course} />
      ))}
    </RevealGroup>
  );
};
