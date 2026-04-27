"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";

export const MobileMenu = ({ onClose }: { onClose?: () => void }) => {
  const { lang } = useLang();
  const t = dict[lang];

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 z-20 bg-white w-full pt-24 h-screen flex flex-col"
    >
      <motion.nav
        className="flex-1 flex flex-col gap-2 px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <Link
          href="#experience"
          onClick={handleLinkClick}
          className="font-space text-2xl py-3"
        >
          {t.header.nav.experience}
        </Link>
        <Link
          href="#portfolio"
          onClick={handleLinkClick}
          className="font-space text-2xl py-3"
        >
          {t.header.nav.portfolio}
        </Link>
        <Link
          href="#contacts"
          onClick={handleLinkClick}
          className="font-space text-2xl py-3"
        >
          {t.header.nav.contacts}
        </Link>
        <Link
          href="#skills"
          onClick={handleLinkClick}
          className="font-space text-2xl py-3"
        >
          {t.header.nav.skills}
        </Link>
      </motion.nav>

      <motion.div
        className="px-6 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-4">
          {SOCIAL_MEDIA.map((media, index) => (
            <Link
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center"
            >
              <div className=" [&>img]:object-contain">{media.icon}</div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
