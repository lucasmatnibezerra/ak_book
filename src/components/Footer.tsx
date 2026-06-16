"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "../../public/LasseLogo.png";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { title: "Instagram", href: "https://www.instagram.com/lasse.ufpa/", icon: Instagram },
  { title: "LinkedIn", href: "https://br.linkedin.com/company/lasse", icon: Linkedin },
  { title: "YouTube", href: "https://www.youtube.com/@lasse-ufpa9613/videos", icon: Youtube },
  { title: "Facebook", href: "https://www.facebook.com/lasseufpa/?locale=pt_BR", icon: Facebook },
];

const Footer = () => {
  const { dict } = useLanguage();

  const courseLinks = [
    { title: dict.nav.dsp, href: "/digital-signal-processing" },
    { title: dict.nav.ml, href: "/machine-learning" },
    { title: dict.nav.dl, href: "/deep-learning" },
    { title: dict.nav.dc, href: "/digital-communications" },
  ];

  const resourceLinks = [
    { title: dict.footer.resourceLinks.dspBook, href: "https://ai6g.org/books/dsp/ak_dsp_book.html" },
    { title: dict.footer.resourceLinks.codeRepo, href: "https://github.com/aldebaro/dsp-telecom-book-code" },
    { title: dict.footer.resourceLinks.lasse, href: "https://www.lasse.ufpa.br/" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-12 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-12 w-12 overflow-hidden">
              <Image src={logo} alt="LASSE logo" fill className="object-contain" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{dict.footer.blurb}</p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium text-foreground">{dict.footer.coursesHeader}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium text-foreground">{dict.footer.resourcesHeader}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-primary"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium text-foreground">{dict.footer.followHeader}</h3>
            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              {socialLinks.map(({ title, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={title}
                  className="transition-colors hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} LASSE. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
