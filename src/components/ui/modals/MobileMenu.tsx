"use client";
import Link from "next/link";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";

export const MobileMenu = () => {
  const { lang } = useLang();
  const t = dict[lang];

  return (
    <div className="fixed top-0 left-0 z-10 bg-white w-full pt-24 h-screen flex flex-col">
      <nav className="flex-1 flex flex-col gap-2 px-6">
        <Link href="#skills" className="font-space text-2xl py-3">
          {t.header.nav.skills}
        </Link>
        <Link href="#experience" className="font-space text-2xl py-3">
          {t.header.nav.experience}
        </Link>
        <Link href="#portfolio" className="font-space text-2xl py-3">
          {t.header.nav.portfolio}
        </Link>
        <Link href="#contacts" className="font-space text-2xl py-3">
          {t.header.nav.contacts}
        </Link>
      </nav>

      <div className="px-6 pb-10">
        <p className="font-space text-sm uppercase tracking-wider mb-4 opacity-60">Connect</p>
        <div className="flex gap-4">
          {SOCIAL_MEDIA.map((media, index) => (
            <Link
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center"
            >
              <div className="[&>img]:max-w-full [&>img]:max-h-full [&>img]:object-contain">
                {media.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};