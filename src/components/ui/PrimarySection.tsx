import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

export const PrimarySection = () => {
  const { lang } = useLang();
  const t = dict[lang];
  return (
    <div className="max-w-335 mx-auto text-center mt-20">
      <h1 className="text-[24px] lg:text-[48px]">{t.primary.title}</h1>
      <p className="text-[15px] lg:text-[20px] text-black/50 max-w-178 mx-auto">
      {t.primary.description}
      </p>
    </div>
  );
};
