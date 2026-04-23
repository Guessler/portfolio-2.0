"use client";

import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";
import Link from "next/link";

export default function Footer() {

  const { lang } = useLang();
  const t = dict[lang];

  return (
    <footer className="max-w-335 mx-auto text-center mb-20">
      <motion.h1 
        className="font-playfair text-[24px] lg:text-[52px] mb-9 font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.footer.title}
      </motion.h1>

      <ul className="flex gap-6 items-center justify-center">
        {SOCIAL_MEDIA.map((media, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href={media.link}
              className="inline-flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20"
            >
              <div className="w-full h-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-full">
                {media.icon}
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
}