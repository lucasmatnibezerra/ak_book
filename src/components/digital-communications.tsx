"use client";

import { ArrowUpRight, Code2, PlayCircle, Presentation } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import TopicList from "@/components/TopicList";
import { Button } from "@/components/ui/button";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DigitalCommunications() {
  const { dict } = useLanguage();

  return (
    <div>
      <PageHero
        eyebrow={dict.pageHero.dc.eyebrow}
        title={dict.pageHero.dc.title}
        description={dict.pageHero.dc.description}
      />

      <MaxWidthWrapper>
        <div className="py-14 sm:py-16">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">{dict.dc.bookTitle}</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">{dict.pds.bookDesc}</p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href="https://ai6g.org/books/telecom/ak_telecom_book.html">
                {dict.common.startReading}
                <ArrowUpRight size={18} />
              </a>
            </Button>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.1}>
            <ResourceCard
              icon={Presentation}
              title={dict.common.slides}
              description={dict.common.slidesDesc}
              href="https://nextcloud.lasseufpa.org/s/3rKJ2PPGFeQq6o6?path=%2Fslides"
            />
            <ResourceCard
              icon={PlayCircle}
              title={dict.common.videos}
              description={dict.common.videosDesc}
              href="https://nextcloud.lasseufpa.org/s/3rKJ2PPGFeQq6o6?path=%2Fvideolectures"
            />
          </RevealGroup>

          <Reveal className="mt-5">
            <ResourceCard
              icon={Code2}
              title={dict.common.code}
              description={dict.common.codeDescBook}
              href="https://github.com/aldebaro/dsp-telecom-book-code"
            />
          </Reveal>

          <div className="mt-12">
            <TopicList title={dict.common.whatYoullLearn} topics={dict.dc.topics} />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
