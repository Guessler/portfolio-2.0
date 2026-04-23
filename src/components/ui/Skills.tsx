import { SKILLS_TOOLS } from "@/consts/skills";
import { dict } from "@/consts/translations";
import { useLang } from "@/providers/LanguageProvider";

export default function Skills() {
  const { lang } = useLang();
  const t = dict[lang];
  return (
    <div className="max-w-350 mx-auto">
      <h1 className="font-playfair text-[24px] lg:text-[52px] text-center font-medium tracking-wide">{t.skills.title}</h1>
      <div className="flex flex-col gap-5 lg:gap-15 text-center py-5">
        {Object.entries(SKILLS_TOOLS).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-5 items-center">
            <h3 className="font-space text-black/60 text-[18px] lg:text-[34px] font-medium tracking-wide uppercase">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1 lg:gap-7 justify-center px-12 lg:px-0">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-9.75 h-9.75 lg:w-15  lg:h-15 flex items-center justify-center ">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
