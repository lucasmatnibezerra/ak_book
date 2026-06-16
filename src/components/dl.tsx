"use client";

import { Code2, FileText } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import TopicList from "@/components/TopicList";
import { RevealGroup } from "@/components/ui/reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DL() {
  const { dict } = useLanguage();

  return (
    <div>
      <PageHero
        eyebrow={dict.pageHero.dl.eyebrow}
        title={dict.pageHero.dl.title}
        description={dict.pageHero.dl.description}
      />

      <MaxWidthWrapper>
        <div className="space-y-12 py-14 sm:py-16">
          <TopicList title={dict.common.whatYoullLearn} topics={dict.dl.topics} />

          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">{dict.common.learningMaterials}</h2>
            <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2" stagger={0.1}>
              <ResourceCard
                icon={FileText}
                title={dict.dl.slidesVideosTitle}
                description={dict.dl.slidesVideosDesc}
                comingSoon
              />
              <ResourceCard icon={Code2} title={dict.common.code} description={dict.dl.codeDesc} comingSoon />
            </RevealGroup>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
