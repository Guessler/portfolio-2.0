"use client";

import Link from "next/link";
import { Burger, Britain } from "../../../public/svg";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";
import { MobileMenu } from "../ui/modals/MobileMenu";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const { lang, setLang } = useLang();

  const t = dict[lang];

  const toggleVisability = () => {
    setVisible((prev) => !prev);
  };

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 xl:top-5 w-full xl:max-w-335 xl:w-[calc(100%-40px)] flex items-center justify-between py-[15px] xl:py-5 px-2.5 xl:px-11.5 rounded-b-[10px] xl:rounded-[80px] bg-white shadow-[0_6.4px_67.92px_0_rgba(0,0,0,0.2)] z-50">
      <h2 className="font-playfair text-[22px] xl:text-[36px] font-medium tracking-wide">
        {t.header.portfolio}
      </h2>

<ul className="hidden xl:flex gap-12">
        <li className="font-space text-[20px] text-black/60 dark:text-white/60 tracking-wide hover:text-black dark:hover:text-white transition-colors">
          <Link href="#skills">{t.header.nav.skills}</Link>
        </li>
        <li className="font-space text-[20px] text-black/60 dark:text-white/60 tracking-wide hover:text-black dark:hover:text-white transition-colors">
          <Link href="#experience">{t.header.nav.experience}</Link>
        </li>
        <li className="font-space text-[20px] text-black/60 dark:text-white/60 tracking-wide hover:text-black dark:hover:text-white transition-colors">
          <Link href="#portfolio">{t.header.nav.portfolio}</Link>
        </li>
        <li className="font-space text-[20px] text-black/60 dark:text-white/60 tracking-wide hover:text-black dark:hover:text-white transition-colors">
          <Link href="#contacts">{t.header.nav.contacts}</Link>
        </li>
      </ul>

      <ul className="hidden xl:flex gap-4">
        {SOCIAL_MEDIA.map((media, index) => (
          <li key={index}>
            <Link href={media.link}>{media.icon}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center">
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          className="flex cursor-pointer"
        >
          <Britain />
        </button>

        <div onClick={toggleVisability} className="block xl:hidden">
          <Burger />
        </div>
      </div>

      {visible && createPortal(<MobileMenu />, document.body)}
    </nav>
  );
}
