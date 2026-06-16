"use client";

import { BrainCircuit, BrainCog, Radio, SatelliteDish } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { CourseGrid, type Course } from "@/components/CourseCard";
import TeamSection, { type TeamMember } from "@/components/TeamSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const teamMembers: TeamMember[] = [
  { id: "aldebaro", name: "Prof. Aldebaro Klautau", imageSrc: "/aldebaro.webp" },
  { id: "leonardo", name: "Prof. Leonardo Ramalho", imageSrc: "/leo-1.webp" },
  { id: "joao", name: "João Ferreira", imageSrc: "/jvictorferreira.jpeg" },
  { id: "valdinei", name: "Valdinei Conceição", imageSrc: "/ValdineiConceicao.webp" },
  { id: "lucas", name: "Lucas Matni", imageSrc: "/lucasmatni.png" },
];

export default function Home() {
  const { dict } = useLanguage();

  const courses: Course[] = [
    {
      title: dict.home.courses.dsp.title,
      description: dict.home.courses.dsp.description,
      link: "/digital-signal-processing",
      icon: <Radio size={24} />,
      accent: "primary",
    },
    {
      title: dict.home.courses.ml.title,
      description: dict.home.courses.ml.description,
      link: "/machine-learning",
      icon: <BrainCircuit size={24} />,
      accent: "accent2",
    },
    {
      title: dict.home.courses.dl.title,
      description: dict.home.courses.dl.description,
      link: "/deep-learning",
      icon: <BrainCog size={24} />,
      accent: "primary",
    },
    {
      title: dict.home.courses.dc.title,
      description: dict.home.courses.dc.description,
      link: "/digital-communications",
      icon: <SatelliteDish size={24} />,
      accent: "accent2",
    },
  ];

  return (
    <>
      <Hero />

      <section id="courses" className="bg-secondary/40 py-20 sm:py-24">
        <MaxWidthWrapper>
          <SectionHeading eyebrow={dict.home.coursesEyebrow} title={dict.home.coursesTitle} />
          <div className="mt-12">
            <CourseGrid courses={courses} />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-20 sm:py-24">
        <MaxWidthWrapper>
          <SectionHeading
            eyebrow={dict.home.teamEyebrow}
            title={dict.home.teamTitle}
            description={dict.home.teamDescription}
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">{dict.home.teamHint}</p>
          <div className="mt-12">
            <TeamSection members={teamMembers} />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
