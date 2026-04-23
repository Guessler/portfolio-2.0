"use client";

import { SOCIAL_MEDIA } from "@/consts/socialMedia";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";
import Link from "next/link";


export default function Footer() {

  const { lang } = useLang();
  const t = dict[lang];

  return (
    <footer className="max-w-335 mx-auto text-center mb-20">
      <h1 className="font-playfair text-[24px] lg:text-[52px] mb-9 font-medium tracking-wide">
        {t.footer.title}
      </h1>

      <ul className="flex gap-6 items-center justify-center">
        {SOCIAL_MEDIA.map((media, index) => (
          <Link
            href={media.link}
            key={index}
            className="inline-flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20 transition-transform hover:scale-110"
          >
            <div className="w-full h-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-full">
              {media.icon}
            </div>
          </Link>
        ))}
      </ul>
    </footer>
  );
}