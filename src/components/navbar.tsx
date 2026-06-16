"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { dict } = useLanguage();

  const courseLinks = [
    { title: dict.nav.dsp, href: "/digital-signal-processing" },
    { title: dict.nav.ml, href: "/machine-learning" },
    { title: dict.nav.dl, href: "/deep-learning" },
    { title: dict.nav.dc, href: "/digital-communications" },
  ];

  const allLinks = [{ title: dict.nav.home, href: "/" }, ...courseLinks];

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/lasse.png" width={28} height={28} alt="LASSE logo" className="h-7 w-7" />
            <span className="font-serif text-lg font-medium tracking-tight text-foreground">AI6G</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium transition-colors",
                      pathname === "/" ? "text-primary" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {dict.nav.home}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm font-medium text-foreground/70 data-[state=open]:text-foreground">
                  {dict.nav.courses}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-1 p-2">
                    {courseLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                              pathname === link.href
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80 hover:bg-secondary"
                            )}
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-1 lg:flex">
            <a
              href="https://www.lasse.ufpa.br/en/contact"
              target="_blank"
              rel="noreferrer noopener"
              className="px-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {dict.nav.contact}
            </a>
            <Button asChild size="sm" variant="outline">
              <a href="https://www.lasse.ufpa.br/" target="_blank" rel="noreferrer noopener">
                LASSE
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <LanguageToggle />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <Menu size={20} />
                <span className="sr-only">{dict.nav.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/lasse.png" width={28} height={28} alt="LASSE logo" className="h-7 w-7" />
                <span className="font-serif text-lg font-medium text-foreground">AI6G</span>
              </Link>
              <div className="mt-6 grid gap-1">
                {allLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/80 hover:bg-secondary"
                      )}
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
                <a
                  href="https://www.lasse.ufpa.br/en/contact"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                >
                  {dict.nav.contact}
                </a>
                <a
                  href="https://www.lasse.ufpa.br/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                >
                  LASSE
                  <ArrowUpRight size={16} />
                </a>
                <LanguageToggle className="mt-2 w-fit" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
