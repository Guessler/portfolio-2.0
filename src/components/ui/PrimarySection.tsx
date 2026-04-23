import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

export const PrimarySection = () => {
  const { lang } = useLang();
  const t = dict[lang];
  return (
    <div className="max-w-335 mx-auto text-center mt-20">
      <h1 className="font-playfair text-[28px] md:text-[40px] lg:text-[56px] font-medium tracking-tight leading-tight">{t.primary.title}</h1>
      <p className="font-inter text-[15px] lg:text-[18px] text-black/60 dark:text-white/60 max-w-178 mx-auto mt-4 leading-relaxed">
      {t.primary.description}
      </p>
    </div>
  );
};
