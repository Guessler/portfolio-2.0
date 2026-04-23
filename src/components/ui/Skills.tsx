import { motion } from "framer-motion";
import { SKILLS_TOOLS } from "@/consts/skills";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

const categoryColors: Record<string, string> = {
  DEVOPS: "emerald",
  BACKEND: "blue",
  FRONTEND: "purple",
};

export default function Skills() {
  const { lang } = useLang();
  const t = dict[lang];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="font-playfair text-[24px] lg:text-[52px] text-center font-medium tracking-wide mb-8">
        {t.skills.title}
      </h1>

      <div className="grid gap-6">
        {Object.entries(SKILLS_TOOLS).map(([category, items], catIdx) => {
          const color = categoryColors[category] || "purple";
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className={`rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-${color}-200 dark:border-${color}-800 bg-${color}-50/50 dark:bg-${color}-950/20`}
            >
              <h3 className={`font-space text-lg lg:text-xl font-semibold tracking-wide uppercase text-${color}-600 dark:text-${color}-400 mb-4 text-center`}>
                {category}
              </h3>

              <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
                {items.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center "
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}