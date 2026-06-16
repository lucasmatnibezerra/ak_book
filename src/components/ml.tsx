"use client";

import { Code2, PlayCircle, Presentation } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import TopicList from "@/components/TopicList";
import { RevealGroup } from "@/components/ui/reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ML() {
  const { dict } = useLanguage();

  return (
    <div>
      <PageHero
        eyebrow={dict.pageHero.ml.eyebrow}
        title={dict.pageHero.ml.title}
        description={dict.pageHero.ml.description}
      />

      <MaxWidthWrapper>
        <div className="space-y-12 py-14 sm:py-16">
          <TopicList title={dict.common.whatYoullLearn} topics={dict.ml.topics} />

          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">{dict.common.learningMaterials}</h2>
            <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2" stagger={0.1}>
              <ResourceCard
                icon={Presentation}
                title={dict.common.slides}
                description={dict.ml.slidesDesc}
                href="https://nextcloud.lasseufpa.org/s/eirR4bqKKP9xxRe?path=%2Fslides"
              />
              <ResourceCard
                icon={PlayCircle}
                title={dict.common.videos}
                description={dict.common.videosDesc}
                href="https://nextcloud.lasseufpa.org/s/eirR4bqKKP9xxRe?path=%2Fvideolectures"
              />
            </RevealGroup>
            <RevealGroup className="mt-5 grid gap-5" stagger={0.1}>
              <ResourceCard icon={Code2} title={dict.common.code} description={dict.ml.codeDesc} comingSoon />
            </RevealGroup>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
