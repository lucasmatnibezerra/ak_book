import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PageHero = ({
  eyebrow = "Course",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <MaxWidthWrapper>
        <div className="relative py-16 sm:py-20">
          <Reveal>
            <Badge>{eyebrow}</Badge>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PageHero;
