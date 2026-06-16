import { CheckCircle2 } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const TopicList = ({ title, topics }: { title: string; topics: string[] }) => {
  return (
    <div>
      <h2 className="font-serif text-2xl font-medium text-foreground">{title}</h2>
      <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.06}>
        {topics.map((topic, index) => (
          <RevealItem key={index}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-foreground/90">{topic}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
};

export default TopicList;
