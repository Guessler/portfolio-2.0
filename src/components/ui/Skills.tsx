import { motion } from "framer-motion";
import { SKILLS_TOOLS } from "@/consts/skills";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

const categoryColors: Record<string, { gradient: string; text: string }> = {
  DEVOPS: { gradient: "from-emerald-400 to-emerald-600", text: "text-emerald-600 dark:text-emerald-400" },
  BACKEND: { gradient: "from-blue-400 to-blue-600", text: "text-blue-600 dark:text-blue-400" },
  FRONTEND: { gradient: "from-purple-400 to-purple-600", text: "text-purple-600 dark:text-purple-400" },
};

export default function Skills() {
  const { lang } = useLang();
  const t = dict[lang];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h1 
        className="font-playfair text-[24px] lg:text-[52px] text-center font-medium tracking-wide mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.skills.title}
      </motion.h1>

      <div className="grid gap-6">
        {Object.entries(SKILLS_TOOLS).map(([category, items], catIdx) => {
          const { gradient, text } = categoryColors[category] || categoryColors.FRONTEND;
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="relative rounded-2xl lg:rounded-3xl p-[2px]"
            >
              <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl`} />
              <div className="relative rounded-2xl lg:rounded-3xl p-5 lg:p-6">
                <h3 className={`font-space text-lg lg:text-xl font-semibold tracking-wide uppercase ${text} mb-4 text-center`}>
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
                  {items.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + index * 0.03 }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 1.3 }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}