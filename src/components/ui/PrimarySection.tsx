import { motion } from "framer-motion";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

export const PrimarySection = () => {
  const { lang } = useLang();
  const t = dict[lang];
  return (
    <div className="max-w-335 mx-auto text-center mt-20">
      <motion.h1 
        className="font-playfair text-[28px] md:text-[40px] lg:text-[56px] font-medium tracking-tight leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {t.primary.title}
      </motion.h1>
      <motion.p 
        className="font-inter text-[15px] lg:text-[18px] max-w-178 mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {t.primary.description}
      </motion.p>
    </div>
  );
};