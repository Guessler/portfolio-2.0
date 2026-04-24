"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  experienceResponse,
  portfolioResponse,
} from "@/interfaces/baseResponse";
import { Cross } from "../../../../public/svg";
import { useLang } from "@/providers/LanguageProvider";
import { dict } from "@/consts/translations";

type LangString = { en: string; ru: string };
type LangArray = { en: string[]; ru: string[] };

function getLangString(value: string | LangString | undefined, lang: "en" | "ru"): string {
  if (!value) return "";
  return typeof value === "object" ? (value as LangString)[lang] : value;
}

function getLangArray(value: string[] | LangArray | undefined, lang: "en" | "ru"): string[] {
  if (!value) return [];
  const hasLangKeys = typeof value === "object" && value !== null && "en" in value && "ru" in value;
  if (hasLangKeys) {
    return (value as LangArray)[lang];
  }
  return value as string[];
}

export default function BaseModal({
  data,
  onClose,
}: {
  data: Omit<portfolioResponse, "image"> | Omit<experienceResponse, "image">;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const t = dict[lang];

  const name = getLangString(data.name as string | LangString, lang);
  const description = getLangString(data.description as string | LangString, lang);
  const contributions = getLangArray(data.contributions as string[] | LangArray, lang);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        key={data.id}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm lg:p-6 xl:p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full xl:max-w-300 xl:max-h-[90vh] xl:h-auto bg-white overflow-y-auto lg:rounded-4xl"
        >
          <div className="p-6 sm:p-8 md:p-10 xl:p-12 flex flex-col min-h-full xl:min-h-0">
            <div className="flex-shrink-0">
              <h1 className="font-playfair text-center text-2xl sm:text-3xl md:text-4xl xl:text-[28px] font-medium tracking-tight mb-2">
                {name}
              </h1>
              {"position" in data && (
                <p className="font-space text-center text-sm sm:text-base md:text-xl uppercase tracking-wider mb-4">
                  {data.position}
                  <span className="opacity-60">{t.modal.positionSuffix}</span>
                </p>
              )}
            </div>
            
            <p className="font-inter text-sm sm:text-base md:text-lg text-center leading-relaxed mb-6 flex-shrink-0">
              {description}
            </p>

            <div className="flex-1 space-y-5 xl:space-y-8">
              <div>
                <h2 className="font-space text-base sm:text-lg md:text-xl xl:text-lg font-medium mb-3">
                  {t.modal.contribution}
                </h2>
                <ul className="space-y-2">
                  {contributions.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="font-inter text-sm sm:text-base md:text-lg xl:text-base flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <span className="mt-0.5 flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-space text-base sm:text-lg md:text-xl xl:text-lg font-medium mb-3">
                  {t.modal.techStack}
                </h2>
                <div className="flex flex-wrap gap-3 sm:gap-4 xl:gap-2">
                  {data.stack.map((TechIcon, index) => (
                    <motion.div
                      key={index}
                      className="w-9 h-9 sm:w-11 sm:h-11 xl:w-12 xl:h-12"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.03, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <TechIcon />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 pt-4 xl:pt-4">
              <motion.a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-space bg-[#0f172a] text-white flex text-base sm:text-lg md:text-xl xl:text-lg items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl xl:rounded-2xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {t.modal.viewProject}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </div>
          
          <motion.button
            className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 xl:top-5 xl:right-8 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Cross />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}