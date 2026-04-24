"use client";

import Link from "next/link";
import { Burger, Britain, WhiteBurger, Russia } from "../../../public/svg";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";
import { MobileMenu } from "../ui/modals/MobileMenu";
import { createPortal } from "react-dom";
import { useState, useSyncExternalStore } from "react";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";
import { useTheme } from "@/providers/ThemeProvider";
import { AnimatePresence } from "framer-motion";

function useHydrated() {
  return useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  );
}

export default function Header() {
  const [visible, setVisible] = useState(false);
  const { lang, setLang } = useLang();
  const { theme } = useTheme();
  const hydrated = useHydrated();

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
        <li className="font-space text-[20px]">
          <Link href="#skills">{t.header.nav.skills}</Link>
        </li>
        <li className="font-space text-[20px]">
          <Link href="#experience">{t.header.nav.experience}</Link>
        </li>
        <li className="font-space text-[20px]">
          <Link href="#portfolio">{t.header.nav.portfolio}</Link>
        </li>
        <li className="font-space text-[20px]">
          <Link href="#contacts">{t.header.nav.contacts}</Link>
        </li>
      </ul>

      <ul className="hidden xl:flex gap-4">
        {SOCIAL_MEDIA.map((media, index) => (
          <li className="w-[48px]" key={index}>
            <Link href={media.link}>{media.icon}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center">
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          className="flex cursor-pointer"
        >
          {lang === "en" ? <Britain /> : <Russia />}

        </button>

        <div onClick={toggleVisability} className="block xl:hidden">
          <span className="dark:hidden">
            <Burger />
          </span>
          <span className="hidden dark:block">
            <WhiteBurger />
          </span>
        </div>
      </div>

      {visible && createPortal(
        <AnimatePresence>
          <MobileMenu key="mobile-menu" />
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}
