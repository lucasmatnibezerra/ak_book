"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const { dict } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((e.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent2/10 blur-3xl"
      />
      <MaxWidthWrapper>
        <div className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="lg:col-span-7"
          >
            <motion.h1
              variants={item}
              className="max-w-2xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl xl:text-6xl"
            >
              {dict.hero.titlePrefix}{" "}
              <span className="text-primary">Python,</span>{" "}
              <span className="text-accent2">Matlab</span> {dict.hero.titleOr}{" "}
              <span className="text-primary">Octave.</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg italic leading-relaxed text-muted-foreground"
            >
              {dict.hero.quote}
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="https://ai6g.org/books/dsp/ak_dsp_book.html">
                  {dict.hero.startReading}
                  <ArrowUpRight size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#courses">{dict.hero.exploreCourses}</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden [perspective:1200px] lg:col-span-5 lg:flex lg:justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative drop-shadow-[0_30px_60px_rgba(20,14,11,0.18)]"
            >
              <Image
                src="/book_cover.png"
                width={440}
                height={440}
                alt="Digital Signal Processing book cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
