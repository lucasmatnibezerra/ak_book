import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) => {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "max-w-none text-left",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
